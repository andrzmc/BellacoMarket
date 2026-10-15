import React, { FC } from 'react';
import { createIconSet } from 'react-native-vector-icons';
import iconMap from '@/config/assets/icons/boxicons.json';
import iconMapFilled from '@/config/assets/icons/boxicons-filled.json';
import iconMapBrands from '@/config/assets/icons/boxicons-brands.json';
import useSkin from '@/services/hooks/useSkin';
import { IconUiProps } from '@/models/interfaces/ui';
import WrapperIconUi from './wrapper';

export const IconUi: FC<IconUiProps> = props => {
  const {
    name,
    variant = 'basic',
    size = 24,
    color,
    colorCode,
    onPress,
    disabled,
    style,
    ...rest
  } = props;

  const { skin } = useSkin();

  const BoxIcon = createIconSet(iconMap, 'boxicons', 'boxicons.ttf');
  const BoxIconFilled = createIconSet(
    iconMapFilled,
    'boxicons-filled',
    'boxicons-filled.ttf',
  );
  const BoxIconBrands = createIconSet(
    iconMapBrands,
    'boxicons-brands',
    'boxicons-brands.ttf',
  );

  const iconColor =
    colorCode ||
    (color
      ? skin.text[color !== 'normal' ? color : 'paragraph']
      : skin.text.info);

  return (
    <WrapperIconUi
      onPress={onPress}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {variant === 'filled' && (
        <BoxIconFilled name={name} size={size} color={iconColor} />
      )}
      {variant === 'brands' && (
        <BoxIconBrands name={name} size={size} color={iconColor} />
      )}
      {variant === 'basic' && (
        <BoxIcon name={name} size={size} color={iconColor} />
      )}
    </WrapperIconUi>
  );
};
