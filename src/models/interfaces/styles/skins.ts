import { ColorSchemeName } from 'react-native';

export interface SkinConfig {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  info: string;
  warning: string;
  error: string;
  success: string;
  disabled: string;
  text: SkinsTextConfig;
  card: SkinsCardConfig;
}

export interface SkinsCardConfig {
  background: string;
  shadowColor: string;
}

export interface SkinOptions {
  default: SkinMode;
}

export interface SkinMode {
  light: SkinConfig;
  dark: SkinConfig;
}

export interface SkinsTextConfig {
  title: string;
  subtitle: string;
  paragraph: string;
  inverted: string;
  link: string;
  disabled: string;
  info: string;
  warning: string;
  error: string;
  success: string;
}

export interface SkinsAppaerance {
  light: ColorSchemeName | null;
  dark: ColorSchemeName | null;
  system: ColorSchemeName | null;
}
