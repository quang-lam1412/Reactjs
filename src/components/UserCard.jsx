import React, { useState } from 'react';
import { Shield, ShieldOff, Calendar, Award } from 'lucide-react';

const UserCard = ({ user, onStatusChange }) => {
  const [isBlocked, setIsBlocked] = useState(user.status === 'Blocked');

  const handleStatusToggle = () => {
    const newStatus = isBlocked ? 'Active' : 'Blocked';
    setIsBlocked(!isBlocked);
    onStatusChange(user.id, newStatus);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
        }`}>
          {isBlocked ? (
            <ShieldOff className="w-3 h-3 mr-1" />
          ) : (
            <Shield className="w-3 h-3 mr-1" />
          )}
          {isBlocked ? 'Blocked' : 'Active'}
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{user.quitPlans}</p>
          <p className="text-xs text-gray-600">Quit Plans</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{user.daysSmokeRee}</p>
          <p className="text-xs text-gray-600">Days Free</p>
        </div>
        <div className="text-center">
          <Award className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
          <p className="text-xs text-gray-600">Badges</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          Joined {new Date(user.joinDate).toLocaleDateString()}
        </div>
      </div>
      
      <button
        onClick={handleStatusToggle}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
          isBlocked
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        {isBlocked ? 'Unblock User' : 'Block User'}
      </button>
    </div>
  );
};

export default UserCard;