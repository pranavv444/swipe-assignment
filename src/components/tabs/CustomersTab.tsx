import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from '../DataTable';
import { RootState } from '../../store';
import { updateCustomer } from '../../store/slices/customersSlice';

const columns = [
  { key: 'customerName', header: 'Customer Name', width: '25%' },
  { key: 'phoneNumber', header: 'Phone Number', width: '20%' },
  { key: 'totalAmount', header: 'Total Purchase Amount', width: '20%' },
  { key: 'taxAmount', header: 'Total Tax Amount', width: '20%' },
  { key: 'lastPurchaseDate', header: 'Last Purchase', width: '15%' },
  { key: 'address', header: 'Address', width: '15%' },
];

export const CustomersTab: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customers);

  const handleEdit = (customer: any) => {
    dispatch(updateCustomer({ ...customer }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Customers</h2>
      <DataTable
        data={customers}
        columns={columns}
        onEdit={handleEdit}
      />
    </div>
  );
};