import { API_RESPONSE_ERROR_MESSAGE_CONFIG } from '@/config/services/interceptor';
import {
  ApiInterceptorOptions,
  ApiInterceptorResponse,
  CacheEntry,
} from '@/models/interfaces/api';
import { HttpMethod } from '@/models/types/api';

const memoryCache = new Map<string, CacheEntry<any>>();

const buildUrl = (
  baseUrl: string = '',
  path: string,
  params?: ApiInterceptorOptions['params'],
): string => {
  let url = path;

  if (!/^https?:\/\//i.test(path)) {
    const cleanBase = baseUrl.replace(/\/+$/, '');
    const cleanPath = path.replace(/^\/+/, '');
    url = cleanBase ? `${cleanBase}/${cleanPath}` : cleanPath;
  }

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }

  return url;
};

export const clearApiCache = (keyPattern?: string): void => {
  if (keyPattern) {
    for (const key of memoryCache.keys()) {
      if (key.includes(keyPattern)) {
        memoryCache.delete(key);
      }
    }
  } else {
    memoryCache.clear();
  }
};

const sanitizeErrorMessage = (status: number, parsedData: any): string => {
  if (parsedData && typeof parsedData === 'object') {
    const candidate =
      parsedData.message || parsedData.error || parsedData.detail;
    if (typeof candidate === 'string') {
      const trimmed = candidate.trim();
      const isHtml =
        /<\/?[a-z][\s\S]*>/i.test(trimmed) || trimmed.startsWith('<!');
      const isTechnicalRouting = /^Cannot (GET|POST|PUT|DELETE|PATCH)/i.test(
        trimmed,
      );

      if (
        !isHtml &&
        !isTechnicalRouting &&
        trimmed.length > 0 &&
        trimmed.length < 200
      ) {
        return trimmed;
      }
    }
  }

  if (API_RESPONSE_ERROR_MESSAGE_CONFIG[status]) {
    return API_RESPONSE_ERROR_MESSAGE_CONFIG[status];
  }

  if (status >= 400 && status < 500) {
    return 'We could not complete your request. Please try again.';
  }

  if (status >= 500) {
    return 'Server error. Please try again in a few moments.';
  }

  return 'An unexpected error occurred. Please try again.';
};

export const ApiInterceptorService = async <T = unknown, TBody = unknown>(
  options: ApiInterceptorOptions<TBody>,
): Promise<ApiInterceptorResponse<T>> => {
  const {
    baseUrl,
    path,
    method = 'GET' as HttpMethod,
    payload,
    params,
    headers = {},
    cache = false,
    cacheTime,
  } = options;

  const url = buildUrl(baseUrl, path, params);
  const cacheKey = `${method}:${url}:${payload ? JSON.stringify(payload) : ''}`;

  if (cache) {
    const cached = memoryCache.get(cacheKey);
    if (cached) {
      const isExpired =
        cached.cacheTime !== undefined && cached.cacheTime > 0
          ? Date.now() - cached.timestamp > cached.cacheTime
          : false;

      if (!isExpired) {
        return {
          data: cached.data as T,
          error: null,
          loading: false,
        };
      }

      memoryCache.delete(cacheKey);
    }
  }

  const requestHeaders: Record<string, string> = {
    Accept: 'application/json',
    ...headers,
  };

  let body: BodyInit_ | undefined;

  if (payload !== undefined && payload !== null) {
    if (typeof FormData !== 'undefined' && payload instanceof FormData) {
      body = payload;
      delete requestHeaders['Content-Type'];
    } else if (typeof payload === 'string') {
      body = payload;
    } else {
      body = JSON.stringify(payload);
      if (!requestHeaders['Content-Type']) {
        requestHeaders['Content-Type'] = 'application/json';
      }
    }
  }

  try {
    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body,
    });

    if (response.status === 204 || response.status === 205) {
      return {
        data: null,
        error: null,
        loading: false,
      };
    }

    const contentType = response.headers.get('content-type') || '';
    let parsedData: any = null;

    if (contentType.includes('application/json')) {
      try {
        parsedData = await response.json();
      } catch {
        parsedData = null;
      }
    } else {
      try {
        parsedData = await response.text();
      } catch {
        parsedData = null;
      }
    }

    if (!response.ok) {
      const errorMessage = sanitizeErrorMessage(response.status, parsedData);

      return {
        data: null,
        error: errorMessage,
        loading: false,
      };
    }

    if (cache && parsedData !== null) {
      memoryCache.set(cacheKey, {
        data: parsedData,
        timestamp: Date.now(),
        cacheTime,
      });
    }

    return {
      data: parsedData as T,
      error: null,
      loading: false,
    };
  } catch (err: unknown) {
    let errorMessage =
      'Unable to connect to the server. Please check your internet connection.';

    if (err instanceof Error) {
      if (err.name === 'AbortError') {
        errorMessage =
          'The request was canceled or timed out. Please try again.';
      }
    }

    return {
      data: null,
      error: errorMessage,
      loading: false,
    };
  }
};

ApiInterceptorService.clearCache = clearApiCache;

export default ApiInterceptorService;
