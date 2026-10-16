import { ApiInterceptorResponse } from './api';

export interface CatalogItem {
  value: number | string;
  label: string;
  tags?: (number | string)[];
  color?: string;
  image?: string;
  amount?: number;
}

export interface CatalogResponse {
  total: number;
  items: CatalogItem[];
}

export interface PaginatorTemplateProps {
  request: () => Promise<ApiInterceptorResponse<any[]>>;
  interceptor?: (data: any) => CatalogResponse;
  limit?: number;
  offsetInitial?: number;
  renderItem?: (item: CatalogItem) => React.ReactElement;
  numColumns?: number;
  onItemsChange?: (items: CatalogItem[]) => void;
}

export interface FooterPaginatorTemplateProps {
  loading: boolean;
  catalog?: CatalogResponse;
  errorStatus?: string;
}
