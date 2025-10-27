import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">Manage your QuitHub platform</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs text-gray-600">admin@quithub.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;