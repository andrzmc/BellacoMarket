import {
  ApiInterceptorResponse,
  UseApiResult,
} from '@/models/interfaces/api';
import { useCallback, useEffect, useState } from 'react';

export const useApi = <T = unknown>(
  service: () => Promise<ApiInterceptorResponse<T>>,
  autoFetch: boolean = true,
): UseApiResult<T> => {
  const [response, setResponse] = useState<ApiInterceptorResponse<T>>({
    data: null,
    error: null,
    loading: autoFetch,
  });

  const refetch = useCallback(async () => {
    setResponse(prev => ({ ...prev, loading: true }));
    const result = await service();
    setResponse(result);
    return result;
  }, [service]);

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
