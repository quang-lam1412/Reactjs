import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Calendar, DollarSign, Award, User, CheckCircle, Clock } from 'lucide-react';
import { mockQuitPlans } from '../services/mockData';

const QuitPlanDetail = () => {
  const { id } = useParams();
  const plan = mockQuitPlans.find(p => p.id === parseInt(id)) || mockQuitPlans[0];

  return (
    <div className="flex-1 overflow-auto">
      <Header title={`${plan.planName} - Details`} />
      
      <div className="p-6 space-y-6">
        {/* Plan Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Plan Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800">{plan.userName}</p>
                    <p className="text-gray-600">Plan Owner</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800">{new Date(plan.targetDate).toLocaleDateString()}</p>
                    <p className="text-gray-600">Target Completion</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800">${plan.savings}</p>
                    <p className="text-gray-600">Total Savings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Progress Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm font-medium text-gray-900">{plan.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  plan.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  plan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  Status: {plan.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Plan Timeline</h3>
          <div className="space-y-4">
            {plan.stages.map((stage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  stage.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {stage.completed ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium ${stage.completed ? 'text-gray-800' : 'text-gray-600'}`}>
                      {stage.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {new Date(stage.date).toLocaleDateString()}
                    </span>
                  </div>
                  {stage.completed && (
                    <p className="text-sm text-green-600 mt-1">Completed successfully</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-yellow-500" />
            Earned Badges
          </h3>
          {plan.badges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plan.badges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{badge}</p>
                    <p className="text-sm text-gray-600">Achievement Unlocked</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No badges earned yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuitPlanDetail;