import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Roadmap Start Line */}
      <div className="absolute bottom-0 left-6 md:left-1/2 w-[2px] h-32 bg-gradient-to-t from-white/10 to-transparent -translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-cyan-400 border border-cyan-900/50 rounded-full bg-cyan-950/30 uppercase">
            Digital Innovation Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-6">
            <span className="text-white">Bionic</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">.labs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
            A portfolio of cutting-edge digital tools designed for the bold. 
            From glass-morphic networking to high-frequency trading and rebellious AI entertainment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#bionicai" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105">
              Explore Apps
            </a>
            <a href="#future" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-md">
              Future Labs
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};