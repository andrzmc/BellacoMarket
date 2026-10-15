# Icon Ui

## Description

A reusable and customizable vector icon component based on the Boxicons library. It provides support for three distinct icon variants (`basic`, `filled`, and `brands`), customizable dimensions via `size`, theme-based semantic colors (`color`) with automatic fallback to the `'info'` palette, explicit color codes via `colorCode`, and interactive touch events via `onPress` with built-in pointer event management when disabled.

## Usage

```jsx
import { IconUi } from '@/components/ui/icon';

// Basic icon (defaults to 24px and 'basic' variant with 'info' color)
<IconUi name="bx-heart" />

// Filled variant with custom size and semantic theme color
<IconUi
  name="bx-bell"
  variant="filled"
  size={32}
  color="warning"
/>

// Brand icon variant with explicit color code (hexadecimal, RGB, or color name)
<IconUi
  name="bx-github"
  variant="brands"
  size={28}
  colorCode="#FF5722"
/>

// Semantic theme colors (normal, info, success, warning, error, etc.)
<IconUi name="bx-check-circle" color="success" />
<IconUi name="bx-error" color="error" />
<IconUi name="bx-info-circle" color="info" />

// Interactive icon button with onPress
<IconUi
  name="bx-cart-alt-2"
  size={24}
  onPress={() => console.log('Cart icon pressed')}
/>

// Disabled state (disables touch interactions and sets pointerEvents to 'none')
<IconUi
  name="bx-user"
  disabled
  onPress={() => console.log('This will not trigger')}
/>

// Custom container styling and standard View/TouchableOpacity props
<IconUi
  name="bx-bell-ring"
  style={{ padding: 8 }}
  testID="notification-bell-icon"
/>
```

## Props

| Name          | Type                                                                                                                                    | Required |  Default  | Description                                                                                                                                                                                 |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :------: | :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **name**      | `BoxiconName`                                                                                                                           |   Yes    |     -     | Name identifier of the Boxicon glyph to render (e.g. `'bx-heart'`, `'bx-bell'`, `'bx-github'`).                                                                                             |
| **variant**   | `'basic' \| 'filled' \| 'brands'`                                                                                                       |    No    | `'basic'` | Icon set style variant to use (`'basic'` for outline, `'filled'` for solid, or `'brands'` for brand logos).                                                                                 |
| **size**      | `number`                                                                                                                                |    No    |   `24`    | Size in points/pixels for the icon dimension (width and height).                                                                                                                            |
| **color**     | `'normal' \| 'title' \| 'subtitle' \| 'paragraph' \| 'inverted' \| 'link' \| 'disabled' \| 'info' \| 'success' \| 'error' \| 'warning'` |    No    |     -     | Semantic theme color variant (`TypographyColor`). Resolves `'normal'` to the standard paragraph color and maps to active theme text colors. When omitted, falls back to the `'info'` color. |
| **colorCode** | `string`                                                                                                                                |    No    |     -     | Explicit custom color code (e.g., `'#FF5722'`, `'rgb(33, 150, 243)'`, `'brown'`). When provided, takes precedence over `color`.                                                             |
| **disabled**  | `boolean`                                                                                                                               |    No    |  `false`  | When `true`, applies reduced opacity (`0.3`), disables interaction, and sets `pointerEvents="none"` on the wrapper container.                               |
| **onPress**   | `TouchableOpacityProps['onPress']`                                                                                                      |    No    |     -     | Optional click/tap handler. When provided, wraps the icon in an interactive `TouchableOpacity` (`activeOpacity: 0.7`).                                                                      |
| **style**     | `StyleProp<ViewStyle>`                                                                                                                  |    No    |     -     | Additional custom styles applied to the outer wrapper container.                                                                                                                            |
| **...rest**   | `ViewProps`                                                                                                                             |    No    |     -     | Accepts standard React Native `<View />` (or `<TouchableOpacity />`) properties (e.g., `testID`, `hitSlop`, `accessibilityLabel`).                                                          |
