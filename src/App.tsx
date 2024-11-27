import  { useState } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { FileText, Package, Users, Upload } from 'lucide-react';
import { store } from './store';
import { FileUpload } from './components/FileUpload';
import { InvoicesTab } from './components/tabs/InvoicesTab';
import { ProductsTab } from './components/tabs/ProductsTab';
import { CustomersTab } from './components/tabs/CustomersTab';
import { Loader } from './components/Loader'; 
import { WelcomePage } from './components/WelcomePage';  WelcomePage
const tabs = [
  { id: 'invoices', label: 'Invoices', icon: FileText, component: InvoicesTab },
  { id: 'products', label: 'Products', icon: Package, component: ProductsTab },
  { id: 'customers', label: 'Customers', icon: Users, component: CustomersTab },
];

function App() {
  const [activeTab, setActiveTab] = useState('invoices');
  const [loading, setLoading] = useState(false); 
  const [showWelcome, setShowWelcome] = useState(true); 

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <Provider store={store}>
      {showWelcome ? (
        <WelcomePage onEnter={handleEnter} />
      ) : (
        <div className="flex h-screen bg-gray-900">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 shadow-md">
            <div className="p-6 flex items-center justify-center">
              <Upload className="h-10 w-10 text-cyan-500" /> {/* Changed icon color */}
              <span className="ml-2 text-xl font-bold text-cyan-500">Invoice Manager</span>
            </div>
            <nav className="mt-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center w-full px-4 py-2 mt-2 text-gray-300 hover:bg-indigo-700 hover:text-white ${
                    activeTab === tab.id ? 'bg-indigo-700 text-white' : ''
                  } rounded-md transition-colors duration-200`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="mx-4 font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 p-6 bg-gray-900 text-gray-100 overflow-auto">
            <div className="mb-6">
              <FileUpload setLoading={setLoading} /> {/* Pass setLoading */}
            </div>
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
      )}

      {loading && <Loader />}

      <Toaster />
    </Provider>
  );
}

export default App;