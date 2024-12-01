import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const impacts = [
  {
    icon: Target,
    title: 'Emissions Reduction',
    description: 'On track to reduce city-wide emissions by 25% by 2025',
    progress: 68,
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: '15,000 residents participating in green initiatives',
    progress: 85,
  },
  {
    icon: Globe,
    title: 'Global Goals Alignment',
    description: 'Contributing to 6 UN Sustainable Development Goals',
    progress: 75,
  },
];

export default function ImpactStatements() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Impact Statements</h2>
      
      <div className="space-y-6">
        {impacts.map(({ icon: Icon, title, description, progress }) => (
          <div
            key={title}
            className="p-4 bg-emerald-50 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                <div className="w-full h-2 bg-white rounded-full">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-sm text-emerald-600 font-medium">
                  {progress}% towards goal
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}