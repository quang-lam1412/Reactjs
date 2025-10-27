import React from 'react';
import Header from '../components/Header';
import QuitPlanTable from '../components/QuitPlanTable';
import { Filter, Plus, Download } from 'lucide-react';

const QuitPlans = () => {
  return (
    <div className="flex-1 overflow-auto">
      <Header title="Quit Plans" />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Manage Quit Plans</h3>
            <p className="text-gray-600">Review and approve user quit plans</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Plan</span>
            </button>
          </div>
        </div>
        
        <QuitPlanTable />
      </div>
    </div>
  );
};

export default QuitPlans;