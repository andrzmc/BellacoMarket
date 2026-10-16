import { ColorSchemeName } from 'react-native';
import { CatalogItem } from '../../templates';

export interface SettingsStore {
  appareance: ColorSchemeName | null;
  skinName: string;
}

export interface MarketStore {
  favorites: CatalogItem[];
  shoppingCart: CatalogItem[];
}
