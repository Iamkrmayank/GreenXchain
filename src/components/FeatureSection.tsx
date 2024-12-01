import React from 'react';
import { BarChart3, LineChart, Leaf, Coins } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Carbon Tracking',
    description: 'Monitor your carbon footprint in real-time with advanced analytics and insights.',
  },
  {
    icon: Coins,
    title: 'Marketplace',
    description: 'Trade carbon credits securely on our blockchain-powered marketplace.',
  },
  {
    icon: LineChart,
    title: 'Analytics',
    description: 'Make data-driven decisions with comprehensive environmental impact analytics.',
  },
  {
    icon: Leaf,
    title: 'Incentive Programs',
    description: 'Earn rewards for sustainable practices and carbon reduction initiatives.',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}