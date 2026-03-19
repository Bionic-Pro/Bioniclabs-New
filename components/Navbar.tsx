import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = (link: { name: string; href: string }, className: string, onClick?: () => void) => {
    if (link.href.startsWith('/')) {
      return (
        <Link 
          key={link.name} 
          to={link.href} 
          className={className}
          onClick={onClick}
        >
          {link.name}
        </Link>
      );
    }
    
    // For hashes, if we are not on home page, we should ideally link to /#hash
    // We'll just use a standard <a> tag. If they are on /incubation and click a hash, 
    // it won't work perfectly without a full URL. Let's make hashes absolute to home if needed.
    const href = link.href.startsWith('#') ? `/${link.href}` : link.href;

    return (
      <a 
        key={link.name} 
        href={href} 
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={className}
        onClick={onClick}
      >
        {link.name}
      </a>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bionic-900/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
            <Rocket size={18} className="group-hover:animate-pulse" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Bionic<span className="text-cyan-400">.labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => renderLink(link, "text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium"))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bionic-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => renderLink(link, "text-lg text-gray-300 hover:text-white font-display", () => setIsOpen(false)))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};