import React from 'react';
import { CircleDollarSign, Users, Vote, Leaf } from 'lucide-react';

const stats = [
  {
    icon: CircleDollarSign,
    label: 'Total Funded',
    value: '$2.8M',
    trend: '+12.3% this month',
  },
  {
    icon: Users,
    label: 'DAO Members',
    value: '3,456',
    trend: '+156 this week',
  },
  {
    icon: Vote,
    label: 'Active Proposals',
    value: '12',
    trend: '89% participation',
  },
  {
    icon: Leaf,
    label: 'Projects Completed',
    value: '45',
    trend: '95% success rate',
  },
];

export default function FundingStats() {
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