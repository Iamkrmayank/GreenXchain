import React from 'react';
import { Vote, ChevronRight } from 'lucide-react';

const activeVotes = [
  {
    id: 1,
    title: 'Increase Funding for Solar Projects',
    description: 'Proposal to allocate 40% of DAO funds to solar initiatives',
    votesFor: 2345,
    votesAgainst: 890,
    timeLeft: '2 days',
  },
  {
    id: 2,
    title: 'New Project Evaluation Criteria',
    description: 'Update project selection metrics to prioritize immediate impact',
    votesFor: 1890,
    votesAgainst: 1200,
    timeLeft: '5 days',
  },
];

export default function VotingModule() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Active Votes</h2>
        <Vote className="w-5 h-5 text-emerald-600" />
      </div>

      <div className="space-y-4">
        {activeVotes.map((vote) => {
          const totalVotes = vote.votesFor + vote.votesAgainst;
          const forPercentage = (vote.votesFor / totalVotes) * 100;

          return (
            <div
              key={vote.id}
              className="p-4 border border-gray-100 rounded-lg hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium mb-1">{vote.title}</h3>
                  <p className="text-sm text-gray-600">{vote.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{ width: `${forPercentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-medium">{vote.votesFor}</span>
                    <span className="text-gray-600"> for</span>
                  </div>
                  <div>
                    <span className="font-medium">{vote.votesAgainst}</span>
                    <span className="text-gray-600"> against</span>
                  </div>
                  <div className="text-emerald-600">{vote.timeLeft} left</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-colors">
        View All Proposals
      </button>
    </div>
  );
}