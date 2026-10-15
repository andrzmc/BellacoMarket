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
      const errorMessage =
        (typeof parsedData === 'object' &&
          (parsedData?.message || parsedData?.error)) ||
        (typeof parsedData === 'string' && parsedData.length > 0
          ? parsedData
          : null) ||
        response.statusText ||
        `HTTP request failed with status ${response.status}`;

      return {
        data: null,
        error: String(errorMessage),
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
    const errorMessage =
      err instanceof Error ? err.message : 'Network request failed';

    return {
      data: null,
      error: errorMessage,
      loading: false,
    };
  }
};

ApiInterceptorService.clearCache = clearApiCache;

export default ApiInterceptorService;
