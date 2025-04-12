import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/Page/DashboardPage';
import ProjectsPage from './components/Page/ProjectsPage';
import TeamsPage from './components/Page/TeamsPage';
import AnalyticsPage from './components/Page/AnalyticsPage';
import MessagesPage from './components/Page/MessagesPage';
import IntegrationsPage from './components/Page/IntegrationsPage';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8">
          <Routes>
            {/* Route mặc định, hiển thị Dashboard khi truy cập / hoặc /dashboard */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            {/* Thêm các route khác của bạn */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;