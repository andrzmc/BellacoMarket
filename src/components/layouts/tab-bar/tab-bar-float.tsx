import { TypographyUi } from '@/components/ui/typography';
import { FloatTabBarLayoutProps } from '@/models/interfaces/layouts';
import useSkin from '@/services/hooks/useSkin';
import { FloatTabBarLayoutStyles } from '@/styles/components/layouts';
import React, { FC } from 'react';
import {
  LayoutAnimation,
  Platform,
  Pressable,
  UIManager,
  View,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FloatTabBarLayout: FC<FloatTabBarLayoutProps> = props => {
  const { state, descriptors, navigation, insets } = props;

  const { skin } = useSkin();

  const currentRoute = state.routes[state.index];
  const currentOptions = descriptors[currentRoute.key]?.options;

  if (
    currentOptions?.tabBarStyle &&
    (currentOptions.tabBarStyle as any).display === 'none'
  ) {
    return null;
  }

  const containerStyle = {
    backgroundColor: skin.card.background,
    shadowColor: skin.card.shadowColor,
    bottom: insets.bottom > 0 ? insets.bottom + 8 : 16,
  };

  return (
    <View style={[FloatTabBarLayoutStyles.container, containerStyle]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        if (
          (options.tabBarItemStyle as any)?.display === 'none' ||
          (typeof options.tabBarButton === 'function' &&
            options.tabBarButton({} as any) === null)
        ) {
          return null;
        }

        const isFocused = state.index === index;

        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const badge = options.tabBarBadge;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconColor = isFocused ? skin.text.inverted : skin.text.title;

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              FloatTabBarLayoutStyles.tabItem,
              isFocused && [
                FloatTabBarLayoutStyles.tabItemActive,
                { backgroundColor: skin.primary },
              ],
            ]}
          >
            <View style={FloatTabBarLayoutStyles.iconWrapper}>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: iconColor,
                size: 24,
              })}
              {badge !== undefined && (
                <View
                  style={[
                    FloatTabBarLayoutStyles.badge,
                    { backgroundColor: skin.error },
                  ]}
                >
                  <TypographyUi
                    size="small"
                    weight="bold"
                    color="inverted"
                    style={FloatTabBarLayoutStyles.badgeText}
                  >
                    {badge}
                  </TypographyUi>
                </View>
              )}
            </View>

            {isFocused && (
              <TypographyUi
                size="small"
                weight="bold"
                color="inverted"
                style={FloatTabBarLayoutStyles.labelText}
              >
                {label}
              </TypographyUi>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default FloatTabBarLayout;
