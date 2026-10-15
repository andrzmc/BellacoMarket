import ScreenLayout from '@/components/layouts/screen';
import { TypographyUi } from '@/components/ui/typography';
import React from 'react';

const MainHomeScreen = () => {
  return (
    <ScreenLayout header={{ title: 'Bellaco Market' }} scrollable>
      <TypographyUi
        size="title"
        weight="bold"
        color="normal"
        style={{ textAlign: 'center' }}
      >
        Home Screen
      </TypographyUi>
    </ScreenLayout>
  );
};

export default MainHomeScreen;
