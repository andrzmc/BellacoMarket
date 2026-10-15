import RootNavigation from '@/screens/home/navigation';
import useSkin from '@/services/hooks/useSkin';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';

const NavigatorTemplate: FC = () => {
  const { skin, isDarkMode } = useSkin();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: skin.background,
          primary: skin.primary,
          card: skin.primary,
          text: skin.text.paragraph,
          border: skin.primary,
          notification: skin.primary,
        },
        fonts: {
          regular: {
            fontFamily: 'Montserrat-Regular',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'Montserrat-Medium',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'Montserrat-Bold',
            fontWeight: '700',
          },
          heavy: {
            fontFamily: 'Montserrat-ExtraBold',
            fontWeight: '900',
          },
        },
        dark: isDarkMode,
      }}
    >
      <RootNavigation />
    </NavigationContainer>
  );
};

export default NavigatorTemplate;
