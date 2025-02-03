// src/pages/Login.js
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ username: 'test', role: 'user' }); // Simulate user login
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// src/pages/Dashboard.js
export const Dashboard = () => <h1>Dashboard</h1>;

// src/pages/AdminPanel.js
export const AdminPanel = () => <h1>Admin Panel</h1>;

// src/pages/PublicPage.js
export const PublicPage = () => <h1>Public Page</h1>;
export const HomePage = () => <h1>HomePage Page</h1>;

// src/pages/Unauthorized.js
export const Unauthorized = () => <h1>Unauthorized</h1>;

// src/pages/NotFound.js
export const NotFound = () => <h1>404 Not Found</h1>;

// src/pages/UserDashboard.js
export const UserDashboard = () => <h1>User Dashboard</h1>;