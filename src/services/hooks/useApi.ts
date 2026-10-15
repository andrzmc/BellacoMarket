import {
  ApiInterceptorResponse,
  UseApiResult,
} from '@/models/interfaces/api';
import { useCallback, useEffect, useState } from 'react';

export const useApi = <T = unknown, R = T>(
  service: () => Promise<ApiInterceptorResponse<T>>,
  interceptor?: (data: T) => R,
  autoFetch: boolean = true,
): UseApiResult<R> => {
  const [response, setResponse] = useState<ApiInterceptorResponse<R>>({
    data: null,
    error: null,
    loading: autoFetch,
  });

  const refetch = useCallback(async () => {
    setResponse(prev => ({ ...prev, loading: true }));
    const result = await service();
    const data =
      interceptor && result.data
        ? interceptor(result.data)
        : (result.data as unknown as R);

    const formattedResult: ApiInterceptorResponse<R> = {
      ...result,
      data,
    };

    setResponse(formattedResult);
    return formattedResult;
  }, [service, interceptor]);

  useEffect(() => {
    if (autoFetch) {
      refetch();
    }
  }, [autoFetch, refetch]);

  return {
    ...response,
    refetch,
  };
};

export default useApi;
