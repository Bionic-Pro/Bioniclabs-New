import React from 'react';
import { Rocket, Twitter, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer id="footer" className="bg-bionic-900 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Bionic<span className="text-cyan-400">.labs</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the future of digital interaction, financial freedom, and AI entertainment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#vibecard" className="hover:text-cyan-400 transition-colors">VibeCard</a></li>
                <li><a href="#bionicai" className="hover:text-emerald-400 transition-colors">BionicAI Trading</a></li>
                <li><a href="#rideordie" className="hover:text-red-400 transition-colors">F*ckin' Ride Or Die</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Incubation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#clarity" className="hover:text-blue-400 transition-colors">ClarityLaw AI</a></li>
                <li><a href="#bucatarasul" className="hover:text-yellow-400 transition-colors">Bucătărașul</a></li>
                <li><a href="#momentum" className="hover:text-emerald-400 transition-colors">Momentum Engine</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => onOpenLegal('privacy')} className="hover:text-cyan-400 transition-colors text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenLegal('terms')} className="hover:text-red-400 transition-colors text-left">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenLegal('cookies')} className="hover:text-yellow-400 transition-colors text-left">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@bionic.labs" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Bionic.labs. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed for the bold.
          </p>
        </div>
      </div>
    </footer>
  );
};