import { IconUi } from '@/components/ui/icon';
import { IconTabBarLayoutProps } from '@/models/interfaces/layouts';
import React, { FC } from 'react';

const IconTabBarLayout: FC<IconTabBarLayoutProps> = props => {
  const { name, focused, size, color } = props;

  return (
    <IconUi
      name={name}
      variant={focused ? 'filled' : 'basic'}
      size={size}
      colorCode={color}
    />
  );
};

export default IconTabBarLayout;
