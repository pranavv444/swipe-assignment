import React from 'react';

interface WelcomePageProps {
  onEnter: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Invoice Manager</h1>
        <p className="mb-8">Manage your invoices, products, and customers efficiently.</p>
        <button
          onClick={onEnter}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Enter
        </button>
      </div>
    </div>
  );
};