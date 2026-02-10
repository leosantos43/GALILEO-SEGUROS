
import React from 'react';
import { ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  const handleNav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-white">
      {/* Elementos de fundo tecnológicos */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-100/30 blur-[100px] md:blur-[150px] rounded-full opacity-40"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-cyan-100/20 blur-[80px] rounded-full opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Corretora Digital Tech</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-slate-900">
                Cuidando do que <br/><span className="text-blue-600">importa</span> para você.
              </h1>
              <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A GALILEO não é apenas uma corretora. Somos uma plataforma de inteligência que audita o mercado para garantir sua proteção total.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={() => handleNav('cotacao')} 
                className="group flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/30 hover:scale-[1.03] active:scale-95"
              >
                <span>QUERO UMA COTAÇÃO</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleNav('seguros')} 
                className="flex items-center justify-center space-x-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold transition-all shadow-sm hover:scale-[1.03] active:scale-95"
              >
                <span>VER SEGUROS</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-12 border-t border-slate-100">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold font-tech text-slate-900 tracking-tighter">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Transparência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold font-tech text-slate-900 tracking-tighter">0s</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Tempo de Resposta</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold font-tech text-slate-900 tracking-tighter">20+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Seguradoras Parceiras</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in duration-1000">
            <div className="relative z-10 p-2 bg-slate-100 rounded-[3.5rem] shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                alt="Galileo Intelligence Shield" 
                className="rounded-[3rem] object-cover h-[650px] w-full group-hover:scale-110 transition-transform duration-[4s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-[2.5rem] border-white/40 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-600 p-5 rounded-2xl shadow-lg glow-blue">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-blue-950 text-2xl">Proteção 360° Ativa</p>
                    <p className="text-sm font-semibold text-blue-800/80">Monitorando mercado em tempo real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
