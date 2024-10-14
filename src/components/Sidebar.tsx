import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center">Admin Dashboard</h2>
      <nav>
        <Link to="/" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/') ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}>
          <Home className="inline-block mr-2" size={18} />
          Home
        </Link>
        <Link to="/users" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/users') ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}>
          <Users className="inline-block mr-2" size={18} />
          Users
        </Link>
        <Link to="/settings" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/settings') ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}>
          <Settings className="inline-block mr-2" size={18} />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-0 w-full">
        <button
          onClick={logout}
          className="block w-full py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 text-left"
        >
          <LogOut className="inline-block mr-2" size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;