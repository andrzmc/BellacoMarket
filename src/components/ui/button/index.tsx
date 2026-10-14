import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonUiProps } from '@/models/interfaces/ui';
import { buttonUiStyles } from '@/styles/components/ui';

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

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        buttonUiStyles.base,
        buttonUiStyles[`variant_${variant}`],
        disabled && buttonUiStyles.disabled,
        style,
      ]}
      {...rest}
    >
      {children ?? (text ? <Text style={buttonUiStyles.text}>{text}</Text> : null)}
    </TouchableOpacity>
  );
};
