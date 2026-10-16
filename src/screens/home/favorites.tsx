import FavoriteCardLayout from '@/components/layouts/cards/card-favorites';
import ScreenLayout from '@/components/layouts/screen';
import { RootState } from '@/context/store';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesHomeScreen = () => {
  const marketStore = useSelector((store: RootState) => store.market);

  return (
    <ScreenLayout header={{ title: 'My Favorites' }}>
      <FlatList
        data={marketStore.favorites}
        keyExtractor={(item, index) => `${item.value}-${index}`}
        renderItem={({ item }) => <FavoriteCardLayout {...item} />}
        contentContainerStyle={{ gap: 12 }}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default FavoritesHomeScreen;
