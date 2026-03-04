import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50"
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-yellow-400 shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Cookie Policy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex gap-3 relative z-10">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-lg text-sm transition-colors border border-white/5"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-white text-black font-bold rounded-lg text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
              >
                Accept
              </button>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
