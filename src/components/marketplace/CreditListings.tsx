import React from 'react';
import { TreePine, Wind, Waves, Shield, ExternalLink } from 'lucide-react';

const mockCredits = [
  {
    id: 1,
    icon: TreePine,
    name: 'Amazon Rainforest Conservation',
    type: 'Reforestation',
    location: 'Brazil',
    certification: 'Gold Standard',
    price: 15.20,
    available: 5000,
    description: 'Protection and restoration of primary rainforest in the Amazon basin.',
  },
  {
    id: 2,
    icon: Wind,
    name: 'Texas Wind Farm Project',
    type: 'Wind Power',
    location: 'United States',
    certification: 'VCS',
    price: 12.80,
    available: 3200,
    description: 'Large-scale wind energy generation in central Texas.',
  },
  {
    id: 3,
    icon: Waves,
    name: 'Pacific Ocean Conservation',
    type: 'Ocean Conservation',
    location: 'Pacific Region',
    certification: 'Plan Vivo',
    price: 18.50,
    available: 2800,
    description: 'Marine ecosystem protection and restoration initiative.',
  },
];

interface CreditListingsProps {
  filters: {
    projectType: string;
    region: string;
    certification: string;
    priceRange: [number, number];
  };
}

export default function CreditListings({ filters }: CreditListingsProps) {
  return (
    <div className="space-y-6">
      {mockCredits.map(credit => (
        <div key={credit.id} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
              {React.createElement(credit.icon, { className: 'w-8 h-8 text-emerald-600' })}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{credit.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{credit.type}</span>
                    <span>•</span>
                    <span>{credit.location}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      {credit.certification}
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </a>
              </div>
              
              <p className="text-gray-600 mb-4">{credit.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Available Credits</div>
                  <div className="font-semibold">{credit.available.toLocaleString()} tons CO₂</div>
                </div>
                
                <div className="space-y-1 text-right">
                  <div className="text-sm text-gray-600">Price per Credit</div>
                  <div className="text-xl font-bold text-emerald-600">
                    ${credit.price.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                  Buy Credits
                </button>
                <button className="w-full bg-emerald-100 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors">
                  Retire Credits
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}