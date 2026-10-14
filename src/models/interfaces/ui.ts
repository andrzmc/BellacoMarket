import { ReactNode } from 'react';
import {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  ButtonVariant,
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
