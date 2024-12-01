import React, { useState } from 'react';
import RealTimeData from '../components/transparency/RealTimeData';
import ProjectTracker from '../components/transparency/ProjectTracker';
import ImpactStatements from '../components/transparency/ImpactStatements';
import OpenDataAccess from '../components/transparency/OpenDataAccess';
import TransparencyStats from '../components/transparency/TransparencyStats';

export default function Transparency() {
  const [timeRange, setTimeRange] = useState('month');
  const [projectFilter, setProjectFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Transparency Dashboard</h1>
          <p className="text-gray-600">
            Real-time emissions data and project tracking for public stakeholders
          </p>
        </div>

        <TransparencyStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <RealTimeData timeRange={timeRange} onTimeRangeChange={setTimeRange} />
            <ProjectTracker filter={projectFilter} onFilterChange={setProjectFilter} />
          </div>
          
          <div className="space-y-8">
            <ImpactStatements />
            <OpenDataAccess />
          </div>
        </div>
      </div>
    </div>
  );
}