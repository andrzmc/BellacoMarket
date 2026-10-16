import { MarketStore } from '@/models/interfaces/context/store/reducers';
import { CatalogItem } from '@/models/interfaces/templates';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: MarketStore = {
  favorites: [],
  shoppingCart: [],
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    onAddToCart: (state, action: PayloadAction<CatalogItem>) => {
      state.shoppingCart.push(action.payload);
    },
    onRemoveToCart: (state, action: PayloadAction<number | string>) => {
      state.shoppingCart = state.shoppingCart.filter(
        item => item.value !== action.payload,
      );
    },
    onAddToFavorites: (state, action: PayloadAction<CatalogItem>) => {
      state.favorites.push(action.payload);
    },
    onRemoveToFavorites: (state, action: PayloadAction<number | string>) => {
      state.favorites = state.favorites.filter(
        item => item.value !== action.payload,
      );
    },
    onClearCart: state => {
      state.shoppingCart = [];
    },
  },
});

export const {
  onAddToCart,
  onRemoveToCart,
  onAddToFavorites,
  onRemoveToFavorites,
  onClearCart,
} = marketSlice.actions;

export default marketSlice.reducer;
