import React from 'react';
import { Settings, Bell, Shield, CreditCard } from 'lucide-react';

const settingsSections = [
  {
    icon: Settings,
    title: 'Account Settings',
    description: 'Manage your account details and preferences',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure your notification preferences',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Update your security settings and password',
  },
  {
    icon: CreditCard,
    title: 'Payment Methods',
    description: 'Manage your payment options and transactions',
  },
];

export default function ProfileSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {settingsSections.map(({ icon: Icon, title, description }, index) => (
        <div
          key={title}
          className={`p-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors ${
            index !== settingsSections.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}