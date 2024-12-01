import React from 'react';
import { Target, TrendingDown } from 'lucide-react';

export default function EmissionTargets() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Emission Targets</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Monthly Goal</div>
            <TrendingDown className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-600 mb-2">75 kg CO₂</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="mt-2 text-sm text-gray-600">48.75 kg CO₂ used (65%)</div>
        </div>
        
        <button className="w-full bg-emerald-100 text-emerald-600 py-3 rounded-lg font-medium hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2">
          <Target className="w-5 h-5" />
          Set New Target
        </button>
      </div>
    </div>
  );
}