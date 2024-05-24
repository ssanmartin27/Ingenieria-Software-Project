import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import ModernDrivewayGates from './ModernDrivewayGates';
import PrivacyGardenGates from './PrivacyGardenGates';
import Fencing from './Fencing';
import ModernBalconyRailings from './ModernBalconyRailings';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ModernDrivewayGates" element={<ModernDrivewayGates />} />
        <Route path="/PrivacyGardenGates" element={<PrivacyGardenGates />} />
        <Route path="/Fencing" element={<Fencing />} />
        <Route path="/ModernBalconyRailings" element={<ModernBalconyRailings />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </MantineProvider>

);

