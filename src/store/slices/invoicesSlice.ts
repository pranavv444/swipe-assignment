import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Invoice } from '../../types';

const initialState: Invoice[] = [];

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoices: (state, action: PayloadAction<Invoice[]>) => {
      return [...state, ...action.payload];
    },
    updateInvoice: (state, action: PayloadAction<Invoice>) => {
      const index = state.findIndex((invoice) => invoice.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
      console.log('Updated invoice:', action.payload);
      console.log('Invoices state:', state);
      console.log('Index:', index);
    },
    updateInvoiceProduct: (state, action: PayloadAction<{ id: string; productName: string }>) => {
      const invoice = state.find((inv) => inv.id === action.payload.id);
      if (invoice) {
        invoice.productName = action.payload.productName;
      }
    },
  },
});

export const { addInvoices, updateInvoice, updateInvoiceProduct } = invoicesSlice.actions;
export default invoicesSlice.reducer;