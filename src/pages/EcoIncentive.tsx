import React from 'react';
import ActionsList from '../components/eco/ActionsList';
import RewardTracker from '../components/eco/RewardTracker';
import Leaderboard from '../components/eco/Leaderboard';
import RewardsShop from '../components/eco/RewardsShop';

export default function EcoIncentive() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Eco Rewards Program</h1>
          <p className="text-gray-600">
            Complete sustainable actions, earn points, and unlock rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <RewardTracker />
            <ActionsList />
            <RewardsShop />
          </div>
          <div>
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}