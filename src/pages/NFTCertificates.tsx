import React, { useState } from 'react';
import NFTExplorer from '../components/nft/NFTExplorer';
import NFTFilters from '../components/nft/NFTFilters';
import NFTStats from '../components/nft/NFTStats';

export default function NFTCertificates() {
  const [filters, setFilters] = useState({
    projectType: '',
    location: '',
    priceRange: [0, 100],
    verificationStatus: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Carbon Offset Certificates (NFTs)</h1>
          <p className="text-gray-600">
            Discover and trade verified carbon offset certificates backed by blockchain technology
          </p>
        </div>

        <NFTStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <NFTFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <NFTExplorer filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}