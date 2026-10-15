import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeName } from 'react-native';

const initialState: { appareance: ColorSchemeName | null; skinName: string } = {
  appareance: null,
  skinName: 'default',
};

export const settingsSlice = createSlice({
  name: 'skin',
  initialState,
  reducers: {
    onChangeAppearance: (
      state,
      action: PayloadAction<ColorSchemeName | null>,
    ) => {
      state.appareance = action.payload;
    },
    onChangeSkinName: (state, action: PayloadAction<string>) => {
      state.skinName = action.payload;
    },
  },
});

export const { onChangeAppearance, onChangeSkinName } = settingsSlice.actions;

export default settingsSlice.reducer;
