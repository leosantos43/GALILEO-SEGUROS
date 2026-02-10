
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl shadow-blue-500/5">
          <div className="grid lg:grid-cols-5">
            {/* Info Side */}
            <div className="lg:col-span-2 p-8 md:p-12 lg:p-20 bg-blue-600 space-y-10 md:space-y-12 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-white/10 blur-[80px] md:blur-[100px] rounded-full -mr-32 -mt-32 md:-mr-40 md:-mt-40"></div>
              
              <div className="space-y-6 relative z-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none">Pronto para a <span className="opacity-60 italic">Galileo?</span></h2>
                <p className="text-blue-100 font-medium text-base md:text-lg leading-relaxed">
                  Não somos apenas corretores, somos seus parceiros em gestão de riscos.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <MessageSquare className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[9px] text-blue-200 uppercase tracking-[0.2em] font-black">WhatsApp 24h</p>
                    <p className="text-lg md:text-xl font-bold text-white">(11) 97976-1882</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[9px] text-blue-200 uppercase tracking-[0.2em] font-black">Telefone</p>
                    <p className="text-lg md:text-xl font-bold text-white">(11) 97976-1882</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                    <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[9px] text-blue-200 uppercase tracking-[0.2em] font-black">Email Corporativo</p>
                    <p className="text-lg md:text-xl font-bold text-white text-sm sm:text-lg">broker@galileo.com.br</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 md:pt-10 border-t border-white/20 relative z-10 hidden sm:block">
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/${i+50}/100/100`} 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-blue-600 object-cover" 
                        alt="Time Galileo"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-blue-100">Agentes online agora.</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-20 space-y-8 md:space-y-10 bg-white">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">Solicite uma Análise</h3>
                <p className="text-sm md:text-base text-slate-500 font-medium">Preencha os dados e receba uma consultoria exclusiva em minutos.</p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Seu melhor Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="email@dominio.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="(11) 97976-1882"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Seguro de Interesse</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none shadow-inner">
                      <option>Selecione uma opção</option>
                      <option>Seguro Auto Tech</option>
                      <option>Plano de Saúde Premium</option>
                      <option>Seguro de Vida Flex</option>
                      <option>Seguro Empresarial</option>
                    </select>
                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sua Dúvida</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none shadow-inner"
                    placeholder="Como podemos ajudar você hoje?"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-xl shadow-blue-600/20 group active:scale-[0.98]">
                    <span className="text-base md:text-lg">SOLICITAR CONSULTORIA</span>
                    <Send size={18} md={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
