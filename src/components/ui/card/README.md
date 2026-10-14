# Card Ui

## Description

A reusable and customizable card container component that standardizes content grouping across the application. It provides an integrated top header section that groups optional `header`, `heading`, and `subheading` elements, a dedicated `footer` section, customizable padding on all sides, two contour shape variants (`rounded` or `flat`), optional touch interactions via `TouchableOpacity`, and a `disabled` state that applies reduced opacity and disables pointer events.

## Usage

```jsx
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';

// Basic usage with heading and subheading
<CardUi
  heading="Card Heading"
  subheading="Optional subheading below the heading"
>
  <TypographyUi>This is the card body content.</TypographyUi>
</CardUi>

// Card with custom header, footer, padding, and press action
<CardUi
  header={<TypographyUi size="title" weight="bold">Product Name</TypographyUi>}
  footer={<TypographyUi size="small">Tap for details</TypographyUi>}
  padding={{ top: 10, bottom: 10, left: 16, right: 16 }}
  onPress={() => console.log('Card pressed!')}
>
  <TypographyUi>Product description goes here.</TypographyUi>
</CardUi>

// Flat shape card with disabled state
<CardUi shape="flat" disabled>
  <TypographyUi>This card is non-interactive with reduced opacity.</TypographyUi>
</CardUi>

// Inherits React Native ViewProps (e.g., custom styles or testIDs)
<CardUi style={{ backgroundColor: '#FFCC00' }} testID="market-card">
  <TypographyUi>Custom styled card</TypographyUi>
</CardUi>
```

## Props

| Name           | Type                                                               | Required |                    Default                     | Description                                                                                                         |
| :------------- | :----------------------------------------------------------------- | :------: | :--------------------------------------------: | :------------------------------------------------------------------------------------------------------------------ |
| **children**   | `ReactNode`                                                        |   Yes    |                       -                        | Main content rendered inside the card body.                                                                         |
| **header**     | `ReactNode`                                                        |    No    |                       -                        | Optional custom React elements rendered at the top of the header section.                                           |
| **heading**    | `string`                                                           |    No    |                       -                        | Optional heading text rendered using `<TypographyUi size="subtitle" weight="bold" />` inside the header section.    |
| **subheading** | `string`                                                           |    No    |                       -                        | Optional subheading text rendered using `<TypographyUi size="small" weight="medium" />` inside the header section.  |
| **footer**     | `ReactNode`                                                        |    No    |                       -                        | Optional content rendered at the bottom of the card, separated by a top margin.                                     |
| **padding**    | `{ top?: number; right?: number; left?: number; bottom?: number }` |    No    | `{ top: 20, right: 20, left: 20, bottom: 20 }` | Allows customizing individual padding values (top, right, bottom, left) inside the card.                           |
| **shape**      | `'rounded' \| 'flat'`                                              |    No    |                  `'rounded'`                   | Defines the border radius variant applied to the container contour.                                                 |
| **disabled**   | `boolean`                                                          |    No    |                    `false`                     | When `true`, applies reduced opacity (0.5) and disables touch interaction via `pointerEvents="none"`.               |
| **onPress**    | `TouchableOpacityProps['onPress']`                                 |    No    |                       -                        | When provided, wraps the card in a `TouchableOpacity` to make it interactive.                                      |
| **style**      | `StyleProp<ViewStyle>`                                             |    No    |                       -                        | Additional custom container styles to merge on top of the predefined card styles.                                   |
| **...rest**    | `ViewProps`                                                        |    No    |                       -                        | Inherits all standard React Native `<View />` properties (e.g., `testID`, `onLayout`).                              |

