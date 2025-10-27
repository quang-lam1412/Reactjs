import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;