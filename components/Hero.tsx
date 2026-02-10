
import React from 'react';
import { ChevronRight, ShieldCheck, Zap, Globe, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-50 blur-[100px] rounded-full opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Corretagem 4.0</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-slate-900">
                Cuidando do que <span className="text-blue-600">importa</span> para você.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
                A GALILEO utiliza inteligência de dados para criar camadas de proteção invisíveis ao redor da sua vida e do seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#ia" className="group flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 hover:scale-[1.02]">
                <span>CONSULTORIA COM IA</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#seguros" className="flex items-center justify-center space-x-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold transition-all shadow-sm">
                <span>VER TODOS OS SEGUROS</span>
              </a>
            </div>

            <div className="flex items-center space-x-12 pt-10">
              <div>
                <p className="text-4xl font-bold font-tech text-slate-900 tracking-tighter">50k+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Vidas Ativas</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <p className="text-4xl font-bold font-tech text-slate-900 tracking-tighter">24h</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">IA Disponível</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <p className="text-4xl font-bold font-tech text-slate-900 tracking-tighter">98%</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">CSAT Score</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 p-1 bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800" 
                alt="Galileo Digital Brokerage" 
                className="rounded-[2.8rem] object-cover h-[600px] w-full group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2rem] border-white/50 shadow-2xl">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-blue-950 text-xl">Proteção Galileo 360°</p>
                    <p className="text-sm font-medium text-blue-800/70">Ativado: Proteção patrimonial em tempo real</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-[2rem] shadow-xl animate-bounce duration-[4000ms]">
              <Zap className="text-blue-600 w-10 h-10" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl">
              <MousePointer2 className="text-blue-400 w-10 h-10 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
