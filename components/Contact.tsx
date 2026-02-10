
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl shadow-blue-500/5">
          <div className="grid lg:grid-cols-5">
            {/* Info Side */}
            <div className="lg:col-span-2 p-12 lg:p-20 bg-blue-600 space-y-12 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-40 -mt-40"></div>
              
              <div className="space-y-6 relative z-10">
                <h2 className="text-5xl font-black tracking-tight text-white leading-none">Pronto para a <span className="opacity-60 italic">Galileo?</span></h2>
                <p className="text-blue-100 font-medium text-lg leading-relaxed">
                  Não somos apenas corretores, somos seus parceiros em gestão de riscos e saúde.
                </p>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <MessageSquare className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em] font-black">WhatsApp 24h</p>
                    <p className="text-xl font-bold text-white">(11) 99999-0000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em] font-black">Email Corporativo</p>
                    <p className="text-xl font-bold text-white">broker@galileo.com.br</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/20 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/${i+50}/100/100`} 
                        className="w-12 h-12 rounded-full border-4 border-blue-600 object-cover" 
                        alt="Time Galileo"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-blue-100">Agentes online para cotação agora.</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-12 lg:p-20 space-y-10 bg-white">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Solicite uma Análise</h3>
                <p className="text-slate-500 font-medium">Preencha os dados e receba uma consultoria exclusiva em minutos.</p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seu melhor Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="email@dominio.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Corporativo</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder-slate-400 shadow-inner"
                    placeholder="(11) 90000-0000"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seguro de Interesse</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none shadow-inner">
                      <option>Selecione uma opção</option>
                      <option>Seguro Auto Tech</option>
                      <option>Plano de Saúde Premium</option>
                      <option>Seguro de Vida Flex</option>
                      <option>Seguro Empresarial</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mensagem ou Dúvida</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none shadow-inner"
                    placeholder="Como podemos ajudar você hoje?"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 group active:scale-[0.98]">
                    <span className="text-lg">SOLICITAR CONSULTORIA GRÁTIS</span>
                    <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
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
