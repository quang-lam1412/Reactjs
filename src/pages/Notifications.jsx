import React from 'react';
import Header from '../components/Header';
import NotificationForm from '../components/NotificationForm';
import { Bell, Send, Users, Clock } from 'lucide-react';

const Notifications = () => {
  const recentNotifications = [
    {
      id: 1,
      title: "Welcome to QuitHub!",
      message: "Start your smoke-free journey today with our comprehensive quit plans.",
      audience: "All Users",
      sent: "2024-02-15",
      recipients: 156
    },
    {
      id: 2,
      title: "Weekly Progress Update",
      message: "Great job on your progress this week! Keep up the excellent work.",
      audience: "Active Quit Plans",
      sent: "2024-02-14",
      recipients: 89
    },
    {
      id: 3,
      title: "New Badge Unlocked!",
      message: "Congratulations! You've earned the 'Health Hero' badge.",
      audience: "Premium Members",
      sent: "2024-02-13",
      recipients: 23
    }
  ];

  return (
    <div className="flex-1 overflow-auto">
      <Header title="Notifications" />
      
      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Sent</p>
                <p className="text-3xl font-bold text-blue-600">1,247</p>
              </div>
              <Send className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Recipients Reached</p>
                <p className="text-3xl font-bold text-green-600">268</p>
              </div>
              <Users className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">This Week</p>
                <p className="text-3xl font-bold text-purple-600">12</p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Notification Form */}
          <NotificationForm />
          
          {/* Recent Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-blue-500" />
              Recent Notifications
            </h3>
            
            <div className="space-y-4">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{notification.title}</h4>
                    <span className="text-xs text-gray-500">
                      {new Date(notification.sent).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{notification.message}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>To: {notification.audience}</span>
                    <span>{notification.recipients} recipients</span>
                  </div>
                </div>
              ))}
            </div>
            
            {recentNotifications.length === 0 && (
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No notifications sent yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;