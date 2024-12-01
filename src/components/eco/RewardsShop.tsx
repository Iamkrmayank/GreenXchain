import React, { useState } from 'react';
import { ShoppingBag, Gift, Tag } from 'lucide-react';
import RedeemModal from './RedeemModal';

const rewards = [
  {
    id: 1,
    title: 'Eco-friendly Shopping Voucher',
    description: '$50 voucher for sustainable products',
    points: 1000,
    category: 'Shopping',
    available: true,
  },
  {
    id: 2,
    title: 'Public Transport Pass',
    description: 'Monthly pass for all public transport',
    points: 2000,
    category: 'Transport',
    available: true,
  },
  {
    id: 3,
    title: 'Tree Planting Certificate',
    description: 'Plant 10 trees in your name',
    points: 1500,
    category: 'Impact',
    available: true,
  },
];

export default function RewardsShop() {
  const [selectedReward, setSelectedReward] = useState<typeof rewards[0] | null>(null);

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Rewards Shop</h2>
            <p className="text-sm text-gray-600">Redeem your points for eco rewards</p>
          </div>
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">
                  {reward.category}
                </span>
              </div>

              <h3 className="font-semibold mb-2">{reward.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <span className="font-medium">{reward.points} pts</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg font-medium ${
                    reward.available
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  } transition-colors`}
                  disabled={!reward.available}
                  onClick={() => setSelectedReward(reward)}
                >
                  Redeem
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RedeemModal
        isOpen={selectedReward !== null}
        onClose={() => setSelectedReward(null)}
        reward={selectedReward || rewards[0]}
      />
    </>
  );
}