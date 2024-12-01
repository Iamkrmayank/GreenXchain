import React, { useState } from 'react';
import { Shield, Gift, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';

interface RedeemModalProps {
  isOpen: boolean;
  onClose: () => void;
  reward: {
    title: string;
    points: number;
    description: string;
  };
}

export default function RedeemModal({ isOpen, onClose, reward }: RedeemModalProps) {
  const [step, setStep] = useState<'confirm' | 'success'>('confirm');

  const handleRedeem = () => {
    // Here you would typically make an API call to process the redemption
    setStep('success');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {step === 'confirm' ? (
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Redeem Reward</h3>
              <p className="text-sm text-gray-600">Confirm your redemption</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-medium mb-1">{reward.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
              <div className="flex items-center gap-1 text-emerald-600">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{reward.points} points required</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              By redeeming this reward, {reward.points} points will be deducted from your balance.
              This action cannot be undone.
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleRedeem}
              className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Confirm Redemption
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-emerald-600" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Redemption Successful!</h3>
          <p className="text-gray-600 mb-6">
            Your reward has been successfully redeemed. Check your email for further instructions.
          </p>
          
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          >
            View My Rewards
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </Modal>
  );
}