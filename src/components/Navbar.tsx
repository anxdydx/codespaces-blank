import { ShoppingBag, LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ShopHub</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-base font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`text-base font-medium transition-colors ${
                currentPage === 'products'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`text-base font-medium transition-colors ${
                currentPage === 'categories'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Categories
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button
                  onClick={() => onNavigate('admin')}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span className="hidden sm:inline">Admin</span>
                </button>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}
          </div>
        </div>

        <div className="md:hidden flex justify-around pb-3">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm font-medium ${
              currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('products')}
            className={`text-sm font-medium ${
              currentPage === 'products' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => onNavigate('categories')}
            className={`text-sm font-medium ${
              currentPage === 'categories' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Categories
          </button>
        </div>
      </div>
    </nav>
  );
}
