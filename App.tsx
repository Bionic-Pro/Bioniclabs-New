import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VibeCardShowcase } from './components/VibeCardShowcase';
import { GenericProductSection } from './components/GenericProductSection';
import { FutureLabs } from './components/FutureLabs';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { TradingIndicators } from './components/TradingIndicators';
import { TRADING_PRODUCT, RIDE_OR_DIE_PRODUCT, ANAF_TRACKER_PRODUCT } from './constants';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
}

function Home() {
  return (
    <main className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <GenericProductSection product={TRADING_PRODUCT} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <TradingIndicators />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <GenericProductSection product={RIDE_OR_DIE_PRODUCT} reverse={true} />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <VibeCardShowcase />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <GenericProductSection product={ANAF_TRACKER_PRODUCT} />
      </motion.div>
    </main>
  );
}

function Incubation() {
  return (
    <main className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <FutureLabs />
      </motion.div>
    </main>
  );
}

function App() {
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

  return (
    <div className="bg-bionic-900 text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<Incubation />} />
      </Routes>
      
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