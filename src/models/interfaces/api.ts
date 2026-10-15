import { ApiHeaders, HttpMethod, QueryParams } from '@/models/types/api';

export interface ApiInterceptorOptions<TBody = unknown> {
  baseUrl?: string;
  path: string;
  method?: HttpMethod;
  payload?: TBody;
  params?: QueryParams;
  headers?: ApiHeaders;
  cache?: boolean;
  cacheTime?: number;
}

export interface ApiInterceptorResponse<T = unknown> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export interface CacheEntry<T = unknown> {
  data: T;
  timestamp: number;
  cacheTime?: number;
}

export interface UseApiResult<T = unknown> extends ApiInterceptorResponse<T> {
  refetch: () => Promise<ApiInterceptorResponse<T>>;
}
