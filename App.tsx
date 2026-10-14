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
