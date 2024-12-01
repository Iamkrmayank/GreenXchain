import React from 'react';
import { Building2, Users, Target, Globe } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    label: 'Organizations',
    value: '156',
    trend: '+12 this month',
  },
  {
    icon: Users,
    label: 'Stakeholders',
    value: '15.2K',
    trend: 'Active participants',
  },
  {
    icon: Target,
    label: 'Projects',
    value: '45',
    trend: '32 in progress',
  },
  {
    icon: Globe,
    label: 'Impact Reach',
    value: '12',
    trend: 'Countries involved',
  },
];

export default function TransparencyStats() {
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