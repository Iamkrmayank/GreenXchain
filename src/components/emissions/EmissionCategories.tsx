import React from 'react';
import { Car, Home, Building2, ShoppingBag, Plane } from 'lucide-react';

const categories = [
  { id: 'transport', icon: Car, label: 'Transportation' },
  { id: 'household', icon: Home, label: 'Household' },
  { id: 'business', icon: Building2, label: 'Business' },
  { id: 'shopping', icon: ShoppingBag, label: 'Shopping' },
  { id: 'travel', icon: Plane, label: 'Travel' },
];

interface EmissionCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function EmissionCategories({ selectedCategory, onSelectCategory }: EmissionCategoriesProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Emission Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {categories.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all ${
              selectedCategory === id
                ? 'bg-emerald-50 text-emerald-600'
                : 'hover:bg-gray-50'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}