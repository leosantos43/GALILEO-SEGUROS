
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthPlans from './components/HealthPlans';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import { Page } from './types';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  BarChart3,
  Globe,
  Layers
} from 'lucide-react';

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <>
    <Hero />
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-blue-600 font-tech font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4">Plataforma Multicálculo</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">Conectamos você às <span className="text-blue-600">melhores seguradoras</span></h3>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base font-medium">Não somos uma seguradora única. Somos a inteligência que compara todas as opções do mercado para garantir que você nunca pague a mais.</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Layers />, title: "Comparação em Tempo Real", desc: "Varremos os sistemas de todas as seguradoras parceiras instantaneamente." },
            { icon: <BarChart3 />, title: "Melhor Custo-Benefício", desc: "Nossa IA filtra as apólices com as melhores notas técnicas e menores preços." },
            { icon: <ShieldCheck />, title: "Independência Total", desc: "Nossa fidelidade é com você, não com uma seguradora específica." }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="bg-blue-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Services />
    <HealthPlans />
    <AIAssistant />
  </>
);

const InsurancePage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">O Mercado na sua Mão</h1>
        <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto">Trabalhamos com as 20 maiores seguradoras do Brasil para oferecer proteção sem viés.</p>
      </div>
      <Services />
      <div className="mt-16 md:mt-20 p-8 md:p-12 bg-blue-600 rounded-[2rem] md:rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Por que cotar com a Galileo?</h2>
          <p className="opacity-90 max-w-lg text-sm md:text-base">Ao invés de falar com uma seguradora por vez, nossa plataforma faz o trabalho pesado por você em segundos, comparando franquias e coberturas.</p>
        </div>
        <button className="w-full md:w-auto bg-white text-blue-600 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">Comparar Agora</button>
      </div>
    </div>
  </div>
);

const HealthPage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">Saúde Multi-Operadora</h1>
        <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto">Bradesco, SulAmérica, Amil, Porto Saúde e muito mais. Analisamos qual rede atende melhor sua região.</p>
      </div>
      <HealthPlans />
      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Consultoria Imparcial</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">Diferente de corretores vinculados a um único grupo, na Galileo avaliamos o histórico de reajustes e qualidade de rede de todas as operadoras antes de sugerir um plano.</p>
          <ul className="space-y-4">
            {['Análise de Reajustes Históricos', 'Mapeamento de Hospitais Próximos', 'Estudo de Redução de Custos', 'Suporte Pós-Venda Multi-Canal'].map((t, i) => (
              <li key={i} className="flex items-center space-x-3 text-slate-700 font-bold text-sm md:text-base">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-video bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Health Tech Comparison" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

const AboutPage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Seu hub de <span className="text-blue-600">proteção</span> total.</h1>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
            A GALILEO atua como o seu braço direito no mercado de seguros. Como uma corretora independente e tecnológica, não temos produtos próprios; nossa missão é auditar e selecionar o que há de melhor nas seguradoras tradicionais.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-sm mx-auto lg:mx-0">
            <div>
              <p className="text-3xl md:text-4xl font-black text-blue-600">40+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Parceiras</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-blue-600">0%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Conflito</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full" alt="Galileo Global Hub" />
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-50 max-w-[180px] md:max-w-none">
             <Globe className="text-blue-600 w-8 h-8 md:w-12 md:h-12 mb-4" />
             <p className="font-bold text-slate-900 text-sm md:text-base">Mercado Aberto</p>
             <p className="text-[10px] text-slate-400">Acesso a todas as seguradoras</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const QuotePage: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 text-center sm:text-left">Cotar em todo Mercado</h1>
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 md:w-12 h-1.5 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-700 text-center sm:text-left">Qual o foco da comparação?</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 md:gap-4">
                {['Seguro Auto', 'Plano de Saúde', 'Seguro de Vida', 'Residencial', 'Empresarial'].map(t => (
                  <button key={t} onClick={() => setStep(2)} className="p-4 md:p-6 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100 font-bold hover:border-blue-600 hover:bg-blue-50 transition-all text-slate-700 text-sm md:text-base">{t}</button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-700 text-center sm:text-left">Seus dados para o multicálculo</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Nome completo" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                <input type="email" placeholder="E-mail" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                <input type="tel" placeholder="WhatsApp" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                 <button onClick={() => setStep(1)} className="flex-1 p-4 bg-slate-100 rounded-xl font-bold text-slate-500 order-2 sm:order-1">Voltar</button>
                 <button onClick={() => setStep(3)} className="flex-[2] p-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 order-1 sm:order-2">Gerar Orçamentos</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <CheckCircle2 size={32} md={40} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Analisando o Mercado...</h2>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Nossa plataforma está conectando com as 20 seguradoras parceiras. Em instantes você receberá o estudo via WhatsApp.</p>
              <button onClick={() => window.location.href = '/'} className="w-full p-4 md:p-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black shadow-xl">Voltar ao Início</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    // Reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'seguros': return <InsurancePage />;
      case 'saude': return <HealthPage />;
      case 'sobre': return <AboutPage />;
      case 'ia': return <AIAssistant />;
      case 'contato': return <Contact />;
      case 'cotacao': return <QuotePage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="animate-in fade-in duration-700">
        {renderPage()}
      </main>
      <Footer />
      <a 
        href="https://wa.me/5511979761882" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-green-500 text-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl transition-all hover:scale-110 flex items-center space-x-2 group"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm md:text-base">Fale Conosco: (11) 97976-1882</span>
      </a>
      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
};

export default App;
