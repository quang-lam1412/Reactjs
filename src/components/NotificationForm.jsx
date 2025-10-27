import React, { useState } from 'react';
import { Send, Users, Target, Eye } from 'lucide-react';

const NotificationForm = () => {
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    audience: 'all',
    scheduled: false,
    scheduleDate: ''
  });
  
  const [preview, setPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle notification sending
    console.log('Sending notification:', notification);
    // Reset form
    setNotification({
      title: '',
      message: '',
      audience: 'all',
      scheduled: false,
      scheduleDate: ''
    });
    setPreview(false);
  };

  const audienceOptions = [
    { value: 'all', label: 'All Users', icon: Users },
    { value: 'active', label: 'Active Quit Plans', icon: Target },
    { value: 'premium', label: 'Premium Members', icon: Users }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Notification</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification Title
          </label>
          <input
            type="text"
            value={notification.title}
            onChange={(e) => setNotification({ ...notification, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter notification title..."
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            value={notification.message}
            onChange={(e) => setNotification({ ...notification, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your message..."
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <div className="grid grid-cols-3 gap-3">
            {audienceOptions.map((option) => (
              <label key={option.value} className="relative">
                <input
                  type="radio"
                  name="audience"
                  value={option.value}
                  checked={notification.audience === option.value}
                  onChange={(e) => setNotification({ ...notification, audience: e.target.value })}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  notification.audience === option.value
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <option.icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-center">{option.label}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          
          <button
            type="submit"
            className="flex-1 flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Send Notification</span>
          </button>
        </div>
      </form>
      
      {preview && notification.title && notification.message && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
          <h4 className="font-medium text-gray-800 mb-2">Preview</h4>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h5 className="font-semibold text-gray-800">{notification.title}</h5>
            <p className="text-gray-600 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-2">
              Target: {audienceOptions.find(opt => opt.value === notification.audience)?.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationForm;