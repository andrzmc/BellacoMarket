import React, { FC } from 'react';
import { View } from 'react-native';
import { CardUiProps } from '@/models/interfaces/ui';
import { CardUiStyles } from '@/styles/components/ui';
import WrapperCardUi from './wrapper';
import { TypographyUi } from '../typography';
import useSkin from '@/services/hooks/useSkin';

export const CardUi: FC<CardUiProps> = props => {
  const {
    children,
    header,
    footer,
    heading,
    subheading,
    shape = 'rounded',
    padding,
    disabled = false,
    onPress,
    style,
    ...rest
  } = props;

  const { skin } = useSkin();

  const CARD_STYLE = [
    CardUiStyles.container,
    CardUiStyles[`shape_${shape}`],
    disabled && CardUiStyles.disabled,
    {
      paddingTop: typeof padding?.top === 'number' ? padding.top : 20,
      paddingRight: typeof padding?.right === 'number' ? padding.right : 20,
      paddingBottom: typeof padding?.bottom === 'number' ? padding.bottom : 20,
      paddingLeft: typeof padding?.left === 'number' ? padding.left : 20,
    },
    {
      backgroundColor: skin.card.background,
      shadowColor: skin.card.shadowColor,
    },
    style,
  ];

  return (
    <WrapperCardUi
      onPress={onPress}
      disabled={disabled}
      style={CARD_STYLE}
      {...rest}
    >
      {header || heading || subheading ? (
        <View style={CardUiStyles.header}>
          {header}
          {heading && (
            <TypographyUi size="subtitle" color="normal" weight="bold">
              {heading}
            </TypographyUi>
          )}
          {subheading && (
            <TypographyUi size="small" color="normal" weight="medium">
              {subheading}
            </TypographyUi>
          )}
        </View>
      ) : null}
      {children}
      {footer && <View style={CardUiStyles.footer}>{footer}</View>}
    </WrapperCardUi>
  );
};
