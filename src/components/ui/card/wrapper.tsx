import { WrapperUiProps } from '@/models/interfaces/ui';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

const WrapperCardUi: FC<WrapperUiProps> = props => {
  const { children, onPress, disabled, ...rest } = props;

  const WRAPPER_CARD_EVENTS = disabled ? 'none' : 'auto';

  return (
    <>
      {onPress ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          pointerEvents={WRAPPER_CARD_EVENTS}
          activeOpacity={0.7}
          {...rest}
        >
          {children}
        </TouchableOpacity>
      ) : (
        <View pointerEvents={WRAPPER_CARD_EVENTS} {...rest}>
          {children}
        </View>
      )}
    </>
  );
};

export default WrapperCardUi;
