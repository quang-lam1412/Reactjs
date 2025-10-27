import React, { useState } from 'react';
import Header from '../components/Header';
import { Crown, Edit, Trash2, Plus, Check } from 'lucide-react';
import { mockMemberships } from '../services/mockData';

const Memberships = () => {
  const [memberships, setMemberships] = useState(mockMemberships);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDeleteMembership = (id) => {
    setMemberships(memberships.filter(m => m.id !== id));
  };

  return (
    <div className="flex-1 overflow-auto">
      <Header title="Memberships" />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Membership Plans</h3>
            <p className="text-gray-600">Manage subscription plans and pricing</p>
          </div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Plan</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    plan.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {plan.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-3xl font-bold text-gray-800">{plan.price}</p>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button 
                    onClick={() => handleDeleteMembership(plan.id)}
                    className="flex items-center justify-center px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Membership Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">234</p>
              <p className="text-gray-600">Basic Subscribers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">89</p>
              <p className="text-gray-600">Premium Subscribers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600">23</p>
              <p className="text-gray-600">Elite Subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;