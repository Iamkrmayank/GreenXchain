import React from 'react';
import { TrendingDown, Building2, Truck, AlertTriangle } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    label: 'Total Emissions',
    value: '1,234 tons CO₂e',
    trend: '-12.3% vs last month',
  },
  {
    icon: Building2,
    label: 'Active Suppliers',
    value: '45',
    trend: '+3 this quarter',
  },
  {
    icon: Truck,
    label: 'Supply Chain Stages',
    value: '6',
    trend: 'All stages monitored',
  },
  {
    icon: AlertTriangle,
    label: 'High-Impact Areas',
    value: '3',
    trend: 'Requires attention',
  },
];

export default function SupplyChainStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ icon: Icon, label, value, trend }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">{label}</div>
              <div className="text-2xl font-bold">{value}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-emerald-600">{trend}</div>
        </div>
      ))}
    </div>
  );
}