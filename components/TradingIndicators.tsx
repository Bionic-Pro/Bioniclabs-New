import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Activity, ShoppingCart, ArrowRight, RotateCcw, Check } from 'lucide-react';

const INDICATORS = [
  {
    id: 'v4-proven',
    name: 'V4.0 Proven',
    description: 'High-frequency scalping strategy providing maximum entries. Uses exponential EMA filtering and advanced retest logic. Note: Gains are realistic, not astronomic.',
    price: 'Free',
    link: 'https://www.tradingview.com/script/Mcl0Mcd1-V4-0-PROVEN/',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1600&auto=format&fit=crop', // Hand holding phone with crypto
    features: ['Secret Refinement Algo', 'EMA Filter & Retest Logic', 'Custom TP/SL (Rec: 1200/1280)', 'High Frequency Entries'],
    results: {
      totalReturn: '+4.05%',
      profitFactor: '1.009',
      winRate: '51.43%',
      maxDrawdown: '31.89%',
      totalTrades: '245',
      chartImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop' // Simple growth chart
    }
  },
  {
    id: 'v4-proven-enhanced',
    name: 'V4.1 Proven Enhanced',
    stripeProductId: 'prod_U6xawZia0AqzOR',
    description: 'Refined version with better entries, higher win rate, and reduced drawdown. The smart choice for consistent growth.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop', // Person using black and gray laptop computer
    features: ['Enhanced Entry Logic', 'Higher Win Rate (65%)', 'Profit Factor 2.51', 'Low Drawdown'],
    results: {
      totalReturn: '+45.50%',
      profitFactor: '2.51',
      winRate: '65.00%',
      maxDrawdown: '12.76%',
      totalTrades: '60',
      chartImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop' // Simple growth chart
    }
  },
  {
    id: 'v4-proven-turbo',
    name: 'V4.2 Proven Turbo',
    stripeProductId: 'prod_U6ya8Y5jxh2l3P',
    description: 'The ultimate trading engine. Features adaptive exits and turbo-charged entry logic for maximum market extraction.',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop', // Person holding coin in front of computer
    features: ['Adaptive Exits', 'Turbo Entry Logic', 'Highest Return (+84%)', 'Optimized Risk/Reward'],
    results: {
      totalReturn: '+84.19%',
      profitFactor: '2.297',
      winRate: '59.09%',
      maxDrawdown: '24.83%',
      totalTrades: '88',
      chartImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop' // Simple growth chart
    }
  }
];

export const TradingIndicators: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleFlip = (id: string) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const handleBuy = async (productId: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-bionic-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-emerald-900/5 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Activity size={14} />
            <span>BionicAI Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Premium TradingView <span className="text-emerald-400">Indicators</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Professional-grade Pine Script indicators designed to enhance your trading edge. 
            Directly correlated with our BionicAI Trading strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {INDICATORS.map((indicator, index) => (
            <div key={indicator.id} className="relative perspective-1000 h-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                animate={{ rotateY: flippedCard === indicator.id ? 180 : 0 }}
                className="w-full h-full relative preserve-3d transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden w-full h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col">
                  {/* Image Area */}
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img 
                      src={indicator.image} 
                      alt={indicator.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-emerald-400 font-bold text-sm">
                      {indicator.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-emerald-400">
                      <BarChart2 size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">Pine Script</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {indicator.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      {indicator.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {indicator.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3 mt-auto">
                      {indicator.link ? (
                        <a 
                          href={indicator.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-white/5 hover:bg-emerald-600 hover:text-white text-gray-300 font-bold rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>{indicator.price === 'Free' ? 'Get Free' : 'Buy Now'}</span>
                          {indicator.price === 'Free' ? (
                             <ArrowRight size={16} />
                          ) : (
                            <>
                              <ShoppingCart size={16} className="group-hover/btn:hidden" />
                              <ArrowRight size={16} className="hidden group-hover/btn:block" />
                            </>
                          )}
                        </a>
                      ) : (
                        <button 
                          onClick={() => indicator.stripeProductId && handleBuy(indicator.stripeProductId)}
                          className="flex-1 py-3 bg-white/5 hover:bg-emerald-600 hover:text-white text-gray-300 font-bold rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>{indicator.price === 'Free' ? 'Get Free' : 'Buy Now'}</span>
                          {indicator.price === 'Free' ? (
                             <ArrowRight size={16} />
                          ) : (
                            <>
                              <ShoppingCart size={16} className="group-hover/btn:hidden" />
                              <ArrowRight size={16} className="hidden group-hover/btn:block" />
                            </>
                          )}
                        </button>
                      )}
                      
                      {indicator.results && (
                        <button 
                          onClick={() => handleFlip(indicator.id)}
                          className="px-4 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all flex items-center justify-center"
                          title="View Proof"
                        >
                          <Activity size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* BACK SIDE (RESULTS) */}
                <div 
                  className="absolute inset-0 backface-hidden w-full h-full bg-gray-900 border border-emerald-500/30 rounded-2xl overflow-hidden flex flex-col"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Performance Proof</h3>
                      <button 
                        onClick={() => handleFlip(indicator.id)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                      >
                        <RotateCcw size={20} />
                      </button>
                    </div>

                    {indicator.results ? (
                      <div className="space-y-6 overflow-y-auto custom-scrollbar pr-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">Total Return</div>
                            <div className="text-emerald-400 font-mono font-bold">{indicator.results.totalReturn}</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">Profit Factor</div>
                            <div className="text-white font-mono font-bold">{indicator.results.profitFactor}</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">Win Rate</div>
                            <div className="text-white font-mono font-bold">{indicator.results.winRate}</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">Max Drawdown</div>
                            <div className="text-red-400 font-mono font-bold">{indicator.results.maxDrawdown}</div>
                          </div>
                        </div>

                        <div className="bg-black/40 rounded-lg border border-white/10 overflow-hidden">
                          <div className="p-2 border-b border-white/10 text-xs font-bold text-gray-400 flex items-center gap-2">
                            <Activity size={12} /> Equity Curve
                          </div>
                          <img 
                            src={indicator.results.chartImage} 
                            alt="Equity Chart" 
                            className="w-full h-32 object-cover opacity-80"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Total Trades</span>
                            <span className="text-white font-mono">{indicator.results.totalTrades}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Strategy Type</span>
                            <span className="text-emerald-400 font-bold">High Frequency</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                           <div className="flex items-start gap-2">
                              <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                              <p className="text-xs text-emerald-200">
                                 Verified backtest results. Past performance does not guarantee future results.
                              </p>
                           </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-center text-gray-500">
                        No results data available.
                      </div>
                    )}
                    
                    <button 
                      onClick={() => handleFlip(indicator.id)}
                      className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
                    >
                      Back to Info
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <p className="text-gray-500 text-sm mb-4">
                * Results shown are for illustrative purposes. Past performance is not indicative of future results.
             </p>
             <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                View All Indicators <ArrowRight size={14} />
             </button>
        </div>
      </div>
    </section>
  );
};
