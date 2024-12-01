import React from 'react';
import { Award, Gem, ArrowRight } from 'lucide-react';

const incentives = [
  {
    supplier: 'EcoMaterials Ltd',
    achievement: 'Reduced emissions by 25%',
    reward: '500 Green Tokens',
    status: 'Pending',
  },
  {
    supplier: 'Sustainable Logistics Co',
    achievement: 'Zero-emission deliveries',
    reward: '750 Green Tokens',
    status: 'Claimed',
  },
];

export default function IncentiveModule() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Smart Incentives</h2>
          <p className="text-sm text-gray-600">Reward sustainable practices</p>
        </div>
        <Award className="w-5 h-5 text-emerald-600" />
      </div>

      <div className="space-y-4">
        {incentives.map((incentive, index) => (
          <div
            key={index}
            className="p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium mb-1">{incentive.supplier}</h3>
                <p className="text-sm text-gray-600 mb-2">{incentive.achievement}</p>
                <div className="flex items-center gap-1 text-emerald-600">
                  <Gem className="w-4 h-4" />
                  <span className="text-sm font-medium">{incentive.reward}</span>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-lg font-medium ${
                  incentive.status === 'Pending'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gray-100 text-gray-400'
                } transition-colors`}
                disabled={incentive.status === 'Claimed'}
              >
                {incentive.status}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-colors flex items-center justify-center gap-2">
        View All Incentives
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}