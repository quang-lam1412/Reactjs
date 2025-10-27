import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  Crown, 
  MessageSquare, 
  Bell,
  Leaf
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/quit-plans', icon: ClipboardList, label: 'Quit Plans' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/memberships', icon: Crown, label: 'Memberships' },
    { path: '/feedback', icon: MessageSquare, label: 'Feedback' },
    { path: '/notifications', icon: Bell, label: 'Notifications' }
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-emerald-50 to-green-100 border-r border-green-200 flex flex-col">
      <div className="p-6 border-b border-green-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">QuitHub</h1>
            <p className="text-sm text-green-600">Admin Panel</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-green-200 hover:text-green-800'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-green-200">
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Admin Dashboard v1.0</p>
          <p className="text-xs opacity-75">Smoke-Free Management</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;