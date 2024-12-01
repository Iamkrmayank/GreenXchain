import React from 'react';
import { Plus, Upload, Building2 } from 'lucide-react';

export default function SupplierInput() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Supplier Data Input</h2>
          <p className="text-sm text-gray-600">Add or update supplier emissions data</p>
        </div>
        <Building2 className="w-5 h-5 text-emerald-600" />
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supplier Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter supplier name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supply Chain Stage
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option>Raw Materials</option>
              <option>Manufacturing</option>
              <option>Distribution</option>
              <option>Retail</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emission Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option>Transportation</option>
              <option>Production</option>
              <option>Storage</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emission Amount (CO₂e)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Entry
          </button>
          <button
            type="button"
            className="flex-1 bg-emerald-100 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Import Data
          </button>
        </div>
      </form>
    </div>
  );
}