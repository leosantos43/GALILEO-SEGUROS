
import React from 'react';
import { Shield, Facebook, Instagram, Linkedin, Twitter, ExternalLink, Globe, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2.5 rounded-xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-tech font-black tracking-tighter text-blue-950">
                  GALILEO
                </span>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Proteção Inteligente</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Pioneira em corretagem digital e saúde assistida por inteligência artificial. Cuidamos do que importa para você com transparência absoluta e eficiência tecnológica.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:scale-110">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase tracking-[0.2em] text-xs">Acesso Rápido</h4>
            <ul className="space-y-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-500 hover:text-blue-600 font-bold transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase tracking-[0.2em] text-xs">Produtos Premium</h4>
            <ul className="space-y-5">
              {[
                "Seguro Auto Tech",
                "Planos de Saúde VIP",
                "Seguro de Vida Digital",
                "Residencial Smart",
                "Riscos Corporativos"
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 font-bold transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-slate-900 font-black mb-8 uppercase tracking-[0.2em] text-xs">Newsletter Galileo</h4>
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
              <p className="text-slate-500 text-xs font-bold mb-4 uppercase tracking-widest">Receba insights de proteção</p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                  ASSINAR AGORA
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center">
            Feito com <Heart size={10} className="mx-1 text-blue-600 fill-blue-600" /> pela Galileo Tech Corp © 2024
          </p>
          <div className="flex items-center space-x-10">
            {["Privacidade", "Termos", "Susep"].map((t, i) => (
              <a key={i} href="#" className="text-slate-400 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest transition-colors">{t}</a>
            ))}
            <div className="flex items-center space-x-2 text-slate-400">
              <Globe size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Brasil (PT-BR)</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-3 bg-slate-100 rounded-full">
            <p className="text-[9px] text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed uppercase tracking-widest">
              GALILEO CORRETORA DE SEGUROS LTDA | CNPJ: 00.000.000/0001-00 | REGISTRO SUSEP: 000.000.J
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
