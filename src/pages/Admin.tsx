import { useState } from 'react';
import { Package, Tag } from 'lucide-react';
import { ProductManagement } from '../components/ProductManagement';
import { CategoryManagement } from '../components/CategoryManagement';

export function Admin() {
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'products'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Package className="h-5 w-5" />
                <span>Product Management</span>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'categories'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Tag className="h-5 w-5" />
                <span>Category Management</span>
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'products' ? <ProductManagement /> : <CategoryManagement />}
          </div>
        </div>
      </div>
    </div>
  );
}
