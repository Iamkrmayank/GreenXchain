import React from 'react';
import CarbonFootprintChart from '../components/profile/CarbonFootprintChart';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileSettings from '../components/profile/ProfileSettings';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, Sarah</h1>
            <p className="text-gray-600">Track your impact and manage your account</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <ProfileStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CarbonFootprintChart />
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  );
}