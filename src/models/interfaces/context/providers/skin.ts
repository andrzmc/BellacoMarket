import { ColorSchemeName } from 'react-native';
import { SkinConfig } from '../../styles/skins';

export interface SkinState {
  skin: SkinConfig;
  isDarkMode: boolean;
  skinName: string;
  appearance: ColorSchemeName | null;
}
