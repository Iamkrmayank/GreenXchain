import React, { useState } from 'react';
import ProjectList from '../components/dao/ProjectList';
import FundingStats from '../components/dao/FundingStats';
import VotingModule from '../components/dao/VotingModule';
import ImpactMetrics from '../components/dao/ImpactMetrics';

export default function GreenDAO() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Green Project DAO</h1>
          <p className="text-gray-600">
            Community-driven funding for environmental initiatives
          </p>
        </div>

        <FundingStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-4 mb-6">
                {['active', 'completed', 'upcoming'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium capitalize ${
                      activeTab === tab
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab} Projects
                  </button>
                ))}
              </div>
              <ProjectList status={activeTab} />
            </div>
          </div>

          <div className="space-y-8">
            <VotingModule />
            <ImpactMetrics />
          </div>
        </div>
      </div>
    </div>
  );
}