import ScreenLayout from '@/components/layouts/screen';
import { TypographyUi } from '@/components/ui/typography';
import { GetFakeStoreProductsService } from '@/services/api/fakestore';
import useApi from '@/services/hooks/useApi';
import React, { useEffect } from 'react';

const MainHomeScreen = () => {
  const { data, loading, error, refetch } = useApi(GetFakeStoreProductsService);

  useEffect(() => {
    console.log({ data, loading, error, refetch });
  }, [data, loading, error, refetch]);

  return (
    <ScreenLayout header={{ title: 'Bellaco Market' }} scrollable>
      <TypographyUi
        size="title"
        weight="bold"
        color="normal"
        style={{ textAlign: 'center' }}
      >
        Home Screen
      </TypographyUi>
    </ScreenLayout>
  );
};

export default MainHomeScreen;
