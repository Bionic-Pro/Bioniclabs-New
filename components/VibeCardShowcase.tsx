import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Smartphone, ArrowRight, Share2, Phone, Mail, Download } from 'lucide-react';
import { trackConversion } from '../utils/analytics';

export const VibeCardShowcase: React.FC = () => {
  const [version, setVersion] = useState<'v1' | 'v2'>('v1');

  return (
    <section id="vibecard" className="py-24 relative group overflow-hidden">
      
      {/* Roadmap Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0">
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </div>

       {/* Roadmap Node */}
       <div className="absolute left-6 md:left-1/2 top-1/2 w-4 h-4 rounded-full border border-white/20 bg-bionic-900 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,1)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Left) - Modified Order for ZigZag */}
          <div className="order-1 relative flex justify-center">
            {/* Background Blob */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/30 rounded-full blur-[80px] transition-all duration-700 ${version === 'v2' ? 'bg-pink-600/30' : ''}`} />

            {/* Phone/Card Mockup */}
            <motion.div
              key={version}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="relative w-72 h-[500px] glass-panel rounded-[2rem] border-4 border-gray-800 p-2 shadow-2xl flex flex-col overflow-hidden bg-black"
              style={{ perspective: 1000 }}
            >
              {/* Screen Content */}
              <div className="w-full h-full bg-gray-900 rounded-[1.5rem] overflow-hidden relative flex flex-col">
                
                {/* Header / Cover */}
                <div className="relative h-32 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600">
                   <div className="absolute top-4 right-4 text-white/50">
                     <Share2 size={16} />
                   </div>
                </div>

                {/* Profile Section - Overlapping Header */}
                <div className="relative px-4 -mt-10 flex flex-col items-center z-10">
                   <div className="w-20 h-20 rounded-full border-4 border-gray-900 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center shadow-lg mb-2" />
                   
                   <div className="text-center">
                      <h3 className="text-white font-bold text-lg">Alex Sterling</h3>
                      <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">Digital Architect</p>
                      <p className="text-gray-500 text-[10px] mt-1">Building the future @ Bionic.labs</p>
                   </div>
                </div>

                {/* V1 Specific Content: Actions & QR */}
                {version === 'v1' && (
                  <div className="px-4 mt-6 flex-1 flex flex-col items-center">
                     {/* Action Buttons */}
                     <div className="flex justify-center gap-4 mb-6 w-full">
                        <div className="flex flex-col items-center gap-1">
                           <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500">
                              <Phone size={16} />
                           </div>
                           <span className="text-[9px] text-gray-500">Call</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                           <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500">
                              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
                           </div>
                           <span className="text-[9px] text-gray-500">WhatsApp</span>
                        </div>
                         <div className="flex flex-col items-center gap-1">
                           <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
                              <Mail size={16} />
                           </div>
                           <span className="text-[9px] text-gray-500">Email</span>
                        </div>
                     </div>

                     {/* QR Code Card */}
                     <div className="bg-white p-3 rounded-xl shadow-lg w-32 h-32 flex items-center justify-center mb-4">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vibecard.digital" 
                          alt="QR Code" 
                          className="w-full h-full opacity-90"
                        />
                     </div>
                     
                     <div className="w-full mt-auto mb-6">
                        <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                           <Download size={12} /> Save Contact
                        </button>
                     </div>
                  </div>
                )}

                {/* V2 Specific Content: Analytics Preview */}
                {version === 'v2' && (
                   <div className="px-4 mt-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-2 gap-2 mb-4">
                         <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-[9px] text-gray-400">Profile Views</p>
                            <p className="text-lg font-bold text-white">1,240</p>
                         </div>
                         <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-[9px] text-gray-400">Link Clicks</p>
                            <p className="text-lg font-bold text-green-400">856</p>
                         </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex-1 mb-6 relative overflow-hidden">
                         <p className="text-[9px] text-gray-400 mb-2">Engagement</p>
                         <div className="flex items-end gap-1 h-20 px-2 justify-between">
                            {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                               <div key={i} style={{height: `${h}%`}} className="w-full bg-purple-500/40 rounded-t-sm" />
                            ))}
                         </div>
                         <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            <p className="text-xs font-bold text-white flex items-center gap-1">
                               <Zap size={12} className="text-yellow-400 fill-current"/> PRO FEATURE
                            </p>
                         </div>
                      </div>
                   </div>
                )}
                
              </div>
            </motion.div>
          </div>

          {/* Content Side (Right) - Modified Order for ZigZag */}
          <div className="order-2">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                 <Share2 size={24} />
               </div>
               <h2 className="text-3xl md:text-5xl font-display font-bold text-white">VibeCard</h2>
            </div>
            
            <p className="text-xl font-medium mb-4 text-purple-400 font-display tracking-wide">
              Tap. Share. Connect.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The ultimate digital business card featuring gorgeous glass-morphism. 
              Share your world instantly via QR, direct sharing or save the .csv directly to your phone. <span className="text-purple-300 font-bold">Try it free 1 card / name</span>
            </p>

            {/* Version Toggle */}
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl w-fit mb-8 backdrop-blur-md">
              <button 
                onClick={() => setVersion('v1')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${version === 'v1' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                V1 Live
              </button>
              <button 
                onClick={() => setVersion('v2')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${version === 'v2' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                V2 Coming Soon <Zap size={14} className="fill-current" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {version === 'v1' ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['QR & CSV Sharing', '12 Glass Templates', 'Real-time Updates', 'Basic Analytics'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Check size={12} className="text-purple-400" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-purple-300 font-bold tracking-wider uppercase mb-1">Early Adopter Offer</p>
                          <p className="text-2xl font-bold text-white">$20 <span className="text-sm font-normal text-gray-400 line-through">$39</span> <span className="text-sm font-normal text-gray-400">Lifetime</span></p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Includes free</p>
                          <p className="text-xs text-white font-bold">V2 Upgrade</p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="https://vibecard.digital" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => trackConversion(20.0, 'USD')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-purple-900/20 w-full sm:w-auto justify-center hover:-translate-y-1"
                    >
                      Get Your Card Now <ArrowRight size={18} />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-6 relative overflow-hidden">
                     {/* V2 Features */}
                     <div className="grid grid-cols-1 gap-3">
                      {[
                        '25+ Integrations (TikTok, PayPal, etc.)', 
                        'Pro Analytics & Geo-Data', 
                        'Visual Drag-and-Drop Builder', 
                        'Multiple Personas (Work/Client/Personal)'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400 font-bold">Pro Tip:</span> Buy V1 now to lock in lifetime access before V2 pricing increases.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};