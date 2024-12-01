import React, { useState } from 'react';
import { Trophy, Users, Building2 } from 'lucide-react';

const users = [
  {
    rank: 1,
    name: 'Sarah Johnson',
    points: 2500,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces',
    change: 'up',
  },
  {
    rank: 2,
    name: 'Michael Chen',
    points: 2350,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces',
    change: 'same',
  },
  {
    rank: 3,
    name: 'Emma Davis',
    points: 2200,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=faces',
    change: 'up',
  },
];

const companies = [
  {
    rank: 1,
    name: 'Green Tech Inc',
    points: 25000,
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop',
    change: 'up',
  },
  {
    rank: 2,
    name: 'EcoSolutions Ltd',
    points: 22000,
    logo: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=50&h=50&fit=crop',
    change: 'same',
  },
];

export default function Leaderboard() {
  const [view, setView] = useState<'individual' | 'corporate'>('individual');

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Leaderboard</h2>
          <Trophy className="w-5 h-5 text-emerald-600" />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView('individual')}
            className={`flex-1 py-2 rounded-lg font-medium ${
              view === 'individual'
                ? 'bg-emerald-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-4 h-4 mx-auto mb-1" />
            Individual
          </button>
          <button
            onClick={() => setView('corporate')}
            className={`flex-1 py-2 rounded-lg font-medium ${
              view === 'corporate'
                ? 'bg-emerald-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Building2 className="w-4 h-4 mx-auto mb-1" />
            Corporate
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {(view === 'individual' ? users : companies).map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-medium text-emerald-600">
                {entry.rank}
              </div>
              <img
                src={view === 'individual' ? entry.avatar : entry.logo}
                alt={entry.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-medium">{entry.name}</div>
                <div className="text-sm text-gray-600">
                  {entry.points.toLocaleString()} points
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-2 text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-colors">
          View Full Rankings
        </button>
      </div>
    </div>
  );
}