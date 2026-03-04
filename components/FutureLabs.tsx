import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Lock } from 'lucide-react';

export const FutureLabs: React.FC = () => {
  return (
    <section id="future" className="py-32 relative bg-black group">
      
      {/* Roadmap End Line */}
      <div className="absolute top-0 left-6 md:left-1/2 w-[2px] h-32 bg-gradient-to-b from-white/5 to-transparent -translate-x-1/2 z-0" />
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 relative z-10 bg-black">
            <FlaskConical className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Bionic Labs</h2>
          <p className="max-w-xl mx-auto text-gray-400 mb-16">
            We are constantly experimenting. The next generation of digital tools is currently in incubation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             {/* Card 1 */}
             <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group/card hover:border-cyan-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[200px]">
                   <Lock className="text-gray-600 mb-4 group-hover/card:text-cyan-400 transition-colors" size={32} />
                   <h3 className="text-xl font-bold text-gray-500 group-hover/card:text-white transition-colors">Project: Nexus</h3>
                   <p className="text-sm text-gray-600 mt-2">Classified</p>
                </div>
             </div>
             
             {/* Card 2 */}
             <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group/card hover:border-purple-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[200px]">
                   <Lock className="text-gray-600 mb-4 group-hover/card:text-purple-400 transition-colors" size={32} />
                   <h3 className="text-xl font-bold text-gray-500 group-hover/card:text-white transition-colors">Project: Echo</h3>
                   <p className="text-sm text-gray-600 mt-2">Classified</p>
                </div>
             </div>
             
             {/* Card 3 */}
             <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group/card hover:border-green-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[200px]">
                   <Lock className="text-gray-600 mb-4 group-hover/card:text-green-400 transition-colors" size={32} />
                   <h3 className="text-xl font-bold text-gray-500 group-hover/card:text-white transition-colors">Project: Flux</h3>
                   <p className="text-sm text-gray-600 mt-2">Classified</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};