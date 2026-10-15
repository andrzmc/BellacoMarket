import React, { FC, useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { IconUi } from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { LoaderUiProps } from '@/models/interfaces/ui';
import useSkin from '@/services/hooks/useSkin';
import { LoaderUiStyles } from '@/styles/components/ui';

const SIZE_MAP = {
  small: {
    containerSize: 0,
    iconSize: 0,
    shadowWidth: 200,
    shadowHeight: 7,
    bounceHeight: 10,
    pulseSize: 64,
  },
  normal: {
    containerSize: 68,
    iconSize: 34,
    shadowWidth: 52,
    shadowHeight: 10,
    bounceHeight: 14,
    pulseSize: 90,
  },
  big: {
    containerSize: 92,
    iconSize: 46,
    shadowWidth: 70,
    shadowHeight: 13,
    bounceHeight: 20,
    pulseSize: 120,
  },
};

export const LoaderUi: FC<LoaderUiProps> = props => {
  const { size = 'normal', text, style, ...rest } = props;
  const { skin } = useSkin();

  const config = SIZE_MAP[size] || SIZE_MAP.normal;

  const bounceAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const bounceLoop = Animated.loop(
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]),
  );

  const pulseLoop = Animated.loop(
    Animated.timing(pulseAnim, {
      toValue: 1,
      duration: 1200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }),
  );

  useEffect(() => {
    bounceLoop.start();
    pulseLoop.start();

    return () => {
      bounceLoop.stop();
      pulseLoop.stop();
    };
  }, [bounceAnim, bounceLoop, pulseAnim, pulseLoop]);

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -config.bounceHeight],
  });

  const rotate = bounceAnim.interpolate({
    inputRange: [0, 0.25, 0.75, 1],
    outputRange: ['0deg', '-4deg', '4deg', '0deg'],
  });

  const scaleX = bounceAnim.interpolate({
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: [1.06, 0.97, 0.99, 1.06],
  });

  const scaleY = bounceAnim.interpolate({
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: [0.94, 1.03, 1.01, 0.94],
  });

  const shadowScaleX = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.55],
  });

  const shadowOpacity = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.05],
  });

  const pulseScale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.75, 1.4],
  });

  const pulseOpacity = pulseAnim.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0.35, 0.15, 0],
  });

  return (
    <View style={[LoaderUiStyles.container, style]} {...rest}>
      <View
        style={[
          LoaderUiStyles.stage,
          {
            width: config.pulseSize,
            height: config.containerSize + config.bounceHeight + 16,
          },
        ]}
      >
        <Animated.View
          style={[
            LoaderUiStyles.shadow,
            {
              width: config.shadowWidth,
              height: config.shadowHeight,
              opacity: shadowOpacity,
              transform: [{ scaleX: shadowScaleX }],
            },
          ]}
        />

        {size !== 'small' ? (
          <>
            <Animated.View
              style={[
                LoaderUiStyles.pulseHalo,
                {
                  width: config.pulseSize,
                  height: config.pulseSize,
                  backgroundColor: skin.primary,
                  opacity: pulseOpacity,
                  transform: [{ scale: pulseScale }],
                },
              ]}
            />
            <Animated.View
              style={[
                LoaderUiStyles.bagContainer,
                {
                  width: config.containerSize,
                  height: config.containerSize,
                  backgroundColor: skin.primary,
                  transform: [
                    { translateY },
                    { rotate },
                    { scaleX },
                    { scaleY },
                  ],
                },
              ]}
            >
              <IconUi
                name="bx-shopping-bag"
                variant="filled"
                size={config.iconSize}
                color="inverted"
              />
            </Animated.View>
          </>
        ) : null}
      </View>

      {text ? (
        <TypographyUi
          size="small"
          weight="medium"
          color="subtitle"
          style={LoaderUiStyles.text}
        >
          {text}
        </TypographyUi>
      ) : null}
    </View>
  );
};

export default LoaderUi;
