import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import AddProducts from './pages/adminPage/addProducts/AddProducts';
import Login from './components/login/Login';
import ProtectedRoute from './hooks/ProtectedRoute';
import LayoutWrapper from './components/layout/Layout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path='/home'
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Home />} />}
      />
      <Route
        path='/'
        element={<LayoutWrapper />}
      >
        <Route
          path='addProducts'
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AddProducts />} />}
        />
      </Route>

    </Routes>
  );
};

export default App;

