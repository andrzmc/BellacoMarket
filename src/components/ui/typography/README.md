# Typography Ui

## Description

A reusable and customizable text component that standardizes typography across the application. It acts as a wrapper around the native React Native `Text` component, providing predefined variations for size, weight, and semantic colors based on the project's design system.

## Usage

```jsx
import { TypographyUi } from '@/components/ui/typography';

// Basic usage (defaults to paragraph size, normal weight, normal color)
<TypographyUi>This is a standard text.</TypographyUi>

// Custom styling using predefined design system props
<TypographyUi size="title" weight="bold" color="info">
  Welcome to the BellacoMarket!
</TypographyUi>

// Inherits React Native Text props (e.g. truncating text)
<TypographyUi size="small" numberOfLines={1} ellipsizeMode="tail">
  This is a very long descriptive text that will be truncated with dots at the end...
</TypographyUi>
```

## Props

| Name         | Type                                                      | Required |    Default    | Description                                                                                               |
| :----------- | :-------------------------------------------------------- | :------: | :-----------: | :-------------------------------------------------------------------------------------------------------- |
| **children** | `ReactNode`                                               |   Yes    |       -       | The text content to be rendered inside the component.                                                     |
| **size**     | `'title' \| 'subtitle' \| 'paragraph' \| 'small'`         |    No    | `'paragraph'` | Defines the font size and proportional line height.                                                       |
| **weight**   | `'normal' \| 'medium' \| 'bold'`                          |    No    |  `'normal'`   | Defines the font weight / thickness.                                                                      |
| **color**    | `'normal' \| 'info' \| 'success' \| 'error' \| 'warning'` |    No    |  `'normal'`   | Applies semantic theme colors to the text.                                                                |
| **style**    | `StyleProp<TextStyle>`                                    |    No    |       -       | Additional custom styles to apply on top of the predefined ones.                                          |
| **...rest**  | `TextProps`                                               |    No    |       -       | Accepts any standard React Native `<Text />` properties (e.g., `numberOfLines`, `onPress`, `selectable`). |
