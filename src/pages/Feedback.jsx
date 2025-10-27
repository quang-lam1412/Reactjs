import React, { useState } from 'react';
import Header from '../components/Header';
import { Star, MessageSquare, Archive, Reply, Filter } from 'lucide-react';
import { mockFeedback } from '../services/mockData';

const Feedback = () => {
  const [feedback, setFeedback] = useState(mockFeedback);
  const [statusFilter, setStatusFilter] = useState('all');

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setFeedback(feedback.map(f => 
      f.id === id ? { ...f, status: newStatus } : f
    ));
  };

  const filteredFeedback = feedback.filter(f => 
    statusFilter === 'all' || f.status.toLowerCase() === statusFilter
  );

  const avgRating = feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length;

  return (
    <div className="flex-1 overflow-auto">
      <Header title="Feedback" />
      
      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Reviews</p>
                <p className="text-3xl font-bold text-gray-800">{feedback.length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Average Rating</p>
                <div className="flex items-center space-x-2">
                  <p className="text-3xl font-bold text-yellow-500">{avgRating.toFixed(1)}</p>
                  <div className="flex">{renderStars(Math.round(avgRating))}</div>
                </div>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Reviews</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {feedback.filter(f => f.status === 'Pending').length}
                </p>
              </div>
              <Filter className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Published</p>
                <p className="text-3xl font-bold text-green-600">
                  {feedback.filter(f => f.status === 'Published').length}
                </p>
              </div>
              <Archive className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">User Feedback</h3>
            <p className="text-gray-600">Review and manage user feedback</p>
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="pending">Pending</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredFeedback.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-800">{item.userName}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{item.comment}</p>
                </div>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Reply className="w-4 h-4" />
                  <span>Reply</span>
                </button>
                
                {item.status === 'Pending' && (
                  <button 
                    onClick={() => handleStatusChange(item.id, 'Published')}
                    className="flex items-center space-x-1 px-3 py-1 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <span>Publish</span>
                  </button>
                )}
                
                <button 
                  onClick={() => handleStatusChange(item.id, 'Archived')}
                  className="flex items-center space-x-1 px-3 py-1 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Archive className="w-4 h-4" />
                  <span>Archive</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredFeedback.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No feedback found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;