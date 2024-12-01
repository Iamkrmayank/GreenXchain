import React, { useState } from 'react';
import SupplierInput from '../components/supply-chain/SupplierInput';
import EmissionDashboard from '../components/supply-chain/EmissionDashboard';
import IncentiveModule from '../components/supply-chain/IncentiveModule';
import ComplianceReports from '../components/supply-chain/ComplianceReports';
import SupplyChainStats from '../components/supply-chain/SupplyChainStats';

export default function SupplyChain() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Supply Chain Emissions</h1>
          <p className="text-gray-600">
            Monitor and optimize your supply chain's environmental impact
          </p>
        </div>

        <SupplyChainStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <EmissionDashboard
              period={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
            <SupplierInput />
          </div>
          
          <div className="space-y-8">
            <IncentiveModule />
            <ComplianceReports />
          </div>
        </div>
      </div>
    </div>
  );
}