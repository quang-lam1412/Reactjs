import React from 'react';
import { Users, ClipboardList, TrendingUp, DollarSign, Calendar, Award } from 'lucide-react';
import Header from '../components/Header';
import ProgressChart from '../components/ProgressChart';
import BadgeItem from '../components/BadgeItem';
import { mockStats, mockQuitPlans } from '../services/mockData';

const Dashboard = () => {
  const statsCards = [
    {
      title: 'Total Quit Plans',
      value: mockStats.totalQuitPlans,
      icon: ClipboardList,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      title: 'Active Users',
      value: mockStats.activeUsers,
      icon: Users,
      color: 'bg-green-500',
      trend: '+8%'
    },
    {
      title: 'Avg Days Smoke-Free',
      value: mockStats.avgDaysSmokeRee,
      icon: Calendar,
      color: 'bg-purple-500',
      trend: '+15%'
    },
    {
      title: 'Total Savings',
      value: `$${mockStats.totalSavings.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-yellow-500',
      trend: '+23%'
    }
  ];

  const chartData = {
    labels: ['Approved', 'Pending', 'In Progress', 'Completed'],
    values: [45, 15, 25, 35]
  };

  const topBadges = [
    { name: '1 Week Strong', count: 34 },
    { name: 'Savings Master', count: 28 },
    { name: 'Health Hero', count: 22 },
    { name: '30 Day Champion', count: 18 }
  ];

  const recentPlans = mockQuitPlans.slice(0, 3);

  return (
    <div className="flex-1 overflow-auto">
      <Header title="Dashboard" />
      
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
                    <span className="text-gray-500 text-sm ml-1">this month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <ProgressChart data={chartData} title="Quit Plans Overview" />
          
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Quit Plans</h3>
            <div className="space-y-4">
              {recentPlans.map((plan) => (
                <div key={plan.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{plan.planName}</p>
                    <p className="text-sm text-gray-600">{plan.userName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">{plan.progress}%</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      plan.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      plan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Top Achievement Badges</h3>
            <Award className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topBadges.map((badge, index) => (
              <BadgeItem key={index} badge={badge.name} count={badge.count} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;