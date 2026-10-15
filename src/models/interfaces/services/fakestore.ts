import { FakeStoreCategory } from '@/models/enums/services/fakestore';

export interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: FakeStoreCategory;
  image: string;
  rating: FakeStoreRating;
}

export interface FakeStoreRating {
  rate: number;
  count: number;
}
