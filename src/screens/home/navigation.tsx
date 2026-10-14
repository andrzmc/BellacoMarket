import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainHomeScreen from './main';
import StoryBookNavigation from '../storybook/navigation';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="Main" component={MainHomeScreen} />
      <Stack.Screen name="StoryBook" component={StoryBookNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
