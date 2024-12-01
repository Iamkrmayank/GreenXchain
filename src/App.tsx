import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EmissionTracking from './pages/EmissionTracking';
import Marketplace from './pages/Marketplace';
import NFTCertificates from './pages/NFTCertificates';
import GreenDAO from './pages/GreenDAO';
import EcoIncentive from './pages/EcoIncentive';
import SupplyChain from './pages/SupplyChain';
import Transparency from './pages/Transparency';

export default function App() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/emissions" element={<EmissionTracking />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/nft-certificates" element={<NFTCertificates />} />
          <Route path="/dao" element={<GreenDAO />} />
          <Route path="/rewards" element={<EcoIncentive />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}