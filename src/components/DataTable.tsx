import React,{useState} from 'react';
import { Edit2 } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  onEdit?: (item: any) => void;
}
// const formatProductName = (productName: string) => {
//   const maxLength = 40;  // Set the max length for product names
//   return productName.length > maxLength ? `${productName.slice(0, maxLength)}...` : productName;
// };
export const DataTable: React.FC<DataTableProps> = ({ data, columns, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullProductNames, setFullProductNames] = useState<string[]>([]);


console.log("data in data table and coloumns in data table",{data,columns})
  const handleProductNameClick = (productNames: string[]) => {
    setFullProductNames(productNames);
    console.log("handleProductNameClick,:", productNames)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatProductName = (productNames: string[]) => {
    // Limit to 40 characters with ellipsis
    const truncated = productNames.join(", ");
    return truncated.length > 40 ? truncated.substring(0, 40) + "..." : truncated;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
            {onEdit && <th scope="col" className="relative px-6 py-3" />}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={item.id || index}
              className={item.status === 'incomplete' ? 'bg-red-50' : undefined}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.key === 'productName' ? (
                    <span
                      className="cursor-pointer  hover:underline"
                      onClick={() => handleProductNameClick(item.productName.split(", "))}
                    >
                      {formatProductName(item.productName.split(", "))}
                    </span>
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
              {onEdit && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-black">Full Product Names</h2>
            <ul className="mt-4 space-y-2 text-black">
              {fullProductNames.map((name, index) => (
                <li key={index} className="text-sm">{name}</li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
