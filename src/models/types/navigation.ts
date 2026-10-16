import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: undefined;
  Favorites: undefined;
  ShoppingCart: undefined;
  StoryBook: NavigatorScreenParams<StoryBookStackParamList>;
};

export type StoryBookStackParamList = {
  Main: undefined;
};
