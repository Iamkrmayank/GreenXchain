import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  BarChart3,
  ShoppingBag,
  Award,
  Vote,
  Gift,
  Building2,
  Globe,
  User
} from 'lucide-react';
import NavigationItem from './NavigationItem';

const navigation = [
  { name: 'Track Emissions', href: '/emissions', icon: BarChart3 },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'NFT Certificates', href: '/nft-certificates', icon: Award },
  { name: 'DAO', href: '/dao', icon: Vote },
  { name: 'Rewards', href: '/rewards', icon: Gift },
  { name: 'Supply Chain', href: '/supply-chain', icon: Building2 },
  { name: 'Transparency', href: '/transparency', icon: Globe },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function NavigationList() {
  const location = useLocation();

  return (
    <nav className="space-y-1">
      {navigation.map((item) => (
        <NavigationItem
          key={item.name}
          href={item.href}
          icon={item.icon}
          label={item.name}
          isActive={location.pathname === item.href}
        />
      ))}
    </nav>
  );
}