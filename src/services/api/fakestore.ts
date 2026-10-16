import { FAKE_STORE_API_SERVICE_CONFIG } from '@/config/services/fakestore';
import { FakeStoreProduct } from '@/models/interfaces/services/fakestore';
import { ApiInterceptorService } from './interceptor';

export const GetFakeStoreProductsService = () =>
  ApiInterceptorService<FakeStoreProduct[]>({
    baseUrl: FAKE_STORE_API_SERVICE_CONFIG,
    path: '/products',
    cache: true,
  });

export const GetFakeStoreProductDetailService = (id: string | number) =>
  ApiInterceptorService<FakeStoreProduct>({
    baseUrl: FAKE_STORE_API_SERVICE_CONFIG,
    path: `/products/${id}`,
    cache: true,
  });

export const TransformFakeStoreProductsToCatalogService = (
  products: FakeStoreProduct[],
) => {
  return {
    total: products.length,
    items: products.map(product => ({
      value: product.id,
      label: product.title,
      tags: [product.category],
      image: product.image,
      amount: product.price,
      count: product.rating.count,
    })),
  };
};
