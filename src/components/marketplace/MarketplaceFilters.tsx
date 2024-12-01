import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const projectTypes = ['Reforestation', 'Solar Energy', 'Wind Power', 'Ocean Conservation'];
const regions = ['North America', 'South America', 'Europe', 'Asia', 'Africa'];
const certifications = ['Gold Standard', 'VCS', 'CDM', 'Plan Vivo'];

interface FiltersProps {
  filters: {
    projectType: string;
    region: string;
    certification: string;
    priceRange: [number, number];
  };
  onFilterChange: (filters: any) => void;
}

export default function MarketplaceFilters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Filters</h2>
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      </div>

      <div className="space-y-6">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search credits..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            value={filters.projectType}
            onChange={(e) => onFilterChange({ ...filters, projectType: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Types</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <select
            value={filters.region}
            onChange={(e) => onFilterChange({ ...filters, region: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certification
          </label>
          <select
            value={filters.certification}
            onChange={(e) => onFilterChange({ ...filters, certification: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Certifications</option>
            {certifications.map((cert) => (
              <option key={cert} value={cert}>{cert}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (USD)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [Number(e.target.value), filters.priceRange[1]]
              })}
              placeholder="Min"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)]
              })}
              placeholder="Max"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        <button
          onClick={() => onFilterChange({
            projectType: '',
            region: '',
            certification: '',
            priceRange: [0, 100],
          })}
          className="w-full py-2 text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}