import iconMap from '@/config/assets/icons/boxicons.json';
import iconMapFilled from '@/config/assets/icons/boxicons-filled.json';
import iconMapBrands from '@/config/assets/icons/boxicons-brands.json';

export type TypographySize = 'title' | 'subtitle' | 'paragraph' | 'small';

export type TypographyWeight = 'normal' | 'medium' | 'bold' | 'extrabold';

export type TypographyColor =
  | 'normal'
  | 'title'
  | 'subtitle'
  | 'paragraph'
  | 'inverted'
  | 'link'
  | 'disabled'
  | 'info'
  | 'success'
  | 'error'
  | 'warning';

export type ButtonVariant = TypographyColor;

export type CardShape = 'rounded' | 'flat';

type ExtractBx<T> = T extends `bx-${infer Rest}` ? `bx-${Rest}` : never;

export type BoxiconBasicName = ExtractBx<keyof typeof iconMap>;
export type BoxiconFilledName = ExtractBx<keyof typeof iconMapFilled>;
export type BoxiconBrandsName = ExtractBx<keyof typeof iconMapBrands>;

export type BoxiconName =
  | BoxiconBasicName
  | BoxiconFilledName
  | BoxiconBrandsName;

export type BoxiconVariant = 'basic' | 'filled' | 'brands';

export type LoaderSize = 'big' | 'normal' | 'small';
