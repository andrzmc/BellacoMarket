import ScreenLayout from '@/components/layouts/screen';
import ShoppingTemplate from '@/components/templates/shopping';
import React from 'react';

const ShoppingCartHomeScreen = () => {
  return (
    <ScreenLayout header={{ title: 'Shopping cart' }}>
      <ShoppingTemplate />
    </ScreenLayout>
  );
};

export default ShoppingCartHomeScreen;
