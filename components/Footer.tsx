import React from 'react';
import { Rocket, Twitter, Music, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer id="footer" className="bg-bionic-900 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Bionic<span className="text-cyan-400">.labs</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-60">
              Building the future of digital interaction, financial freedom, and AI entertainment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full lg:w-auto flex-1">
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/#vibecard" className="hover:text-cyan-400 transition-colors">VibeCard</Link></li>
                <li><Link to="/#bionicai" className="hover:text-emerald-400 transition-colors">BionicAI Trading</Link></li>
                <li><Link to="/#rideordie" className="hover:text-red-400 transition-colors">F*ckin' Ride Or Die</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Incubation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/incubation#clarity" className="hover:text-blue-400 transition-colors">ClarityLaw AI</Link></li>
                <li><Link to="/incubation#bucatarasul" className="hover:text-yellow-400 transition-colors">Bucătărașul</Link></li>
                <li><Link to="/incubation#momentum" className="hover:text-emerald-400 transition-colors">Momentum Engine</Link></li>
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
              <h4 className="text-white font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://x.com/M3Bionic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@m3bionic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Music size={16} />
                    <span>TikTok</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm inline-flex flex-col">
                <li className="w-full">
                  <a href="mailto:help@appbioniclabs.xyz" className="flex items-center gap-3 w-full text-gray-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-white/10">
                    <Mail size={16} className="text-purple-400 shrink-0" />
                    <span className="font-medium">help@appbioniclabs.xyz</span>
                  </a>
                </li>
                <li className="w-full">
                  <a href="mailto:support@appbioniclabs.xyz" className="flex items-center gap-3 w-full text-gray-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-white/10">
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <span className="font-medium">support@appbioniclabs.xyz</span>
                  </a>
                </li>
                <li className="w-full">
                  <a href="mailto:contact@appbioniclabs.xyz" className="flex items-center gap-3 w-full text-gray-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-white/10">
                    <Mail size={16} className="text-purple-400 shrink-0" />
                    <span className="font-medium">contact@appbioniclabs.xyz</span>
                  </a>
                </li>
                <li className="w-full">
                  <a href="mailto:info@appbioniclabs.xyz" className="flex items-center gap-3 w-full text-gray-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-white/10">
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <span className="font-medium">info@appbioniclabs.xyz</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 pb-8 text-center flex flex-col justify-center items-center gap-6">
          <p className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent opacity-60 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            © {new Date().getFullYear()} Bionic.labs. All rights reserved.
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent opacity-60 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            Designed for the bold.
          </p>
        </div>
      </div>
    </footer>
  );
};