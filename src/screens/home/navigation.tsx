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

const RootNavigation: FC = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBar = (props: BottomTabBarProps) => (
    <FloatTabBarLayout {...props} />
  );

  const renderHomeTabIcon = (props: TabBarCustomIconProps) => (
    <IconTabBarLayout {...props} name="bx-home" />
  );

  const renderStoryBookTabIcon = (props: TabBarCustomIconProps) => (
    <IconTabBarLayout {...props} name="bx-layout" />
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
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeTabIcon,
        }}
      />
      <Tab.Screen
        name="StoryBook"
        component={StoryBookNavigation}
        options={{
          tabBarLabel: 'Storybook',
          tabBarIcon: renderStoryBookTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
