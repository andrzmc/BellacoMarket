# Loader Ui

## Description

A brand-aligned animated loading indicator for **Bellako Market**. Built using React Native's core `Animated` API for high-performance 60 FPS transitions (`useNativeDriver: true`).

The component adapts its visual representation based on the selected `size`:

- **`normal` & `big`:** Renders the full brand loader featuring:
  - A bouncing market shopping bag (`bx-shopping-bag`) in `skin.primary` with inverted icon fill.
  - Organic physics with vertical bounce (`translateY`), playful tilt wiggle (`rotate`), and landing squash & stretch (`scaleX`, `scaleY`).
  - An expanding ambient radial pulse halo matching `skin.primary`.
  - A dynamic floor shadow that synchronizes altitude with horizontal scaling (`scaleX`) and opacity attenuation.
- **`small`:** Minimalist mode designed for compact layouts or inline content:
  - Omits the shopping bag and the pulse halo.
  - Only displays an extended elongated shadow line (`200px`) that smoothly pulses and scales, offering a lightweight and unobtrusive loading cue.

## Usage

```tsx
import LoaderUi from '@/components/ui/loader';
// or: import { LoaderUi } from '@/components/ui/loader';

// Default loader (normal size with bag and halo)
<LoaderUi />

// Minimalist loader (small size: shadow bar only)
<LoaderUi size="small" />

// Big loader with status text
<LoaderUi size="big" text="loading..." />
```

## Props

| Prop    | Type                           | Default     | Description                                                                                                                                                                            |
| ------- | ------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`  | `'small' \| 'normal' \| 'big'` | `'normal'`  | Controls the loader variant and scale. `small` renders the minimalist shadow bar; `normal` and `big` render the animated bag and pulse halo.                                           |
| `text`  | `string`                       | `undefined` | Optional status/loading label displayed beneath the loader using [TypographyUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/typography/index.tsx). |
| `style` | `StyleProp<ViewStyle>`         | `undefined` | Additional styles applied to the outer container.                                                                                                                                      |
