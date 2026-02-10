
import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { INSURANCE_SERVICES, IconRenderer } from '../constants';

const Services: React.FC = () => {
  const handleQuote = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Vi o site da GALILEO e gostaria de fazer uma cotação para: ${serviceTitle}.`);
    window.open(`https://wa.me/5511979761882?text=${message}`, '_blank');
  };

  return (
    <section id="seguros" className="py-24 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-blue-600 font-tech font-bold tracking-[0.3em] uppercase text-sm">Independência & Tecnologia</h2>
            <h3 id="services-title" className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Avaliamos o mercado <br/> para você não ter <span className="text-blue-600">dúvidas</span>.
            </h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            Nossa plataforma audita as melhores seguradoras (Porto, Bradesco, Azul, etc) para garantir que sua apólice seja sempre a mais técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSURANCE_SERVICES.map((service) => (
            <article 
              key={service.id} 
              className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-600/30 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <IconRenderer iconName={service.icon} className="w-8 h-8 text-white" />
                </div>
                <button 
                  onClick={() => handleQuote(service.title)}
                  aria-label={`Saber mais sobre ${service.title}`}
                  className="p-3 rounded-full bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all"
                >
                  <ArrowUpRight size={24} />
                </button>
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h4>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-sm font-bold text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" aria-hidden="true"></div>
                    {detail}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => handleQuote(service.title)}
                className="w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                Cotar em Todas
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
