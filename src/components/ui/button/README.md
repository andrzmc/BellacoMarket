# Button Ui

## Description

A reusable and customizable button component built on top of React Native's `TouchableOpacity`. It provides predefined semantic background color variants matching the typography design system, handles disabled states with reduced opacity, and supports rendering via either a `text` prop or nested `children`.

## Usage

```jsx
import { ButtonUi } from '@/components/ui/button';

// Basic usage with text prop
<ButtonUi text="Click Me" onPress={() => console.log('Pressed')} />

// Custom semantic variant
<ButtonUi text="Save Changes" variant="success" onPress={handleSave} />

// Disabled state
<ButtonUi text="Processing..." variant="info" disabled />

// Custom children
<ButtonUi variant="warning">
  <CustomIcon />
  <TypographyUi color="normal">Custom Content</TypographyUi>
</ButtonUi>
```

## Props

| Name              | Type                                                      | Required |   Default   | Description                                                                     |
| :---------------- | :-------------------------------------------------------- | :------: | :---------: | :------------------------------------------------------------------------------ |
| **children**      | `ReactNode`                                               |    No    |      -      | Custom React elements to render inside the button. Takes precedence over `text`. |
| **text**          | `string`                                                  |    No    |      -      | Text label to display inside the button when `children` is not provided.        |
| **variant**       | `'normal' \| 'info' \| 'success' \| 'error' \| 'warning'` |    No    | `'normal'`  | Semantic background color variant matching the typography scale.                |
| **disabled**      | `boolean`                                                 |    No    |   `false`   | Disables touch interaction and applies an opacity of `0.5`.                     |
| **style**         | `StyleProp<ViewStyle>`                                    |    No    |      -      | Additional custom container styles to merge on top of the predefined styles.    |
| **activeOpacity** | `number`                                                  |    No    |    `0.7`    | Opacity applied when the button is actively pressed.                            |
| **...rest**       | `TouchableOpacityProps`                                   |    No    |      -      | Inherits all standard React Native `TouchableOpacity` properties.               |
