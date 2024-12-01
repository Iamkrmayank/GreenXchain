import React from 'react';
import Logo from './navigation/Logo';
import NavigationList from './navigation/NavigationList';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 border-b border-gray-200 flex items-center">
          <Logo />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <NavigationList />
        </div>
      </div>
    </aside>
  );
}