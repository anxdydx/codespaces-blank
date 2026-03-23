import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { Admin } from './pages/Admin';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <>
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <Login />
      </>
    );
  }

  if (currentPage === 'admin' && !user) {
    setCurrentPage('login');
    return null;
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'products' && <Products />}
      {currentPage === 'categories' && <Categories />}
      {currentPage === 'admin' && user && <Admin />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
