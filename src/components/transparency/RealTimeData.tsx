import React from 'react';
import { LineChart, BarChart3, Calendar, Download } from 'lucide-react';

interface RealTimeDataProps {
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

export default function RealTimeData({ timeRange, onTimeRangeChange }: RealTimeDataProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Real-Time Emissions Data</h2>
          <p className="text-sm text-gray-600">Live tracking of reduction initiatives</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <LineChart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <BarChart3 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg mb-6">
        <div className="text-center text-gray-500">
          <LineChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p>Emissions reduction visualization will appear here</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {['day', 'week', 'month', 'year'].map((range) => (
          <button
            key={range}
            onClick={() => onTimeRangeChange(range)}
            className={`py-2 rounded-lg font-medium capitalize ${
              timeRange === range
                ? 'bg-emerald-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}