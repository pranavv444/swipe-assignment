import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      return [...state, ...action.payload];
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;