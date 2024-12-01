import React from 'react';
import { TreePine, Wind, Waves, ArrowUpRight, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: TreePine,
    name: 'Urban Reforestation Initiative',
    organization: 'City Environmental Department',
    status: 'In Progress',
    progress: 75,
    impact: '12,000 trees planted',
    timeline: 'Q2 2024',
  },
  {
    id: 2,
    icon: Wind,
    name: 'Community Solar Program',
    organization: 'Regional Energy Authority',
    status: 'Completed',
    progress: 100,
    impact: '500 homes powered',
    timeline: 'Q1 2024',
  },
  {
    id: 3,
    icon: Waves,
    name: 'Waterway Cleanup Project',
    organization: 'Environmental NGO Alliance',
    status: 'In Progress',
    progress: 45,
    impact: '3 tons waste removed',
    timeline: 'Q3 2024',
  },
];

interface ProjectTrackerProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProjectTracker({ filter, onFilterChange }: ProjectTrackerProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Project Tracker</h2>
          <p className="text-sm text-gray-600">Monitor ongoing and completed initiatives</p>
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => onFilterChange(status)}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                filter === status
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                      <p className="text-gray-600">{project.organization}</p>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-2 bg-emerald-500 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span>{project.timeline}</span>
                      </div>
                      <span className="text-emerald-600 font-medium">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}