import { IconTabBarLayoutProps } from '../interfaces/layouts';

export type ScreenLayoutAlignment = 'center' | 'top' | 'bottom';
export type TabBarCustomIconProps = Omit<IconTabBarLayoutProps, 'name'>;
