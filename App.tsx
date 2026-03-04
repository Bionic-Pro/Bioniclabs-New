import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VibeCardShowcase } from './components/VibeCardShowcase';
import { GenericProductSection } from './components/GenericProductSection';
import { FutureLabs } from './components/FutureLabs';
import { Footer } from './components/Footer';
import { TRADING_PRODUCT, RIDE_OR_DIE_PRODUCT } from './constants';

function App() {
  return (
    <div className="bg-bionic-900 text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        {/* 1. BionicAI Trading (Generic) - Default Order (Visual Left) */}
        <GenericProductSection product={TRADING_PRODUCT} />
        
        {/* 2. Ride Or Die (Generic) - Reverse Order (Visual Right) */}
        <GenericProductSection product={RIDE_OR_DIE_PRODUCT} reverse={true} />
        
        {/* 3. VibeCard Section (Custom) - Modified to Visual Left */}
        <VibeCardShowcase />
        
        {/* 4. Future Labs */}
        <FutureLabs />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;