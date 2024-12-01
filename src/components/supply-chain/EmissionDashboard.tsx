import React from 'react';
import { LineChart, BarChart3, Calendar } from 'lucide-react';

interface EmissionDashboardProps {
  period: string;
  onPeriodChange: (period: string) => void;
}

export default function EmissionDashboard({ period, onPeriodChange }: EmissionDashboardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Supply Chain Emissions</h2>
          <p className="text-sm text-gray-600">Analyze emissions across your supply chain</p>
        </div>
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

      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg mb-6">
        <div className="text-center text-gray-500">
          <LineChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p>Supply chain emissions visualization will appear here</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {['weekly', 'monthly', 'quarterly', 'yearly'].map((p) => (
          <button
            key={p}
            onClick={() => onPeriodChange(p)}
            className={`py-2 rounded-lg font-medium capitalize ${
              period === p
                ? 'bg-emerald-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}