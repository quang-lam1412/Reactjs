// Mock data for the admin panel
export const mockUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    status: "Active",
    joinDate: "2024-01-15",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quitPlans: 2,
    daysSmokeRee: 45
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    status: "Active",
    joinDate: "2024-02-01",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quitPlans: 1,
    daysSmokeRee: 32
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.w@email.com",
    status: "Blocked",
    joinDate: "2024-01-20",
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quitPlans: 3,
    daysSmokeRee: 12
  },
  {
    id: 4,
    name: "David Rodriguez",
    email: "david.r@email.com",
    status: "Active",
    joinDate: "2024-02-10",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quitPlans: 1,
    daysSmokeRee: 18
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    status: "Active",
    joinDate: "2024-01-25",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quitPlans: 2,
    daysSmokeRee: 67
  }
];

export const mockQuitPlans = [
  {
    id: 1,
    userId: 1,
    userName: "Sarah Johnson",
    planName: "30-Day Freedom Plan",
    status: "Approved",
    createdDate: "2024-01-15",
    targetDate: "2024-02-14",
    progress: 85,
    stages: [
      { name: "Preparation", completed: true, date: "2024-01-15" },
      { name: "Week 1", completed: true, date: "2024-01-22" },
      { name: "Week 2", completed: true, date: "2024-01-29" },
      { name: "Week 3", completed: true, date: "2024-02-05" },
      { name: "Week 4", completed: false, date: "2024-02-12" }
    ],
    savings: 420.75,
    badges: ["1 Week Strong", "Savings Master", "Health Hero"]
  },
  {
    id: 2,
    userId: 2,
    userName: "Mike Chen",
    planName: "Gradual Reduction Plan",
    status: "Pending",
    createdDate: "2024-02-01",
    targetDate: "2024-03-15",
    progress: 45,
    stages: [
      { name: "Assessment", completed: true, date: "2024-02-01" },
      { name: "Reduction Phase 1", completed: true, date: "2024-02-08" },
      { name: "Reduction Phase 2", completed: false, date: "2024-02-15" },
      { name: "Final Quit", completed: false, date: "2024-02-22" }
    ],
    savings: 180.50,
    badges: ["Getting Started"]
  },
  {
    id: 3,
    userId: 3,
    userName: "Emma Wilson",
    planName: "Cold Turkey Challenge",
    status: "Rejected",
    createdDate: "2024-01-20",
    targetDate: "2024-02-20",
    progress: 25,
    stages: [
      { name: "Mental Prep", completed: true, date: "2024-01-20" },
      { name: "Quit Day", completed: false, date: "2024-01-27" },
      { name: "Recovery Week", completed: false, date: "2024-02-03" }
    ],
    savings: 95.25,
    badges: []
  }
];

export const mockMemberships = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$9.99/month",
    features: ["Basic quit tracking", "Community access", "Weekly tips"],
    active: true
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "$19.99/month",
    features: ["All Basic features", "Personal coach", "Advanced analytics", "Custom plans"],
    active: true
  },
  {
    id: 3,
    name: "Elite Plan",
    price: "$39.99/month",
    features: ["All Premium features", "24/7 support", "Medical consultations", "Family plans"],
    active: true
  }
];

export const mockFeedback = [
  {
    id: 1,
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Amazing app! Really helped me quit smoking after 10 years. The community support is incredible.",
    date: "2024-02-15",
    status: "Published"
  },
  {
    id: 2,
    userName: "Mike Chen",
    rating: 4,
    comment: "Great features but could use more customization options for quit plans.",
    date: "2024-02-10",
    status: "Published"
  },
  {
    id: 3,
    userName: "David Rodriguez",
    rating: 5,
    comment: "The progress tracking and savings calculator keeps me motivated every day!",
    date: "2024-02-08",
    status: "Pending"
  },
  {
    id: 4,
    userName: "Lisa Thompson",
    rating: 3,
    comment: "Good app overall, but sometimes the notifications are too frequent.",
    date: "2024-02-05",
    status: "Archived"
  }
];

export const mockStats = {
  totalQuitPlans: 156,
  activeUsers: 89,
  avgDaysSmokeRee: 34,
  totalSavings: 12450.75,
  monthlyGrowth: 23,
  successRate: 78
};