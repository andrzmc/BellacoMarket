import { WrapperUiProps } from '@/models/interfaces/ui';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

const WrapperIconUi: FC<WrapperUiProps> = props => {
  const { children, onPress, disabled, style, ...rest } = props;

  const WRAPPER_CARD_EVENTS = disabled ? 'none' : 'auto';

  const containerStyles = [
    disabled && {
      opacity: 0.3,
    },
    style,
  ];

  return (
    <>
      {onPress ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          pointerEvents={WRAPPER_CARD_EVENTS}
          activeOpacity={0.7}
          style={containerStyles}
          {...rest}
        >
          {children}
        </TouchableOpacity>
      ) : (
        <View
          pointerEvents={WRAPPER_CARD_EVENTS}
          style={containerStyles}
          {...rest}
        >
          {children}
        </View>
      )}
    </>
  );
};

export default WrapperIconUi;
