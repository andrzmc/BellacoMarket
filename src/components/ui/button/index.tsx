import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonUiProps } from '@/models/interfaces/ui';
import { ButtonUiStyles } from '@/styles/components/ui';
import useSkin from '@/services/hooks/useSkin';
import { TypographyUi } from '../typography';

export const ButtonUi: FC<ButtonUiProps> = props => {
  const {
    children,
    text,
    variant = 'normal',
    disabled = false,
    style,
    activeOpacity = 0.7,
    ...rest
  } = props;

  const { skin } = useSkin();

  const buttonStyles = {
    backgroundColor: skin.text[variant !== 'normal' ? variant : 'paragraph'],
    borderWidth: 1,
    borderColor:
      variant === 'inverted'
        ? skin.text.info
        : skin.text[variant !== 'normal' ? variant : 'paragraph'],
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        ButtonUiStyles.container,
        disabled && ButtonUiStyles.disabled,
        buttonStyles,
        style,
      ]}
      {...rest}
    >
      {children ??
        (text ? (
          <TypographyUi
            weight="bold"
            color={variant === 'inverted' ? 'info' : 'inverted'}
          >
            {text}
          </TypographyUi>
        ) : null)}
    </TouchableOpacity>
  );
};
