import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, LogIn } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-emerald-800 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 text-white hover:bg-emerald-700 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="text-white font-bold text-2xl">
            GreenXchain
          </Link>
        </div>

        <Link
          to="/register"
          className="flex items-center gap-2 bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Link>
      </div>
    </header>
  );
}