import React from 'react';
import { FileText, Download, Filter } from 'lucide-react';

const reports = [
  {
    title: 'Q1 2024 Emissions Report',
    type: 'Quarterly Report',
    date: 'Mar 31, 2024',
    size: '2.5 MB',
  },
  {
    title: 'Annual Sustainability Review',
    type: 'Annual Report',
    date: 'Dec 31, 2023',
    size: '4.8 MB',
  },
];

export default function ComplianceReports() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Compliance Reports</h2>
          <p className="text-sm text-gray-600">Download and export reports</p>
        </div>
        <FileText className="w-5 h-5 text-emerald-600" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search reports..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Filter className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium mb-1">{report.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{report.type}</span>
                  <span>•</span>
                  <span>{report.date}</span>
                  <span>•</span>
                  <span>{report.size}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-emerald-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
        <FileText className="w-4 h-4" />
        Generate New Report
      </button>
    </div>
  );
}