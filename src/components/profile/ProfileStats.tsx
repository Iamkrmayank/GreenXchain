import React from 'react';
import { Award, Leaf, CreditCard } from 'lucide-react';

const stats = [
  {
    icon: Leaf,
    value: '12.5',
    label: 'Carbon Credits',
    trend: '+2.3 this month',
  },
  {
    icon: Award,
    value: '850',
    label: 'Reward Points',
    trend: '+120 this week',
  },
  {
    icon: CreditCard,
    value: '₿0.05',
    label: 'Carbon Wallet',
    trend: 'Last transaction 2d ago',
  },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ icon: Icon, value, label, trend }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-gray-600 text-sm">{label}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-emerald-600">{trend}</div>
        </div>
      ))}
    </div>
  );
}