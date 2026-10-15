import { SkinContext } from '@/context/providers/skin/skin.context';
import { RootState } from '@/context/store';
import { SKIN_OPTIONS } from '@/styles/skins';
import React, { FC, ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

const SkinProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const settingsStore = useSelector((state: RootState) => state.settings);

  const appearance =
    settingsStore.appareance || (isDarkMode ? 'dark' : 'light');

  const isDarkAppearance = appearance === 'dark';

  const skinName = settingsStore.skinName;

  const skinMode =
    SKIN_OPTIONS[skinName as keyof typeof SKIN_OPTIONS] || SKIN_OPTIONS.default;

  const skin = skinMode[appearance];

  return (
    <SkinContext.Provider
      value={{
        skin,
        isDarkMode: isDarkAppearance,
        skinName,
        appearance,
      }}
    >
      <StatusBar
        barStyle={isDarkAppearance ? 'light-content' : 'dark-content'}
      />
      {skinMode && skin ? children : null}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
