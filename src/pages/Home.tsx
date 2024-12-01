import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeatureSection from '../components/FeatureSection';
import ImpactTracker from '../components/ImpactTracker';

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <FeatureSection />
      <ImpactTracker />
    </main>
  );
}