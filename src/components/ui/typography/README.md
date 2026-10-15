# Typography Ui

## Description

A reusable and customizable text component that standardizes typography across the application. It acts as a wrapper around the native React Native `Text` component, providing predefined variations for size, weight, and semantic theme colors based on the design system.

The component enforces fixed font scaling (`allowFontScaling={false}`) to preserve visual hierarchy across devices and dynamically adapts its text colors according to the active theme palette.

## Usage

```jsx
import { TypographyUi } from '@/components/ui/typography';

// Basic usage (defaults to paragraph size, normal weight, normal theme text color)
<TypographyUi>This is a standard body text.</TypographyUi>

// Custom styling with size, extrabold weight, and semantic theme color
<TypographyUi size="title" weight="extrabold" color="title">
  Welcome to BellacoMarket!
</TypographyUi>

// Inverted text color (e.g. inside dark containers or buttons)
<TypographyUi weight="bold" color="inverted">
  Add to Cart
</TypographyUi>

// Semantic feedback color
<TypographyUi size="subtitle" weight="medium" color="error">
  Unable to complete purchase
</TypographyUi>

// Inherits React Native Text props (e.g. truncating text)
<TypographyUi size="small" numberOfLines={1} ellipsizeMode="tail">
  This is a very long descriptive text that will be truncated with dots at the end...
</TypographyUi>
```

## Props

| Name         | Type                                                                                                                                              | Required |    Default    | Description                                                                                                                                                                               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | :-----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children** | `ReactNode`                                                                                                                                       |   Yes    |       -       | The text content to be rendered inside the component.                                                                                                                                     |
| **size**     | `'title' \| 'subtitle' \| 'paragraph' \| 'small'`                                                                                                 |    No    | `'paragraph'` | Predefined size, line height, and bottom spacing scale (`title`: 28px, `subtitle`: 20px, `paragraph`: 16px, `small`: 12px).                                                               |
| **weight**   | `'normal' \| 'medium' \| 'bold' \| 'extrabold'`                                                                                                   |    No    |  `'normal'`   | Predefined font weight variations (`normal`, `medium`, `bold`, `extrabold`).                                                                                                              |
| **color**    | `'normal' \| 'title' \| 'subtitle' \| 'paragraph' \| 'inverted' \| 'link' \| 'disabled' \| 'info' \| 'success' \| 'error' \| 'warning'`          |    No    |  `'normal'`   | Applies dynamic theme text colors (`'title'`, `'subtitle'`, `'paragraph'`, `'inverted'`, `'link'`, `'disabled'`, `'info'`, `'success'`, `'error'`, `'warning'`). `'normal'` defaults to the primary body paragraph color. |
| **style**    | `StyleProp<TextStyle>`                                                                                                                            |    No    |       -       | Additional custom styles to merge on top of the predefined styles.                                                                                                                        |
| **...rest**  | `TextProps`                                                                                                                                       |    No    |       -       | Inherits standard React Native `<Text />` properties (e.g., `numberOfLines`, `onPress`, `ellipsizeMode`). `allowFontScaling` is set to `false`.                                          |

