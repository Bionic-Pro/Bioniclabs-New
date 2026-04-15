import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Target, Wind, ExternalLink } from 'lucide-react';
import { trackConversion } from '../utils/analytics';

export const MomentumEngineShowcase: React.FC = () => {
  return (
    <section id="momentum" className="py-24 relative group overflow-hidden">
      {/* Roadmap Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0">
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
      </div>

      {/* Roadmap Node */}
      <div className="absolute left-6 md:left-1/2 top-1/2 w-4 h-4 rounded-full border border-white/20 bg-bionic-900 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,1)]" />

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-emerald-500/20 blur-[120px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-left flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Shield size={12} /> Military Grade
              </span>
              <span className="px-3 py-1 text-xs font-bold bg-white text-black rounded-full uppercase tracking-wider">
                LIVE
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">MOMENTUM ENGINE</h2>
            <p className="text-emerald-400 text-xl font-medium mb-4 font-display tracking-wide">
              High-Performance Execution Layer
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A high-performance, sci-fi themed productivity execution layer. Treat your daily life like a high-stakes mission with AI-powered logistics. Plug in your own API key for a smoother, personalized experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Shield Architecture</h4>
                  <p className="text-xs text-gray-500 mt-1">Family, Ascension, Leisure protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-1">
                  <Cpu size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">AI Deep Scan</h4>
                  <p className="text-xs text-gray-500 mt-1">Turns raw intel into structured tasks.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                  <Target size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Tactical Sequencer</h4>
                  <p className="text-xs text-gray-500 mt-1">Secure persistence & complexity tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                  <Wind size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Stasis Module</h4>
                  <p className="text-xs text-gray-500 mt-1">Box breathing & energy burst tools.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://momentum-engine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion(1.0, 'USD')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20 w-full sm:w-auto justify-center hover:-translate-y-1"
            >
              Launch Engine (Free) <ExternalLink size={18} />
            </a>
          </div>
          
          {/* Visual Side - App Mockup */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md aspect-[4/3] bg-[#050505] rounded-xl border border-emerald-900/50 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Mockup Header */}
              <div className="h-12 border-b border-emerald-900/30 flex items-center justify-between px-4 bg-[#0a0a0a]">
                <div className="text-emerald-500 font-display font-bold tracking-widest text-sm">MOMENTUM<span className="text-white">ENGINE</span></div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 border border-emerald-500/50 text-emerald-500 text-[9px] rounded bg-emerald-900/20">ASCENSION</div>
                  <div className="px-2 py-0.5 border border-gray-700 text-gray-500 text-[9px] rounded">LEISURE</div>
                </div>
              </div>
              
              {/* Mockup Body */}
              <div className="flex-1 p-6 relative flex flex-col gap-4">
                {/* Mission Sequencer */}
                <div className="border border-emerald-900/30 rounded-lg p-3 bg-emerald-900/5">
                  <div className="text-[10px] text-emerald-600 font-bold tracking-widest mb-2">MISSION SEQUENCER</div>
                  <div className="h-8 bg-[#0f0f0f] border border-gray-800 rounded flex items-center px-3 text-gray-500 text-xs">
                    Enter mission objective...
                  </div>
                </div>
                
                {/* Active Tasks */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 border-l-2 border-amber-500 bg-amber-500/5">
                    <div className="w-4 h-4 border border-amber-500/50 rounded-sm"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-300">Deploy Production Build</div>
                      <div className="text-[9px] text-amber-500">HIGH PRIORITY // 45m</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 border-l-2 border-emerald-500 bg-emerald-500/5">
                    <div className="w-4 h-4 border border-emerald-500/50 rounded-sm"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-300">Review Intelligence Report</div>
                      <div className="text-[9px] text-emerald-500">MEDIUM // 15m</div>
                    </div>
                  </div>
                </div>
                
                {/* Biometric Energy */}
                <div className="mt-auto border-t border-gray-800 pt-3">
                  <div className="text-[9px] text-gray-600 font-bold tracking-widest mb-2">BIOMETRIC ENERGY</div>
                  <div className="flex gap-1 h-1">
                    <div className="flex-1 bg-emerald-500 rounded-full"></div>
                    <div className="flex-1 bg-emerald-500 rounded-full"></div>
                    <div className="flex-1 bg-emerald-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-800 rounded-full"></div>
                    <div className="flex-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
