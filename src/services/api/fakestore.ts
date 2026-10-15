import { FAKE_STORE_API_SERVICE_CONFIG } from '@/config/services/fakestore';
import { FakeStoreProduct } from '@/models/interfaces/services/fakestore';
import { ApiInterceptorService } from './interceptor';

export const GetFakeStoreProductsService = () =>
  ApiInterceptorService<FakeStoreProduct[]>({
    baseUrl: FAKE_STORE_API_SERVICE_CONFIG,
    path: '/products',
    cache: true,
  });

export const GetFakeStoreProductDetailService = (id: string) =>
  ApiInterceptorService<FakeStoreProduct>({
    baseUrl: FAKE_STORE_API_SERVICE_CONFIG,
    path: `/products/${id}`,
    cache: true,
  });

