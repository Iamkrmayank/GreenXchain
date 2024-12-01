import React from 'react';
import { TreePine, Wind, Leaf } from 'lucide-react';

const recommendations = [
  {
    icon: TreePine,
    title: 'Reforestation Project',
    location: 'Amazon Rainforest',
    price: '$12/ton CO₂',
  },
  {
    icon: Wind,
    title: 'Wind Energy',
    location: 'Texas, USA',
    price: '$15/ton CO₂',
  },
  {
    icon: Leaf,
    title: 'Sustainable Agriculture',
    location: 'Karnataka, India',
    price: '$10/ton CO₂',
  },
];

export default function OffsetRecommendations() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Offset Recommendations</h2>
      
      <div className="space-y-4">
        {recommendations.map(({ icon: Icon, title, location, price }) => (
          <div
            key={title}
            className="p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{location}</p>
                <div className="text-sm font-medium text-emerald-600">{price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}