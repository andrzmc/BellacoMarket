import { ReactNode } from 'react';
import {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  ButtonVariant,
  CardShape,
  TypographyColor,
  TypographySize,
  TypographyWeight,
} from '@/models/types/ui';

export interface TypographyUiProps extends Omit<TextProps, 'style'> {
  children: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  style?: StyleProp<TextStyle>;
}

export interface ButtonUiProps extends TouchableOpacityProps {
  children?: ReactNode;
  text?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface CardUiProps extends ViewProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  heading?: string;
  subheading?: string;
  padding?: { top?: number; right?: number; left?: number; bottom?: number };
  shape?: CardShape;
  disabled?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}

export interface WrapperUiProps extends ViewProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}

