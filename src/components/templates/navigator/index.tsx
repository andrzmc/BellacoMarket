import RootNavigation from '@/screens/home/navigation';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';

const NavigatorTemplate: FC = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'white',
          primary: '#007AFF',
          card: 'white',
          text: '#1C1C1E',
          border: '#1C1C1E',
          notification: '#007AFF',
        },
        fonts: {
          regular: {
            fontFamily: 'Roboto',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'Roboto',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'Roboto',
            fontWeight: '700',
          },
          heavy: {
            fontFamily: 'Roboto',
            fontWeight: '900',
          },
        },
        dark: false,
      }}
    >
      <RootNavigation />
    </NavigationContainer>
  );
};

export default NavigatorTemplate;
