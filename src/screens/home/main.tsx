import { TypographyUi } from '@/components/ui/typography';
import React from 'react';
import { View } from 'react-native';

const MainHomeScreen = () => {
  return (
    <View>
      <TypographyUi
        size="title"
        weight="bold"
        color="normal"
        style={{ textAlign: 'center' }}
      >
        Home Screen
      </TypographyUi>
    </View>
  );
};

export default MainHomeScreen;
