import React from 'react';
import { TreePine, Wind, Waves, Shield, History } from 'lucide-react';

const mockTokens = [
  {
    id: 'TOKEN-001',
    icon: TreePine,
    name: 'Amazon Forest Token',
    type: 'Reforestation',
    certification: 'Gold Standard',
    price: 15.20,
    quantity: 100,
    history: [
      { date: '2024-03-15', action: 'Minted', amount: 100 },
      { date: '2024-03-14', action: 'Verified', amount: 100 },
    ],
  },
  {
    id: 'TOKEN-002',
    icon: Wind,
    name: 'Wind Energy Token',
    type: 'Renewable Energy',
    certification: 'VCS',
    price: 12.80,
    quantity: 50,
    history: [
      { date: '2024-03-15', action: 'Traded', amount: 50 },
      { date: '2024-03-13', action: 'Minted', amount: 50 },
    ],
  },
];

interface TokenizedViewProps {
  filters: {
    projectType: string;
    region: string;
    certification: string;
    priceRange: [number, number];
  };
}

export default function TokenizedView({ filters }: TokenizedViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockTokens.map(token => (
        <div key={token.id} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              {React.createElement(token.icon, { className: 'w-6 h-6 text-emerald-600' })}
            </div>
            <div>
              <h3 className="font-semibold">{token.name}</h3>
              <div className="text-sm text-gray-600">{token.id}</div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Type</span>
              <span className="font-medium">{token.type}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Certification</span>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">{token.certification}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Quantity</span>
              <span className="font-medium">{token.quantity} tons CO₂</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Price</span>
              <span className="font-bold text-emerald-600">${token.price.toFixed(2)}/ton</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <History className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">Transaction History</span>
            </div>
            <div className="space-y-2">
              {token.history.map((event, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{event.date}</span>
                  <span>{event.action} • {event.amount} tons</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
              Trade
            </button>
            <button className="w-full bg-emerald-100 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}