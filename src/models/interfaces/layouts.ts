import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { ScreenLayoutAlignment } from '../types/layouts';
import { BoxiconName } from '../types/ui';

export interface ScreenLayoutProps extends ViewProps {
  children: ReactNode;
  alignment?: ScreenLayoutAlignment;
  scrollable?: boolean;
  header?: ScreenLayoutHeaderProps;
  withSafeArea?: boolean;
  withPadding?: boolean;
}

export interface ScreenLayoutHeaderProps {
  title?: string;
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  isHidden?: boolean;
}

export interface IconTabBarLayoutProps {
  name: BoxiconName;
  focused: boolean;
  size: number;
  color: string;
}

export interface FloatTabBarLayoutProps extends BottomTabBarProps {}

