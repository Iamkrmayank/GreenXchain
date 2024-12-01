import React from 'react';
import { TreePine, Wallet, Users } from 'lucide-react';

const stats = [
  {
    icon: TreePine,
    value: '2.5M',
    label: 'Tons CO₂ Reduced',
    trend: '+12.5%',
  },
  {
    icon: Wallet,
    value: '850K',
    label: 'Credits Traded',
    trend: '+8.3%',
  },
  {
    icon: Users,
    value: '125K',
    label: 'Active Users',
    trend: '+15.2%',
  },
];

export default function ImpactTracker() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Global Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 mb-4">{stat.label}</div>
                <div className="inline-flex items-center text-sm text-emerald-600 font-medium">
                  {stat.trend} this month
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}