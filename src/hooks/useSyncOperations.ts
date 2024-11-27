// // hooks/useSyncOperations.ts
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { updateProduct } from '../store/slices/productsSlice';
// import { updateInvoice } from '../store/slices/invoicesSlice';
// import { updateCustomer } from '../store/slices/customersSlice';
// import { Product } from '../types';
// export const useSyncOperations = () => {
//   const dispatch = useDispatch();

//   const generateUniqueId = (serialNumber: string, index: number = 0): string => {
//     return `${serialNumber}-${index}-${uuidv4()}`;
//   };

//   const updateProductWithSync = (product: Product) => {
//     // Update product
//     dispatch(updateProduct(product));

//     // Update related invoice
//     dispatch(updateInvoice({
//       id: product.id,
//       serialNumber: product.serialNumber,
//       productName: product.productName,
//       quantity: product.quantity,
//       tax: product.GSTAmount,
//       totalAmount: product.totalAmount,
//       date: product.date
//     }));

//     // Update related customer
//     dispatch(updateCustomer({
//       id: generateUniqueId(product.serialNumber as string),
//       serialNumber: product.serialNumber,
//       totalAmount: product.totalAmount,
//       taxAmount: product.GSTAmount,
//       lastPurchaseDate: product.date
//     }));
//   };

//   const addNewDataWithSync = (data: any) => {
//     const uniqueId = generateUniqueId(data.serial_number);

//     // Add product
//     const productData = {
//       id: uniqueId,
//       serialNumber: data.serial_number,
//       // ... other product fields
//     };
//     dispatch(updateProduct(productData));

//     // Add invoice
//     const invoiceData = {
//       id: uniqueId,
//       serialNumber: data.serial_number,
//       // ... other invoice fields
//     };
//     dispatch(updateInvoice(invoiceData));

//     // Add customer
//     const customerData = {
//       id: uniqueId,
//       serialNumber: data.serial_number,
//       // ... other customer fields
//     };
//     dispatch(updateCustomer(customerData));
//   };

//   return {
//     updateProductWithSync,
//     addNewDataWithSync,
//     generateUniqueId
//   };
// };