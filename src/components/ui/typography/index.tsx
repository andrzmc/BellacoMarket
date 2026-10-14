import React, { FC } from 'react';
import { Text } from 'react-native';
import { TypographyUiProps } from '@/models/interfaces/ui';
import { typographyUiStyles } from '@/styles/components/ui';

export const TypographyUi: FC<TypographyUiProps> = props => {
  const {
    children,
    size = 'paragraph',
    weight = 'normal',
    color = 'normal',
    style,
    ...rest
  } = props;

  return (
    <Text
      style={[
        typographyUiStyles.base,
        typographyUiStyles[size],
        typographyUiStyles[`weight_${weight}`],
        typographyUiStyles[`color_${color}`],
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
