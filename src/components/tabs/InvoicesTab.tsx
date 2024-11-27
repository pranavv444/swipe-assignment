import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from '../DataTable';
import { RootState } from '../../store';
import { updateInvoice } from '../../store/slices/invoicesSlice';

// const columns = [
//   { key: 'serialNumber', header: 'Serial Number', width: '15%' },
//   { key: 'customerName', header: 'Customer Name', width: '20%' },
//   { key: 'productName', header: 'Product Name', width: '20%' },
//   { key: 'quantity', header: 'Quantity', width: '10%' },
//   { key: 'tax', header: 'Tax', width: '10%' },
//   { key: 'totalAmount', header: 'Total Amount', width: '15%' },
//   { key: 'date', header: 'Date', width: '10%' },
// ];

const columns = [
  { key: 'serialNumber', header: 'Serial Number', width: '15%' },
  { key: 'customerName', header: 'Customer Name', width: '20%' },
  { key: 'productName', header: 'Product Name', width: '20%' },
  { key: 'quantity', header: 'Quantity', width: '10%' },
  { key: 'tax', header: 'Tax', width: '10%' },
  { key: 'totalAmount', header: 'Total Amount', width: '15%' },
  { key: 'date', header: 'Date', width: '10%' },
];

export const InvoicesTab: React.FC = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state: RootState) => state.invoices);
  // console.log('Invoices:', invoices);

  const handleEdit = (invoice: any) => {
    // Implement edit functionality
    dispatch(updateInvoice({ ...invoice }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Invoices</h2>
      <DataTable
        data={invoices}
        columns={columns}
        onEdit={handleEdit}
      />
    </div>
  );
};
