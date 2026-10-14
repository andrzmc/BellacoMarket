import { ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import {
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
