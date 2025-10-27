import React from 'react';
import { Award, Star, Trophy, Target } from 'lucide-react';

const BadgeItem = ({ badge, count }) => {
  const getBadgeIcon = (badgeName) => {
    if (badgeName.includes('Week')) return Trophy;
    if (badgeName.includes('Savings')) return Target;
    if (badgeName.includes('Health')) return Star;
    return Award;
  };

  const BadgeIcon = getBadgeIcon(badge);

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <BadgeIcon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{badge}</h3>
          <p className="text-sm text-gray-600">Achievement Badge</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-green-600">{count}</p>
        <p className="text-xs text-gray-600">Earned</p>
      </div>
    </div>
  );
};

export default BadgeItem;