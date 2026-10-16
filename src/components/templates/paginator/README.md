# Paginator Template

## Description

A high-level composite template component designed to orchestrate asynchronous data fetching, state transitions (loading, error, and success), and collection rendering for catalog and paginated datasets. 

It integrates with the custom [useApi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/services/hooks/useApi.ts) hook to execute API service requests, seamlessly formats raw response payloads into a standardized `CatalogResponse` schema using an optional `interceptor`, and renders data using an optimized `FlatList` supporting single-column lists and multi-column grid layouts.

## Usage

### Basic Usage with Service and Interceptor

```tsx
import React, { FC } from 'react';
import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import {
  GetFakeStoreProductsService,
  TransformFakeStoreProductsToCatalogService,
} from '@/services/api/fakestore';

const CatalogScreen: FC = () => {
  return (
    <ScreenLayout header={{ title: 'Bellaco Market' }}>
      <PaginatorTemplate
        request={GetFakeStoreProductsService}
        interceptor={TransformFakeStoreProductsToCatalogService}
      />
    </ScreenLayout>
  );
};

export default CatalogScreen;
```

### Multi-Column Grid with Custom Item Renderer

```tsx
import React, { FC } from 'react';
import { View, Image } from 'react-native';
import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { CatalogItem } from '@/models/interfaces/templates';
import {
  GetFakeStoreProductsService,
  TransformFakeStoreProductsToCatalogService,
} from '@/services/api/fakestore';

const ProductCatalogScreen: FC = () => {
  const renderProductItem = (item: CatalogItem) => (
    <CardUi>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 120, resizeMode: 'contain' }}
        />
      )}
      <TypographyUi weight="bold" numberOfLines={2}>
        {item.label}
      </TypographyUi>
    </CardUi>
  );

  return (
    <ScreenLayout header={{ title: 'Catálogo' }}>
      <PaginatorTemplate
        request={GetFakeStoreProductsService}
        interceptor={TransformFakeStoreProductsToCatalogService}
        numColumns={2}
        renderItem={renderProductItem}
      />
    </ScreenLayout>
  );
};

export default ProductCatalogScreen;
```

## Component States

| State | Condition | Visual Representation |
|---|---|---|
| **Loading** | `loading && !data?.items?.length` | Renders [LoaderUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/loader/index.tsx) with `size="big"` centered on the screen. |
| **Error** | `error && !data?.items?.length` | Displays the sanitized error message using [TypographyUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/typography/index.tsx) with `color="error"`. |
| **Success** | `data && data.items.length > 0` | Renders a virtualized `FlatList` containing the catalog items. |

## Props

| Prop | Type | Required | Default | Description |
|---|---|:---:|:---:|---|
| `request` | `() => Promise<ApiInterceptorResponse<any[]>>` | Yes | - | Asynchronous service function responsible for fetching the data. |
| `interceptor` | `(data: any) => CatalogResponse` | No | `undefined` | Optional formatting function that transforms the raw response payload into a standardized `CatalogResponse`. |
| `renderItem` | `(item: CatalogItem) => React.ReactElement` | No | `Default CardUi` | Custom render function for each catalog element. If omitted, falls back to a default `CardUi` with `TypographyUi`. |
| `numColumns` | `number` | No | `1` | Number of columns to display in the list layout. Values greater than 1 configure a grid. |
| `limit` | `number` | No | `10` | Maximum number of items per page/fetch. |
| `offsetInitial` | `number` | No | `0` | Initial offset index for pagination. |
| `onItemsChange` | `(items: CatalogItem[]) => void` | No | `undefined` | Callback invoked when the collection of items changes. |

## Data Contracts

### `CatalogItem`

Represents a single standardized item within the catalog:

| Field | Type | Required | Description |
|---|---|:---:|---|
| `value` | `number \| string` | Yes | Unique identifier used for React Native keys and selection. |
| `label` | `string` | Yes | Primary display title or description. |
| `tags` | `(number \| string)[]` | No | Category tags or labels associated with the item. |
| `color` | `string` | No | Optional hex color code for accenting the item. |
| `image` | `string` | No | URL of the item's display thumbnail or image. |

### `CatalogResponse`

Contract returned by the `interceptor` representing the formatted collection:

| Field | Type | Required | Description |
|---|---|:---:|---|
| `total` | `number` | Yes | Total count of items available in the catalog. |
| `items` | `CatalogItem[]` | Yes | Array of formatted `CatalogItem` records to be displayed. |
