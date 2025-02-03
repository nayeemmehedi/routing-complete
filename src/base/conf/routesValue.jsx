// src/config/routes.js
import {  Dashboard, AdminPanel, PublicPage, UserDashboard, Login, HomePage } from '../pages/Login';

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};

export const PUBLIC_ROUTES = [
  { path: '/', element: <HomePage /> },

  { path: '/login', element: <Login /> },
  { path: '/public', element: <PublicPage /> },
];

export const PRIVATE_ROUTES = [
  { path: '/dashboard', element: <Dashboard /> },
];

export const ROLE_BASED_ROUTES = [
  { path: '/admin', element: <AdminPanel />, allowedRoles: [ROLES.ADMIN] },
  { path: '/user', element: <UserDashboard />, allowedRoles: [ROLES.USER] },
];