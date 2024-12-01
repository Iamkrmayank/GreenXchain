import React, { useState } from 'react';
import UserTypeSelection from '../components/auth/UserTypeSelection';

export default function Register() {
  const [userType, setUserType] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Join GreenXchain</h1>
          <p className="text-gray-600">
            Choose your account type to get started with your sustainability journey
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-6">Select Account Type</h2>
              <UserTypeSelection
                selectedType={userType}
                onSelect={(type) => {
                  setUserType(type);
                  setStep(2);
                }}
              />
            </>
          )}

          {step === 2 && (
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-6">Create Your Account</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}