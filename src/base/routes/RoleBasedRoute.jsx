// src/routes/RoleBasedRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const RoleBasedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};