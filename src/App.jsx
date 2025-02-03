// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './base/context/AuthContext';
import { PrivateRoute } from './base/routes/PrivateRoute';
import { PUBLIC_ROUTES, PRIVATE_ROUTES, ROLE_BASED_ROUTES } from './base/conf/routesValue';
import NotFound from './base/pages/NotFound';
import { Dashboard, Unauthorized } from './base/pages/Login';
import { PublicRoute } from './base/routes/PublicRoute';
import { RoleBasedRoute } from './base/routes/RoleBasedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route >
            {PUBLIC_ROUTES?.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            {/* <Route key={2} path="/" element= {<Dashboard></Dashboard>}></Route> */}
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            {PRIVATE_ROUTES.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          {/* Role-Based Routes */}
          {ROLE_BASED_ROUTES.map((route, index) => (
            <Route
              key={index}
              element={<RoleBasedRoute allowedRoles={route.allowedRoles} />}
            >
              <Route path={route.path} element={route.element} />
            </Route>
          ))}

          {/* Fallback Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;