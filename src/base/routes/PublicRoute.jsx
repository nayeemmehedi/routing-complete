// src/routes/PublicRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};