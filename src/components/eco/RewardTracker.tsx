import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';

export default function RewardTracker() {
  const currentPoints = 750;
  const nextRewardAt = 1000;
  const progress = (currentPoints / nextRewardAt) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Your Eco Journey</h2>
          <p className="text-sm text-gray-600">Level 5 Eco Warrior</p>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-emerald-600" />
          <span className="text-2xl font-bold">{currentPoints}</span>
          <span className="text-gray-600">points</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress to next reward</span>
            <span className="font-medium">{currentPoints} / {nextRewardAt}</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full">
            <div
              className="h-3 bg-emerald-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg text-center">
            <Target className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">15</div>
            <div className="text-sm text-gray-600">Actions Today</div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg text-center">
            <Award className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">8</div>
            <div className="text-sm text-gray-600">Rewards Earned</div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg text-center">
            <Trophy className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-lg font-semibold">Top 5%</div>
            <div className="text-sm text-gray-600">Global Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
}