import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import ModernDrivewayGates from './ModernDrivewayGates';
import PrivacyGardenGates from './PrivacyGardenGates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ModernDrivewayGates" element={<ModernDrivewayGates />} />
        <Route path="/PrivacyGardenGates" element={<PrivacyGardenGates />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

