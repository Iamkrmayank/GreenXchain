import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, ShoppingBag, Award, Vote, Gift, Building2, Globe } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${isHomePage ? 'absolute' : 'relative bg-emerald-800'} top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          GreenXchain
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/emissions" className="text-white hover:text-emerald-100 transition-colors">
            Track Emissions
          </Link>
          <Link to="/marketplace" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Marketplace
          </Link>
          <Link to="/nft-certificates" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <Award className="w-4 h-4" />
            NFT Certificates
          </Link>
          <Link to="/dao" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <Vote className="w-4 h-4" />
            DAO
          </Link>
          <Link to="/rewards" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Rewards
          </Link>
          <Link to="/supply-chain" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Supply Chain
          </Link>
          <Link to="/transparency" className="text-white hover:text-emerald-100 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Transparency
          </Link>
          <Link to="/register" className="flex items-center gap-2 bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors">
            <LogIn className="w-4 h-4" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}