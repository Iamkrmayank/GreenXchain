import React from 'react';
import { TrendingUp, CircleDollarSign, Leaf, ArrowRightLeft } from 'lucide-react';

const stats = [
  {
    icon: CircleDollarSign,
    label: 'Market Cap',
    value: '$245.8M',
    trend: '+12.3%',
  },
  {
    icon: ArrowRightLeft,
    label: '24h Volume',
    value: '$1.2M',
    trend: '+5.8%',
  },
  {
    icon: Leaf,
    label: 'Active Credits',
    value: '2.5M tons',
    trend: '+3.2%',
  },
  {
    icon: TrendingUp,
    label: 'Avg. Price',
    value: '$15.20/ton',
    trend: '+2.1%',
  },
];

export default function MarketplaceStats() {
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
          <div className="mt-4 text-sm text-emerald-600">{trend} this week</div>
        </div>
      ))}
    </div>
  );
}