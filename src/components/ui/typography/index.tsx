import { TypographyUiProps } from '@/models/interfaces/ui';
import useSkin from '@/services/hooks/useSkin';
import { TypographyUiStyles } from '@/styles/components/ui';
import React, { FC } from 'react';
import { Text } from 'react-native';

export const TypographyUi: FC<TypographyUiProps> = props => {
  const {
    size = 'paragraph',
    weight = 'normal',
    color = 'normal',
    style,
    children,
    ...rest
  } = props;

  const { skin } = useSkin();

  return (
    <Text
      allowFontScaling={false}
      style={[
        TypographyUiStyles[`size_${size}`],
        TypographyUiStyles[`weight_${weight}`],
        { color: skin.text[color !== 'normal' ? color : 'paragraph'] },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
