
import React from 'react';
import { CheckCircle2, HeartPulse, Stethoscope, Activity, Search } from 'lucide-react';
import { HEALTH_PLANS } from '../constants';

const HealthPlans: React.FC = () => {
  return (
    <section id="saude" className="py-24 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-blue-600 font-tech font-bold uppercase tracking-[0.3em] text-sm">Marketplace de Saúde</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Nós comparamos, <br/> você <span className="text-blue-600">escolhe.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              A Galileo analisa simultaneamente Bradesco, Amil, SulAmérica, Porto Saúde e todas as operadoras para encontrar o plano que faz sentido para você.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Search className="text-blue-600" />, text: "Comparação Total" },
                { icon: <Activity className="text-blue-600" />, text: "Auditamos Reajustes" },
                { icon: <HeartPulse className="text-blue-600" />, text: "Rede sob medida" },
                { icon: <CheckCircle2 className="text-blue-600" />, text: "Assessoria Gratuita" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  {item.icon}
                  <span className="font-bold text-slate-800 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Principais Parceiros:</p>
               <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <span className="text-xl font-black">BRADESCO</span>
                  <span className="text-xl font-black">AMIL</span>
                  <span className="text-xl font-black">SULAMÉRICA</span>
                  <span className="text-xl font-black">PORTO</span>
               </div>
            </div>
          </div>

          <div className="grid gap-6">
            {HEALTH_PLANS.map((plan, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
                  idx === 0 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20 scale-[1.02]' 
                  : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-black mb-1">{plan.name}</h4>
                    <p className={`text-sm ${idx === 0 ? 'text-blue-100' : 'text-slate-500'}`}>{plan.description}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${idx === 0 ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                    {idx === 0 ? 'Mais Completo' : 'Custo-Benefício'}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {plan.features.map((f, i) => (
                    <span key={i} className={`text-xs font-bold px-3 py-1 rounded-lg ${idx === 0 ? 'bg-white/10' : 'bg-slate-100'}`}>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-current opacity-20">
                  <p className="font-bold text-lg uppercase tracking-tight">{plan.price}</p>
                  <button className={`px-6 py-2.5 rounded-xl font-bold transition-all ${idx === 0 ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                    Consultar Mercado
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlans;
