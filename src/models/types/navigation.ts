import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: undefined;
  Favorites: undefined;
  ShoppingCart: undefined;
  StoryBook: NavigatorScreenParams<StoryBookStackParamList>;
  Product: { id: string | number };
};

export type StoryBookStackParamList = {
  Main: undefined;
};
