# Button Ui

## Description

A reusable and customizable button component built on top of React Native's `TouchableOpacity`. It provides predefined background color variants dynamically connected to the active theme palette, automatically renders labels using `TypographyUi` with bold inverted text, handles disabled states with reduced opacity, and supports custom nested `children`.

## Usage

```jsx
import { ButtonUi } from '@/components/ui/button';

// Basic usage with text prop (defaults to normal theme background)
<ButtonUi text="Click Me" onPress={() => console.log('Pressed')} />

// Custom semantic and theme variants
<ButtonUi text="Save Changes" variant="success" onPress={handleSave} />
<ButtonUi text="Delete Item" variant="error" onPress={handleDelete} />
<ButtonUi text="View Details" variant="info" onPress={handleView} />

// Disabled state
<ButtonUi text="Processing..." variant="info" disabled />

// Custom nested children (e.g. icon + text)
<ButtonUi variant="warning" onPress={handleAlert}>
  <CustomIcon />
  <TypographyUi weight="bold" color="inverted">
    Warning Action
  </TypographyUi>
</ButtonUi>
```

## Props

| Name              | Type                                                                                                                                    | Required |  Default   | Description                                                                                                                                                               |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **children**      | `ReactNode`                                                                                                                             |    No    |     -      | Custom React elements to render inside the button. Takes precedence over `text`.                                                                                          |
| **text**          | `string`                                                                                                                                |    No    |     -      | Text label to display inside the button. Automatically rendered via `TypographyUi` with `bold` weight and `inverted` text color.                                          |
| **variant**       | `'normal' \| 'title' \| 'subtitle' \| 'paragraph' \| 'inverted' \| 'link' \| 'disabled' \| 'info' \| 'success' \| 'error' \| 'warning'` |    No    | `'normal'` | Dynamic theme background color variant (`ButtonVariant`). `'normal'` defaults to the primary body paragraph color, while other options adapt to the active theme palette. |
| **disabled**      | `boolean`                                                                                                                               |    No    |  `false`   | Disables touch interaction and applies a reduced opacity of `0.5`.                                                                                                        |
| **style**         | `StyleProp<ViewStyle>`                                                                                                                  |    No    |     -      | Additional custom container styles to merge on top of the predefined styles.                                                                                              |
| **activeOpacity** | `number`                                                                                                                                |    No    |   `0.7`    | Opacity applied when the button is actively pressed.                                                                                                                      |
| **...rest**       | `TouchableOpacityProps`                                                                                                                 |    No    |     -      | Inherits all standard React Native `TouchableOpacity` properties (e.g., `onPress`, `onLongPress`, `hitSlop`).                                                             |
