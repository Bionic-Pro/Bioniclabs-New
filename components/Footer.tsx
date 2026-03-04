import React from 'react';
import { Rocket, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#vibecard" className="hover:text-cyan-400 transition-colors">VibeCard</a></li>
                <li><a href="#bionicai" className="hover:text-emerald-400 transition-colors">BionicAI Trading</a></li>
                <li><a href="#rideordie" className="hover:text-red-400 transition-colors">F*ckin' Ride Or Die</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <Instagram size={16} />
                </a>
                <a href="mailto:hello@bionic.labs" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <Mail size={16} />
                </a>
              </div>
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