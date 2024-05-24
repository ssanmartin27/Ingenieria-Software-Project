import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import ModernDrivewayGates from './ModernDrivewayGates';
import PrivacyGardenGates from './PrivacyGardenGates';
import Fencing from './Fencing';
import ModernBalconyRailings from './ModernBalconyRailings';
import Osco from './Osco';
import PlatinumGateOpeners from './PlatinumGateOpeners';
import Allstar from './Allstar';
import Sea from './Sea';
import Remote from './Remote';
import Long from './Long';
import Receiver from './Receiver'
import LiftMaster from './LiftMaster';
import Sentex from './Sentex';
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
        <Route path="/PlatinumGateOpeners" element={<PlatinumGateOpeners />} />
        <Route path="/OSCO" element={<Osco />} />
        <Route path="/Allstar" element={<Allstar />} />
        <Route path="/SEA" element={<Sea />} />
        <Route path="/Multi-Code" element={<Remote />} />
        <Route path="/Long-Range" element={<Long />} />
        <Route path="/Receivers" element={<Receiver />} />
        <Route path="/LiftMaster" element={<LiftMaster />} />
        <Route path="/Sentex" element={<Sentex />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </MantineProvider>

);

