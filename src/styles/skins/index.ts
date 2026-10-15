import { SkinOptions, SkinsAppaerance } from '@/models/interfaces/styles/skins';
import { DefaultThemeStyle } from './default';

export const SKIN_OPTIONS: SkinOptions = {
  default: DefaultThemeStyle,
};

export const SKIN_APPEARANCE: SkinsAppaerance = {
  light: 'light',
  dark: 'dark',
  system: null,
};
