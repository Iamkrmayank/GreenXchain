import React, { useState } from 'react';
import EmissionCategories from '../components/emissions/EmissionCategories';
import EmissionChart from '../components/emissions/EmissionChart';
import EmissionTargets from '../components/emissions/EmissionTargets';
import EmissionInput from '../components/emissions/EmissionInput';
import OffsetRecommendations from '../components/emissions/OffsetRecommendations';

export default function EmissionTracking() {
  const [selectedCategory, setSelectedCategory] = useState('transport');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Carbon Emission Tracking</h1>
          <p className="text-gray-600">Monitor and analyze your carbon footprint</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <EmissionCategories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <EmissionChart category={selectedCategory} />
            <EmissionInput category={selectedCategory} />
          </div>
          
          <div className="space-y-8">
            <EmissionTargets />
            <OffsetRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
}