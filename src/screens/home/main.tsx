import MarketCardLayout from '@/components/layouts/cards/card-market';
import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import {
  GetFakeStoreProductsService,
  TransformFakeStoreProductsToCatalogService,
} from '@/services/api/fakestore';
import React from 'react';

const MainHomeScreen = () => {
  return (
    <ScreenLayout header={{ title: 'Bellaco Market' }}>
      <PaginatorTemplate
        request={GetFakeStoreProductsService}
        interceptor={TransformFakeStoreProductsToCatalogService}
        numColumns={2}
        renderItem={item => <MarketCardLayout {...item} />}
      />
    </ScreenLayout>
  );
};

export default MainHomeScreen;
