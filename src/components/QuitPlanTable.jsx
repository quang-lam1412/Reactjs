import React, { useState } from 'react';
import { Eye, Edit, Check, X, Clock } from 'lucide-react';
import { mockQuitPlans } from '../services/mockData';

const QuitPlanTable = () => {
  const [plans, setPlans] = useState(mockQuitPlans);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updatePlanStatus = (planId, newStatus) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, status: newStatus } : plan
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Plan Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Progress</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Created</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-800">{plan.userName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-800">{plan.planName}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                    {plan.status === 'Approved' && <Check className="w-3 h-3 mr-1" />}
                    {plan.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                    {plan.status === 'Rejected' && <X className="w-3 h-3 mr-1" />}
                    {plan.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{plan.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(plan.createdDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    {plan.status === 'Pending' && (
                      <>
                        <button 
                          onClick={() => updatePlanStatus(plan.id, 'Approved')}
                          className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => updatePlanStatus(plan.id, 'Rejected')}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuitPlanTable;