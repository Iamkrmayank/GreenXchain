import React from 'react';
import { Building2, User2, Heart } from 'lucide-react';

const userTypes = [
  {
    id: 'individual',
    icon: User2,
    title: 'Individual',
    description: 'Track your personal carbon footprint and offset your impact',
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate',
    description: 'Manage your organization\'s emissions and sustainability goals',
  },
  {
    id: 'ngo',
    icon: Heart,
    title: 'NGO',
    description: 'Partner with us to drive environmental change',
  },
];

interface UserTypeSelectionProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

export default function UserTypeSelection({ selectedType, onSelect }: UserTypeSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {userTypes.map(({ id, icon: Icon, title, description }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`p-6 rounded-xl border-2 text-left transition-all ${
            selectedType === id
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-emerald-200'
          }`}
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </button>
      ))}
    </div>
  );
}