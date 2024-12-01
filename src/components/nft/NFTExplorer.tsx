import React from 'react';
import { TreePine, Wind, Waves, Shield, QrCode } from 'lucide-react';

const mockNFTs = [
  {
    id: 'NFT-001',
    name: 'Amazon Rainforest Project #1',
    image: 'https://images.unsplash.com/photo-1516822264827-4d1d880862d8?auto=format&fit=crop&w=400&h=400',
    icon: TreePine,
    type: 'Reforestation',
    location: 'Brazil',
    offset: 100,
    price: 0.5,
    verification: 'Verified',
    lastTraded: '2024-03-15',
    contractAddress: '0x1234...5678',
  },
  {
    id: 'NFT-002',
    name: 'Wind Farm Initiative #23',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=400&h=400',
    icon: Wind,
    type: 'Wind Power',
    location: 'United States',
    offset: 75,
    price: 0.35,
    verification: 'Verified',
    lastTraded: '2024-03-14',
    contractAddress: '0x8765...4321',
  },
  {
    id: 'NFT-003',
    name: 'Pacific Ocean Conservation #8',
    image: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=400&h=400',
    icon: Waves,
    type: 'Ocean Conservation',
    location: 'Pacific Region',
    offset: 120,
    price: 0.65,
    verification: 'Pending Verification',
    lastTraded: '2024-03-13',
    contractAddress: '0x9876...5432',
  },
];

interface NFTExplorerProps {
  filters: {
    projectType: string;
    location: string;
    priceRange: [number, number];
    verificationStatus: string;
  };
}

export default function NFTExplorer({ filters }: NFTExplorerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockNFTs.map(nft => (
        <div key={nft.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative aspect-square">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium">{nft.verification}</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  {React.createElement(nft.icon, { className: 'w-5 h-5 text-emerald-600' })}
                </div>
                <div>
                  <h3 className="font-semibold">{nft.name}</h3>
                  <div className="text-sm text-gray-600">{nft.type}</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <QrCode className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Location</span>
                <span className="font-medium">{nft.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Carbon Offset</span>
                <span className="font-medium">{nft.offset} tons CO₂</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Traded</span>
                <span className="font-medium">{nft.lastTraded}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contract</span>
                <span className="font-medium text-emerald-600">{nft.contractAddress}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">Current Price</div>
              <div className="text-xl font-bold text-emerald-600">Ξ {nft.price}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                Buy Now
              </button>
              <button className="w-full bg-emerald-100 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors">
                Make Offer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}