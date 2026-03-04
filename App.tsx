import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VibeCardShowcase } from './components/VibeCardShowcase';
import { GenericProductSection } from './components/GenericProductSection';
import { FutureLabs } from './components/FutureLabs';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { TRADING_PRODUCT, RIDE_OR_DIE_PRODUCT } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'cookies' | null }>({
    isOpen: false,
    type: null
  });

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ ...legalModal, isOpen: false });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-bionic-900 text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        
        {/* 1. BionicAI Trading (Generic) - Default Order (Visual Left) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <GenericProductSection product={TRADING_PRODUCT} />
        </motion.div>
        
        {/* 2. Ride Or Die (Generic) - Reverse Order (Visual Right) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <GenericProductSection product={RIDE_OR_DIE_PRODUCT} reverse={true} />
        </motion.div>
        
        {/* 3. VibeCard Section (Custom) - Modified to Visual Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <VibeCardShowcase />
        </motion.div>
        
        {/* 4. Future Labs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <FutureLabs />
        </motion.div>
      </main>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
      >
        <Footer onOpenLegal={handleOpenLegal} />
      </motion.div>

      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={handleCloseLegal} 
      />
      
      <CookieConsent />
    </div>
  );
}

export default App;