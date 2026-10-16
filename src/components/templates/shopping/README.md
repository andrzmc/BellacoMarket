# Shopping Template

## Description

A high-level composite template component designed to manage the end-to-end shopping cart flow in **Bellaco Market**. It orchestrates the display of selected cart products, reactive price and tax calculations, order breakdown summary, and a full-screen simulated checkout and confirmation flow.

The template integrates directly with the global Redux store (`marketSlice`) to read cart items, calculate live totals, and clear cart items upon successful order confirmation.

## Architecture & Composition

The `shopping` template adheres strictly to the modular template hierarchy and is composed of the following modules:

```
src/components/templates/shopping/
├── index.tsx       ➔ Main composite view (FlatList & ShoppingSummaryTemplate)
├── summary.tsx     ➔ Order cost breakdown card and confirmation trigger
├── confirm.tsx     ➔ Full-screen payment simulation & order confirmation modal
└── README.md       ➔ Technical documentation
```

### Module Responsibilities

1. **[ShoppingTemplate](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/templates/shopping/index.tsx) (`index.tsx`):**

   - Connects to the Redux store (`state.market.shoppingCart`).
   - Renders a virtualized `FlatList` of items using [ShoppingCartCardLayout](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/layouts/cards/card-shopping-cart.tsx).
   - Positions [ShoppingSummaryTemplate](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/templates/shopping/summary.tsx) beneath the list.

2. **[ShoppingSummaryTemplate](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/templates/shopping/summary.tsx) (`summary.tsx`):**

   - Calculates **Subtotal**, **Taxes (6%)**, and **Total** dynamically based on the current items in the cart.
   - Displays a detailed breakdown card using [CardUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/card/index.tsx) and [TypographyUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/typography/index.tsx).
   - Renders the primary action button (`Confirm your order`) using [ButtonUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/button/index.tsx).
   - Launches the confirmation overlay when the order is confirmed.

3. **[ShoppingConfirmTemplate](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/templates/shopping/confirm.tsx) (`confirm.tsx`):**
   - Renders a full-screen overlay via React Native's `Modal` (`statusBarTranslucent`).
   - **Phase 1 (Processing - 3s):** Displays [LoaderUi](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/components/ui/loader/index.tsx) with animated bouncing bag and status text: _"Waiting for the confirmation of your purchase..."_.
   - **Phase 2 (Success - 2.5s):** Smoothly transitions background to `skin.success` (green), displays confirmation checkmark and legend (_"Order confirmated!"_), dispatches `onClearCart()` to wipe the cart without altering favorites, and navigates back to `Main`.

## Usage

### In Screens

```tsx
import React, { FC } from 'react';
import ScreenLayout from '@/components/layouts/screen';
import ShoppingTemplate from '@/components/templates/shopping';

const ShoppingCartHomeScreen: FC = () => {
  return (
    <ScreenLayout header={{ title: 'Shopping cart' }}>
      <ShoppingTemplate />
    </ScreenLayout>
  );
};

export default ShoppingCartHomeScreen;
```

## Calculations & Financial Logic

All financial computations are performed synchronously from the items present in `state.market.shoppingCart`:

| Metric       | Formula            | Description                                                  |
| ------------ | ------------------ | ------------------------------------------------------------ |
| **Subtotal** | `Σ item.amount`    | Summation of the amounts of all items currently in the cart. |
| **Taxes**    | `subtotal * 0.06`  | Calculated 6% tax rate (formatted to 2 decimal places).      |
| **Total**    | `subtotal + taxes` | Final payable amount.                                        |

## Redux Integration

The template interacts with the centralized `market` slice:

```typescript
// Reading state
const marketStore = useSelector((store: RootState) => store.market);
const items = marketStore.shoppingCart;

// Actions dispatched
dispatch(onRemoveToCart(value)); // Removes individual item from cart card
dispatch(onClearCart()); // Empties entire shoppingCart on confirmation
```

> [!NOTE] > `onClearCart()` exclusively empties `state.market.shoppingCart`. The user's `favorites` list remains intact and unaffected.

## Style Architecture

All styles are centralized in [src/styles/components/templates.ts](file:///Users/andresmendoza/Documents/Quarksoft/BellacoMarket/src/styles/components/templates.ts):

- `ShoppingTemplateStyles`: Container and list spacing.
- `ShoppingSummaryTemplateStyles`: Breakdown card, rows, and checkout button.
- `ShoppingConfirmTemplateStyles`: Modal overlay, loading presentation, and success screen typography.
