import { ProductData } from './types';
import { CreditCard, TrendingUp, Flame } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'BionicAI', href: '#bionicai' },
  { name: 'Ride or Die', href: '#rideordie' },
  { name: 'VibeCard', href: '#vibecard' },
  { name: 'ANAF Tracker', href: '#anaftracker' },
  { name: 'Incubation', href: '/incubation' },
];

export const TRADING_PRODUCT: ProductData = {
  id: 'bionicai',
  name: 'BionicAI Trading',
  tagline: 'Swing Big, Win Steady',
  description: 'Elite Bitcoin futures copy-trading integrated with Blofin. Proven discipline-based system with over 644 days of consistent winning trades. Don’t just watch the market—profit from it by copying our exact moves automatically.',
  features: [
    { label: '70%+ Win Rate', detail: 'Consistent profitability' },
    { label: 'Automated Copying', detail: 'Blofin Integration' },
    { label: 'High Leverage', detail: 'x10 Leverage Strategy' },
    { label: 'Community', detail: 'Market insights & analytics' }
  ],
  ctaText: 'Start Trading',
  ctaUrl: 'https://blofin.com/en/copy-trade/details/1908447789?module=futures',
  secondaryCtaText: 'Create Account',
  secondaryCtaUrl: 'https://blofin.com/register?referral_code=WcmQto',
  themeColor: 'emerald',
  icon: TrendingUp,
  imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1600&auto=format&fit=crop', // Trendy BTC/USDT Candlestick Chart
  status: 'LIVE'
};

export const ANAF_TRACKER_PRODUCT: ProductData = {
  id: 'anaftracker',
  name: 'ANAF Tracker',
  tagline: 'Asistentul Tău Fiscal Inteligent',
  description: 'ANAF Tracker este aplicația esențială care transformă modul în care îți gestionezi obligațiile fiscale. Conceput special pentru antreprenorii și profesioniștii din România (SRL, PFA), centralizează și automatizează gestionarea tuturor interacțiunilor cu ANAF. Elimină stresul, evită penalitățile, economisește timp și permite concentrarea pe dezvoltarea afacerii.',
  features: [
    { label: 'Calendar Fiscal', detail: 'Toate termenele (D112, D300, etc.)' },
    { label: 'Mementouri', detail: 'Notificări cu 7, 3 și 1 zi înainte' },
    { label: 'Import SPV', detail: 'Verificare status declarații' },
    { label: 'Multi-Firmă', detail: 'Suport pentru SRL și PFA' }
  ],
  ctaText: 'Află Mai Multe',
  ctaUrl: 'https://declaratiilatimp.base44.app',
  themeColor: 'blue',
  icon: CreditCard,
  imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop', // Tax/Accounting related image
  status: 'IN DEVELOPMENT',
  badge: 'NOU'
};

export const RIDE_OR_DIE_PRODUCT: ProductData = {
  id: 'rideordie',
  name: "FUCKIN' RIDE OR DIE",
  tagline: 'Savage AI Car Matching',
  description: 'A wildly fun, AI-powered personality quiz that roasts you and finds your perfect car match from real dealers in USA & Europe.',
  features: [
    { label: 'AI Roasting', detail: 'Savage personality analysis' },
    { label: 'Real Inventory', detail: 'Buy links from dealers' },
    { label: '30+ Questions', detail: 'Randomized sessions' },
    { label: 'Perplexity AI', detail: 'Built on latest LLMs' }
  ],
  ctaText: 'Take the Quiz',
  ctaUrl: 'https://fuckin-ride-or-die-8e74248f.base44.app',
  themeColor: 'red',
  icon: Flame,
  imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', // Neon sports car
  status: 'LIVE',
  badge: 'VIRAL HIT'
};