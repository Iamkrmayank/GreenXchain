import React from 'react';
import { TreePine, Wind, Waves } from 'lucide-react';

const impacts = [
  {
    icon: TreePine,
    label: 'Trees Planted',
    value: '250,000',
    trend: '+12,000 this month',
  },
  {
    icon: Wind,
    label: 'Clean Energy',
    value: '1.2 GWh',
    trend: 'Powers 1,000 homes',
  },
  {
    icon: Waves,
    label: 'Ocean Cleanup',
    value: '50 tons',
    trend: 'Plastic removed',
  },
];

export default function ImpactMetrics() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Project Impact</h2>
      
      <div className="space-y-4">
        {impacts.map(({ icon: Icon, label, value, trend }) => (
          <div
            key={label}
            className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="font-medium">{value}</div>
              <div className="text-sm">
                <span className="text-gray-600">{label}</span>
                <span className="mx-2">•</span>
                <span className="text-emerald-600">{trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}