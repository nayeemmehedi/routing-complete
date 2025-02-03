// src/routes/PrivateRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};



