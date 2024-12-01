import React from 'react';
import { FileText, Download, Database, Share2 } from 'lucide-react';

const datasets = [
  {
    title: 'Emissions Data 2024',
    format: 'CSV',
    size: '2.8 MB',
    updated: 'Today',
  },
  {
    title: 'Project Metrics Q1',
    format: 'JSON',
    size: '1.5 MB',
    updated: 'Yesterday',
  },
  {
    title: 'Impact Analysis',
    format: 'PDF',
    size: '4.2 MB',
    updated: '2 days ago',
  },
];

export default function OpenDataAccess() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Open Data</h2>
          <p className="text-sm text-gray-600">Access and download public data</p>
        </div>
        <Database className="w-5 h-5 text-emerald-600" />
      </div>

      <div className="space-y-4">
        {datasets.map((dataset) => (
          <div
            key={dataset.title}
            className="p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium mb-1">{dataset.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{dataset.format}</span>
                  <span>•</span>
                  <span>{dataset.size}</span>
                  <span>•</span>
                  <span>Updated {dataset.updated}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-emerald-600" />
                </button>
                <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-emerald-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
        <FileText className="w-4 h-4" />
        Request Custom Dataset
      </button>
    </div>
  );
}