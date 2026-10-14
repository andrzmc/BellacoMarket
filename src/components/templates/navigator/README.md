# Navigator Template

## Description

A top-level structural template component that wraps and bootstraps the application's navigation hierarchy. It configures React Navigation's `NavigationContainer` with a pre-defined global theme, establishing baseline color tokens and typography font definitions while hosting the application's primary root navigation stack (`RootNavigation`).

## Usage

```jsx
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigatorTemplate from '@/components/templates/navigator';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigatorTemplate />
    </SafeAreaProvider>
  );
};

export default App;
```

## Theme Configuration

The template provides an integrated `theme` configuration to `NavigationContainer` with the following tokens:

### Colors

| Token            | Value       | Description                                                      |
| :--------------- | :---------- | :--------------------------------------------------------------- |
| **background**   | `'white'`   | Default background color for screen containers.                  |
| **primary**      | `'#007AFF'` | Primary brand color used for navigation elements and highlights. |
| **card**         | `'white'`   | Background color for cards, modals, or header elements.          |
| **text**         | `'#1C1C1E'` | Default color for navigation text and titles.                    |
| **border**       | `'#1C1C1E'` | Color for navigation dividers and header borders.                |
| **notification** | `'#007AFF'` | Accent color for badge elements and notification indicators.     |

### Typography

| Variant     | Font Family | Font Weight | Description                    |
| :---------- | :---------- | :---------- | :----------------------------- |
| **regular** | `'Roboto'`  | `'400'`     | Standard body and label text.  |
| **medium**  | `'Roboto'`  | `'500'`     | Medium emphasis text.          |
| **bold**    | `'Roboto'`  | `'700'`     | High emphasis and titles.      |
| **heavy**   | `'Roboto'`  | `'900'`     | Maximum emphasis / heavy text. |
