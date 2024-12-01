import React, { useState } from 'react';
import CreditListings from '../components/marketplace/CreditListings';
import MarketplaceFilters from '../components/marketplace/MarketplaceFilters';
import TokenizedView from '../components/marketplace/TokenizedView';
import MarketplaceStats from '../components/marketplace/MarketplaceStats';

export default function Marketplace() {
  const [view, setView] = useState<'list' | 'token'>('list');
  const [filters, setFilters] = useState({
    projectType: '',
    region: '',
    certification: '',
    priceRange: [0, 100],
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Carbon Credit Marketplace</h1>
            <p className="text-gray-600">Trade and retire carbon credits with blockchain verification</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-lg font-medium ${
                view === 'list'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setView('token')}
              className={`px-4 py-2 rounded-lg font-medium ${
                view === 'token'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Token View
            </button>
          </div>
        </div>

        <MarketplaceStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <MarketplaceFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            {view === 'list' ? (
              <CreditListings filters={filters} />
            ) : (
              <TokenizedView filters={filters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}