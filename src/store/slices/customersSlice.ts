import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../types';

const initialState: Customer[] = [];

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomers: (state, action: PayloadAction<Customer[]>) => {
      return [...state, ...action.payload];
    },
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.findIndex((customer) => customer.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addCustomers, updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;