import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 px-4 py-3">
      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
        <Leaf className="w-5 h-5 text-emerald-600" />
      </div>
      <span className="text-xl font-bold text-gray-900">GreenXchain</span>
    </Link>
  );
}