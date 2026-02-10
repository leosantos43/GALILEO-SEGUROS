
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (p: Page) => {
    setPage(p);
    setIsOpen(false);
    // Usamos scroll imediato para evitar conflitos com animações
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-tech font-bold tracking-tighter text-blue-900">GALILEO</span>
              <span className="text-[10px] font-medium text-blue-600 uppercase tracking-[0.2em]">Corretora</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`text-sm font-semibold transition-colors uppercase tracking-widest ${currentPage === item.href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('cotacao')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              COTAR AGORA
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 py-8 px-6 border-t border-slate-100 shadow-2xl">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`text-left text-lg font-bold border-b border-slate-50 pb-2 ${currentPage === item.href ? 'text-blue-600' : 'text-slate-700'}`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => handleNav('cotacao')} className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg">
              COTAR AGORA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
