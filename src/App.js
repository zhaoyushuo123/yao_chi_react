import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyEnvironmentPage from './pages/MyEnvironmentPage';
import TaskManagementPage from './pages/TaskManagementPage';
import EnvironmentCreationPage from './pages/EnvironmentCreationPage';
import TemplateManagementPage from './pages/TemplateManagementPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-environment" element={<MyEnvironmentPage />} />
          <Route path="/task-management" element={<TaskManagementPage />} />
          <Route path="/environment-creation" element={<EnvironmentCreationPage />} />
          <Route path="/template-management" element={<TemplateManagementPage />} />
        </Routes>
      </Router>
  );
}

export default App;