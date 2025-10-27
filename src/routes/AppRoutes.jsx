import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import QuitPlans from '../pages/QuitPlans';
import QuitPlanDetail from '../pages/QuitPlanDetail';
import Users from '../pages/Users';
import Memberships from '../pages/Memberships';
import Feedback from '../pages/Feedback';
import Notifications from '../pages/Notifications';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/quit-plans" element={<QuitPlans />} />
      <Route path="/quit-plans/:id" element={<QuitPlanDetail />} />
      <Route path="/users" element={<Users />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
};

export default AppRoutes;