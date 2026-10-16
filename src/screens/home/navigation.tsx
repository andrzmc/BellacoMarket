import FloatTabBarLayout from '@/components/layouts/tab-bar/tab-bar-float';
import IconTabBarLayout from '@/components/layouts/tab-bar/tab-bar-icon';
import { TabBarCustomIconProps } from '@/models/types/layouts';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import StoryBookNavigation from '../storybook/navigation';
import MainHomeScreen from './main';
import FavoritesHomeScreen from './favorites';
import ShoppingCartHomeScreen from './shopping-cart';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';

const RootNavigation: FC = () => {
  const Tab = createBottomTabNavigator();

  const marketStore = useSelector((store: RootState) => store.market);

  const renderTabBar = (value: BottomTabBarProps) => (
    <FloatTabBarLayout {...value} />
  );

  const renderHomeTabIcon = (value: TabBarCustomIconProps) => (
    <IconTabBarLayout {...value} name="bx-home" />
  );

  const renderFavoritesTabIcon = (value: TabBarCustomIconProps) => (
    <IconTabBarLayout {...value} name="bx-heart" />
  );

  const renderShoppingCartTabIcon = (value: TabBarCustomIconProps) => (
    <IconTabBarLayout {...value} name="bx-cart" />
  );

  const renderStoryBookTabIcon = (value: TabBarCustomIconProps) => (
    <IconTabBarLayout {...value} name="bx-layout" />
  );

  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainHomeScreen}
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: renderHomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesHomeScreen}
        options={{
          tabBarLabel: 'My favorites',
          tabBarIcon: renderFavoritesTabIcon,
          tabBarBadge: marketStore.favorites.length || undefined,
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartHomeScreen}
        options={{
          tabBarLabel: 'Shopping cart',
          tabBarIcon: renderShoppingCartTabIcon,
          tabBarBadge: marketStore.shoppingCart.length || undefined,
        }}
      />
      <Tab.Screen
        name="StoryBook"
        component={StoryBookNavigation}
        options={{
          tabBarLabel: 'UI Kit',
          tabBarIcon: renderStoryBookTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
