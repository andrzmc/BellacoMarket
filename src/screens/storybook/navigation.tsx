import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainStoryBookScreen from './main';

const StoryBookNavigation = () => {
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
      <Stack.Screen name="Main" component={MainStoryBookScreen} />
    </Stack.Navigator>
  );
};

export default StoryBookNavigation;
