import React from 'react';
import { LineChart, BarChart3, Calendar } from 'lucide-react';

interface EmissionChartProps {
  category: string;
}

export default function EmissionChart({ category }: EmissionChartProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Emission Analytics</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <LineChart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <BarChart3 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
        <div className="text-center text-gray-500">
          <LineChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p>Emission data visualization will appear here</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Daily Average</div>
          <div className="text-lg font-semibold text-emerald-600">2.5 kg CO₂</div>
        </div>
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Monthly Total</div>
          <div className="text-lg font-semibold text-emerald-600">75 kg CO₂</div>
        </div>
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">YTD Total</div>
          <div className="text-lg font-semibold text-emerald-600">850 kg CO₂</div>
        </div>
      </div>
    </div>
  );
}