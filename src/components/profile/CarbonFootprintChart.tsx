import React from 'react';
import { LineChart, TrendingDown } from 'lucide-react';

export default function CarbonFootprintChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Carbon Footprint Tracker</h3>
        <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
          <TrendingDown className="w-4 h-4" />
          -15% this month
        </div>
      </div>
      
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
        <div className="text-center text-gray-500">
          <LineChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p>Carbon footprint visualization will appear here</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4">
        {['Daily', 'Monthly', 'Yearly'].map((period) => (
          <button
            key={period}
            className="py-2 px-4 text-sm font-medium rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
}