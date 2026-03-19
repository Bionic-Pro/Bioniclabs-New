import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Lock, ExternalLink, Shield, Zap, Brain, Globe, FileText, Utensils, MapPin, Baby, ChefHat, Users, Target, Activity, Cpu, Wind } from 'lucide-react';

export const FutureLabs: React.FC = () => {
  return (
    <section id="future" className="py-32 relative bg-black group">
      
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
          
          <div className="max-w-6xl mx-auto">
             {/* Featured Project: ClarityLawAI */}
             <div id="clarity" className="glass-panel rounded-3xl border border-white/10 overflow-hidden mb-12 relative group/featured hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 opacity-50"></div>
                
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                   {/* Content Side */}
                   <div className="text-left flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full uppercase tracking-wider">
                            Launching Soon
                         </span>
                         <span className="px-3 py-1 text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <Brain size={12} /> AI Powered
                         </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">ClarityLaw AI</h3>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                         The "Universal Translator" for Law. Bridge the gap between dense legal jargon and plain English using advanced, model-agnostic AI.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-green-500/10 text-green-400 mt-1">
                               <Globe size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Traffic Light System</h4>
                               <p className="text-xs text-gray-500 mt-1">Kid, Teen, and Adult complexity levels.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 mt-1">
                               <Zap size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Case Audit Pro</h4>
                               <p className="text-xs text-gray-500 mt-1">Win probability & risk analysis.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                               <Brain size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Multi-Provider AI</h4>
                               <p className="text-xs text-gray-500 mt-1">BYO Key: GPT-4, Claude 3, Gemini.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                               <Shield size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Privacy First</h4>
                               <p className="text-xs text-gray-500 mt-1">Local history & client-side processing.</p>
                            </div>
                         </div>
                      </div>
                      
                      <button 
                         disabled
                         className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg transition-all w-fit border border-white/5 cursor-not-allowed opacity-75"
                      >
                         Prototype Locked <Lock size={18} />
                      </button>
                   </div>
                   
                   {/* Visual Side - App Mockup */}
                   <div className="relative flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-[4/3] bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col">
                         {/* Mockup Header */}
                         <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                               <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                               <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                               <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="ml-4 px-3 py-1 bg-gray-900 rounded text-[10px] text-gray-500 flex-1 text-center font-mono">
                               clarity-law-ai.vercel.app
                            </div>
                         </div>
                         
                         {/* Mockup Body */}
                         <div className="flex-1 p-6 relative">
                            <div className="flex items-center justify-between mb-6">
                               <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">CL</div>
                                  <span className="text-white font-bold">ClarityLaw AI</span>
                               </div>
                               <div className="flex gap-2">
                                  <div className="w-20 h-8 bg-gray-800 rounded animate-pulse"></div>
                               </div>
                            </div>
                            
                            <div className="space-y-4">
                               <div className="h-24 bg-gray-800/50 rounded-lg border border-gray-700/50 p-3">
                                  <div className="w-1/3 h-3 bg-gray-700 rounded mb-2"></div>
                                  <div className="w-3/4 h-3 bg-gray-700/50 rounded"></div>
                               </div>
                               
                               <div className="flex gap-3">
                                  <div className="flex-1 p-3 rounded-lg border border-green-500/20 bg-green-500/5 flex flex-col items-center gap-2">
                                     <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">👶</div>
                                     <div className="h-1 w-12 bg-green-500/20 rounded"></div>
                                  </div>
                                  <div className="flex-1 p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex flex-col items-center gap-2">
                                     <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs">🧑</div>
                                     <div className="h-1 w-12 bg-yellow-500/20 rounded"></div>
                                  </div>
                                  <div className="flex-1 p-3 rounded-lg border border-red-500/20 bg-red-500/5 flex flex-col items-center gap-2">
                                     <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs">⚖️</div>
                                     <div className="h-1 w-12 bg-red-500/20 rounded"></div>
                                  </div>
                               </div>
                               
                               <div className="h-32 bg-gray-800 rounded-lg border border-gray-700 p-4 relative overflow-hidden">
                                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                  <div className="space-y-2 mt-2">
                                     <div className="w-full h-2 bg-gray-700 rounded"></div>
                                     <div className="w-5/6 h-2 bg-gray-700 rounded"></div>
                                     <div className="w-4/6 h-2 bg-gray-700 rounded"></div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                            <FileText size={20} />
                         </div>
                         <div className="text-left">
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Case Audit</p>
                            <p className="text-xs text-white font-bold">Win Probability: 85%</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Featured Project: Bucătărașul Sătmărean */}
             <div id="bucatarasul" className="glass-panel rounded-3xl border border-white/10 overflow-hidden mb-12 relative group/featured hover:border-yellow-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/10 opacity-50"></div>
                
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                   {/* Visual Side - App Mockup (Left for variety) */}
                   <div className="relative flex items-center justify-center order-2 lg:order-1">
                      <div className="relative w-full max-w-md aspect-[4/3] bg-[#0a0a0f] rounded-xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                         {/* Mockup Header */}
                         <div className="h-14 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0f0f16]">
                            <div className="flex flex-col">
                               <span className="text-[10px] text-blue-400 font-bold tracking-wider uppercase">Satu Mare, România</span>
                               <span className="text-white font-bold text-sm">Bucătărașul</span>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold">
                               Sign In
                            </div>
                         </div>
                         
                         {/* Mockup Body */}
                         <div className="flex-1 p-6 flex flex-col gap-3 justify-center relative">
                            {/* Step 1: Blue */}
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">1</div>
                               <div className="flex-1">
                                  <div className="text-xs text-blue-200 font-bold">Ingrediente Locale</div>
                                  <div className="text-[10px] text-gray-400">Selectează ce ai în frigider</div>
                               </div>
                               <div className="w-6 h-6 rounded-full border border-blue-500/30 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                               </div>
                            </div>

                            {/* Step 2: Yellow */}
                            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold text-xs">2</div>
                               <div className="flex-1">
                                  <div className="text-xs text-yellow-200 font-bold">Modul de Gătire</div>
                                  <div className="text-[10px] text-gray-400">Cuptor, Aragaz, Rapid</div>
                               </div>
                               <div className="w-6 h-6 rounded-full border border-yellow-500/30 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                               </div>
                            </div>

                            {/* Step 3: Red */}
                            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">3</div>
                               <div className="flex-1">
                                  <div className="text-xs text-red-200 font-bold">Preferințe & Copii</div>
                                  <div className="text-[10px] text-gray-400">Hide Veggies, Alergeni</div>
                               </div>
                               <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                               </div>
                            </div>

                            {/* Generate Button */}
                            <div className="mt-2 h-10 w-full bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold uppercase tracking-wider">
                               Generează Rețeta
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Content Side */}
                   <div className="text-left flex flex-col justify-center order-1 lg:order-2">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="px-3 py-1 text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full uppercase tracking-wider">
                            Family First
                         </span>
                         <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <Utensils size={12} /> AI Chef
                         </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Bucătărașul Sătmărean</h3>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                         "The Little Chef from Satu Mare." An AI-powered recipe generator tailored for families, focusing on quick meals using local Romanian ingredients.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                               <MapPin size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Local Ingredients</h4>
                               <p className="text-xs text-gray-500 mt-1">Optimized for Satu Mare region.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 mt-1">
                               <Baby size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Hide Veggies Mode</h4>
                               <p className="text-xs text-gray-500 mt-1">Sneak nutrition into kids' meals.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                               <ChefHat size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Smart Chef AI</h4>
                               <p className="text-xs text-gray-500 mt-1">Powered by Google Gemini.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                               <Users size={16} />
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm">Family Accounts</h4>
                               <p className="text-xs text-gray-500 mt-1">Save recipes & sync preferences.</p>
                            </div>
                         </div>
                      </div>
                      
                      <button 
                         disabled
                         className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg transition-all w-fit border border-white/5 cursor-not-allowed opacity-75"
                      >
                         Access Locked <Lock size={18} />
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Featured Project: MOMENTUM ENGINE */}
             <div id="momentum" className="glass-panel rounded-3xl border border-white/10 overflow-hidden mb-12 relative group/featured hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-amber-900/10 opacity-50"></div>
                
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                   {/* Content Side */}
                   <div className="text-left flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full uppercase tracking-wider">
                            Launching Soon
                         </span>
                         <span className="px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <Shield size={12} /> Military Grade
                         </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">MOMENTUM ENGINE</h3>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                         A high-performance, sci-fi themed productivity execution layer. Treat your daily life like a high-stakes mission with AI-powered logistics.
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
                      
                      <button 
                         disabled
                         className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg transition-all w-fit border border-white/5 cursor-not-allowed opacity-75"
                      >
                         System Locked <Lock size={18} />
                      </button>
                   </div>
                   
                   {/* Visual Side - App Mockup */}
                   <div className="relative flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-[4/3] bg-[#050505] rounded-xl border border-emerald-900/50 shadow-2xl overflow-hidden flex flex-col">
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
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};