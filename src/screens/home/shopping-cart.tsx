import ShoppingCartCardLayout from '@/components/layouts/cards/card-shopping-cart';
import ScreenLayout from '@/components/layouts/screen';
import { RootState } from '@/context/store';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ShoppingCartHomeScreen = () => {
  const marketStore = useSelector((store: RootState) => store.market);

  return (
    <ScreenLayout header={{ title: 'Shopping cart' }}>
      <FlatList
        data={marketStore.shoppingCart}
        keyExtractor={(item, index) => `${item.value}-${index}`}
        renderItem={({ item }) => <ShoppingCartCardLayout {...item} />}
        contentContainerStyle={{ gap: 12 }}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default ShoppingCartHomeScreen;
