import React from 'react';
import { TreePine, Wind, Waves, Users, Timer, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: TreePine,
    name: 'Amazon Rainforest Initiative',
    description: 'Large-scale reforestation project in the Amazon rainforest',
    fundingGoal: 500000,
    currentFunding: 325000,
    supporters: 1240,
    timeLeft: '15 days',
    impact: '50,000 trees',
    image: 'https://res.cloudinary.com/dvgoquoqv/image/upload/v1732015906/Screenshot_2024-11-19_170023_kdtxxh.png',
  },
  {
    id: 2,
    icon: Wind,
    name: 'Community Solar Grid',
    description: 'Solar power infrastructure for rural communities',
    fundingGoal: 300000,
    currentFunding: 180000,
    supporters: 890,
    timeLeft: '8 days',
    impact: '500 households',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    icon: Waves,
    name: 'Ocean Cleanup System',
    description: 'Innovative system for removing ocean plastic waste',
    fundingGoal: 250000,
    currentFunding: 120000,
    supporters: 670,
    timeLeft: '21 days',
    impact: '100 tons plastic',
    image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=800&q=80',
  },
];

interface ProjectListProps {
  status: string;
}

export default function ProjectList({ status }: ProjectListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project) => {
        const Icon = project.icon;
        const progress = (project.currentFunding / project.fundingGoal) * 100;

        return (
          <div
            key={project.id}
            className="border border-gray-100 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
          >
            <div className="h-48 relative">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          ${project.currentFunding.toLocaleString()} raised
                        </span>
                        <span className="font-medium">
                          ${project.fundingGoal.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-2 bg-emerald-500 rounded-full"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span>{project.supporters} supporters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-gray-600" />
                        <span>{project.timeLeft} left</span>
                      </div>
                      <div className="text-emerald-600 font-medium">
                        Impact: {project.impact}
                      </div>
                    </div>

                    <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                      Fund Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}