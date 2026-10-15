# Screen Layout

## Description

A reusable and customizable wrapper component that provides a standardized layout structure for all screens across the application. It acts as a wrapper around the `SafeAreaView` (and optionally `ScrollView`), ensuring content is safely displayed within device boundaries while offering vertical alignment, scroll capabilities out-of-the-box, and a built-in fixed top header.

## Usage

```jsx
import ScreenLayout from '@/components/layouts/screen';
import Icon from 'react-native-vector-icons/Ionicons';

// Basic usage (defaults to scrollable and top alignment)
<ScreenLayout>
  <Text>Main content of the screen goes here.</Text>
</ScreenLayout>

// Usage with a fixed header (title and left icon)
<ScreenLayout
  header={{
    title: 'Example',
    childrenLeft: <Icon name="arrow-back" size={24} color="#000" />,
  }}
>
  <Text>This content scrolls, but the header stays fixed at the top.</Text>
</ScreenLayout>

// Custom alignment and disabled scroll (e.g., for a map or a fixed form screen)
<ScreenLayout scrollable={false} alignment="center">
  <Text>This content is perfectly centered and won't scroll.</Text>
</ScreenLayout>

// Edge-to-edge layout (ignoring the top Safe Area for full immersion)
<ScreenLayout withSafeArea={false}>
  <Text>This content goes all the way up to the status bar.</Text>
</ScreenLayout>
```

## Props

| Name             | Type                            | Required | Default | Description                                                                                                        |
| :--------------- | :------------------------------ | :------: | :-----: | :----------------------------------------------------------------------------------------------------------------- |
| **children**     | `ReactNode`                     |   Yes    |    -    | The content elements to be rendered inside the layout.                                                             |
| **header**       | `ScreenLayoutHeaderProps`       |    No    |    -    | Optional configuration for a fixed header at the top. See **Header Props** below.                                  |
| **alignment**    | `'center' \| 'top' \| 'bottom'` |    No    | `'top'` | Defines the vertical alignment of the content.                                                                     |
| **scrollable**   | `boolean`                       |    No    | `true`  | When `true`, wraps the content in a `ScrollView` with `flexGrow: 1`. When `false`, uses a static `View`.           |
| **withSafeArea** | `boolean`                       |    No    | `true`  | If `false`, disables the top Safe Area boundary, allowing the content to render edge-to-edge up to the status bar. |
| **style**        | `StyleProp<ViewStyle>`          |    No    |    -    | Additional custom styles to apply to the main `SafeAreaView` container.                                            |
| **...rest**      | `ViewProps`                     |    No    |    -    | Accepts any standard React Native `<View />` properties (e.g., `onLayout`, `pointerEvents`).                       |

### Header Props (`ScreenLayoutHeaderProps`)

| Name              | Type        | Required | Default | Description                                                                    |
| :---------------- | :---------- | :------: | :-----: | :----------------------------------------------------------------------------- |
| **title**         | `string`    |    No    |    -    | The title text to display in the center of the header (extrabold, title size). |
| **childrenLeft**  | `ReactNode` |    No    |    -    | Content (like a back button or icon) to render on the left side.               |
| **childrenRight** | `ReactNode` |    No    |    -    | Content (like an options menu or icon) to render on the right side.            |
| **isHidden**      | `boolean`   |    No    | `false` | If `true`, the header will not be rendered even if other props are passed.     |
