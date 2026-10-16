import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import ShoppingCartCardLayout from '@/components/layouts/cards/card-shopping-cart';
import ShoppingSummaryTemplate from './summary';
import { ShoppingTemplateStyles } from '@/styles/components/templates';

const ShoppingTemplate: FC = () => {
  const marketStore = useSelector((store: RootState) => store.market);

  return (
    <View style={ShoppingTemplateStyles.container}>
      <FlatList
        data={marketStore.shoppingCart}
        keyExtractor={(item, index) => `${item.value}-${index}`}
        renderItem={({ item }) => <ShoppingCartCardLayout {...item} />}
        contentContainerStyle={ShoppingTemplateStyles.listContent}
        style={ShoppingTemplateStyles.list}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
      />
      <ShoppingSummaryTemplate />
    </View>
  );
};

export default ShoppingTemplate;
