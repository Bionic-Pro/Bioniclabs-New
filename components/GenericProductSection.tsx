import React from 'react';
import { ProductData } from '../types';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, UserPlus } from 'lucide-react';

interface Props {
  product: ProductData;
  reverse?: boolean;
}

export const GenericProductSection: React.FC<Props> = ({ product, reverse = false }) => {
  const isEmerald = product.themeColor === 'emerald';
  const isRed = product.themeColor === 'red';

  const glowClass = isEmerald ? 'bg-emerald-500/20' : isRed ? 'bg-red-500/20' : 'bg-blue-500/20';
  const textGlowClass = isEmerald ? 'text-emerald-400' : isRed ? 'text-red-400' : 'text-blue-400';
  
  // Dynamic classes for the roadmap line
  const lineGlowClass = isEmerald 
    ? 'group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]' 
    : isRed 
      ? 'group-hover:bg-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.8)]' 
      : 'group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]';

  const nodeGlowClass = isEmerald
    ? 'group-hover:bg-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,1)]'
    : isRed
      ? 'group-hover:bg-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,1)]'
      : 'group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,1)]';

  const buttonClass = isEmerald 
    ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20' 
    : isRed 
      ? 'bg-red-600 hover:bg-red-500 shadow-red-900/20' 
      : 'bg-blue-600 hover:bg-blue-500';

  const secondaryButtonClass = 'bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg';

  return (
    <section id={product.id} className="py-24 relative overflow-hidden group">
      
      {/* Roadmap Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0">
        <div className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 ${lineGlowClass}`} />
      </div>
      
      {/* Roadmap Node */}
      <div className={`absolute left-6 md:left-1/2 top-1/2 w-4 h-4 rounded-full border border-white/20 bg-bionic-900 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${nodeGlowClass}`} />

      {/* Background Ambience */}
      <div className={`absolute top-0 ${reverse ? 'left-0' : 'right-0'} w-full md:w-1/2 h-full ${glowClass} blur-[120px] opacity-20 pointer-events-none`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          
          {/* Visual */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/image"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/image:scale-105 opacity-80"
              />
              <div className="absolute bottom-6 left-6 z-20">
                 {product.badge && (
                    <span className={`px-2 py-1 text-[10px] font-bold bg-white text-black rounded mb-2 inline-block`}>
                        {product.badge}
                    </span>
                 )}
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${textGlowClass}`}>
                <product.icon size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{product.name}</h2>
            </div>
            
            <p className={`text-xl font-medium mb-4 ${textGlowClass} font-display tracking-wide`}>
              {product.tagline}
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                   <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={16} className={textGlowClass} />
                      <span className="font-bold text-white">{feature.label}</span>
                   </div>
                   <span className="text-sm text-gray-500 pl-6">{feature.detail}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={product.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 ${buttonClass} text-white font-bold rounded-lg transition-all shadow-lg transform hover:-translate-y-1 w-full sm:w-auto justify-center`}
              >
                {product.ctaText} <ExternalLink size={18} />
              </a>

              {product.secondaryCtaText && product.secondaryCtaUrl && (
                <a 
                  href={product.secondaryCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 ${secondaryButtonClass} font-bold rounded-lg transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center`}
                >
                  {product.secondaryCtaText} <UserPlus size={18} />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};