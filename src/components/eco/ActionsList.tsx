import React from 'react';
import { Bike, Leaf, Recycle, Train, Lightbulb, ShoppingBag } from 'lucide-react';

const actions = [
  {
    id: 1,
    icon: Bike,
    title: 'Cycle to Work',
    description: 'Use a bicycle for your daily commute',
    points: 50,
    impact: '2.3 kg CO₂ saved',
    frequency: 'Daily',
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Energy Saver',
    description: 'Use LED bulbs and turn off unused lights',
    points: 30,
    impact: '1.5 kg CO₂ saved',
    frequency: 'Weekly',
  },
  {
    id: 3,
    icon: Train,
    title: 'Public Transport',
    description: 'Choose public transportation over driving',
    points: 40,
    impact: '3.1 kg CO₂ saved',
    frequency: 'Daily',
  },
  {
    id: 4,
    icon: Recycle,
    title: 'Proper Recycling',
    description: 'Sort and recycle waste correctly',
    points: 25,
    impact: '0.8 kg CO₂ saved',
    frequency: 'Daily',
  },
  {
    id: 5,
    icon: ShoppingBag,
    title: 'Zero Waste Shopping',
    description: 'Shop with reusable bags and containers',
    points: 35,
    impact: '0.5 kg CO₂ saved',
    frequency: 'Weekly',
  },
];

export default function ActionsList() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Available Actions</h2>
      
      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.id}
              className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium text-emerald-600">
                      {action.points} pts
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{action.impact}</span>
                  <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded">
                    {action.frequency}
                  </span>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                Complete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}