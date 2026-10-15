import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigatorTemplate from '@/components/templates/navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/context/store';
import SkinProvider from '@/context/providers/skin/skin.provider';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <SkinProvider>
            <NavigatorTemplate />
          </SkinProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
