
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Page } from './types';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  BarChart3,
  Layers,
  MessageCircle,
  Plus,
  Minus,
  Car,
  HeartPulse,
  Building2,
  UserPlus,
  Briefcase,
  Hash
} from 'lucide-react';

// Lazy loading de seções para melhorar o carregamento inicial (LCP/FID)
const Services = React.lazy(() => import('./components/Services'));
const HealthPlans = React.lazy(() => import('./components/HealthPlans'));
const Contact = React.lazy(() => import('./components/Contact'));

const WHATSAPP_LINK = "https://wa.me/5511979761882";

const handleWhatsappClick = (messageContent: string) => {
  const message = encodeURIComponent(messageContent);
  window.open(`${WHATSAPP_LINK}?text=${message}`, '_blank');
};

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <>
    <Hero setPage={setPage} />
    <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 id="features-title" className="text-blue-600 font-tech font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4">Plataforma Multicálculo</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">Conectamos você às <span className="text-blue-600">melhores seguradoras</span></h3>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base font-medium">Somos a inteligência que compara todas as opções do mercado em tempo real para garantir que você tenha a melhor proteção.</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Layers />, title: "Comparação em Tempo Real", desc: "Varremos os sistemas de todas as seguradoras parceiras instantaneamente." },
            { icon: <BarChart3 />, title: "Melhor Custo-Benefício", desc: "Nossa análise técnica filtra as apólices com os melhores preços do mercado brasileiro." },
            { icon: <ShieldCheck />, title: "Independência Total", desc: "Nossa fidelidade é com você, garantindo assessoria isenta e profissional." }
          ].map((item, i) => (
            <article key={i} className="p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center">
              <div className="bg-blue-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Suspense fallback={<div className="h-96 flex items-center justify-center text-blue-600 font-tech">PROCESSANDO DADOS...</div>}>
      <Services />
      <HealthPlans />
    </Suspense>
  </>
);

const InsurancePage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-[100dvh]">
    <div className="max-w-7xl mx-auto px-4">
      <header className="text-center mb-12 md:mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">Portfólio de Seguros</h1>
        <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">Trabalhamos com as 20 maiores seguradoras do país para oferecer a melhor apólice técnica.</p>
      </header>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
    </div>
  </div>
);

const HealthPage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-[100dvh]">
    <div className="max-w-7xl mx-auto px-4">
      <header className="text-center mb-12 md:mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">Planos de Saúde Multi-Operadora</h1>
        <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">Comparamos Bradesco, SulAmérica, Amil e Porto Saúde para encontrar a melhor rede para você.</p>
      </header>
      <Suspense fallback={null}>
        <HealthPlans />
      </Suspense>
    </div>
  </div>
);

const AboutPage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-[100dvh]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Sobre a <span className="text-blue-600">GALILEO</span></h1>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
            A GALILEO é uma corretora de seguros tech focada em transparência e eficiência. Atuamos como um hub de proteção independente, auditando o mercado brasileiro para entregar sempre o melhor custo-benefício aos nossos clientes.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
            className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full" 
            alt="Escritório Galileo Seguros Hub" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

const QuotePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState('');
  
  const [autoData, setAutoData] = useState({ placa: '', marca: '', modelo: '', nomeMotorista: '', dataNascimento: '' });
  const [healthData, setHealthData] = useState({ vidas: 1, idades: [''], empresa: '' });
  const [lifeData, setLifeData] = useState({ nome: '', cpf: '', dataNascimento: '' });
  const [businessData, setBusinessData] = useState({ empresa: '', ramo: '' });
  const [generalData, setGeneralData] = useState({ nome: '', email: '', whatsapp: '' });

  const handleHealthVidasChange = (action: 'add' | 'remove' | 'manual', value?: number) => {
    let newVidas = healthData.vidas;
    if (action === 'add' && healthData.vidas < 10000) newVidas = healthData.vidas + 1;
    else if (action === 'remove' && healthData.vidas > 1) newVidas = healthData.vidas - 1;
    else if (action === 'manual' && value !== undefined) newVidas = isNaN(value) ? 1 : Math.max(1, value);

    const isCorporate = interest === 'Plano de Saúde Empresarial';
    const newIdades = (!isCorporate && newVidas <= 30)
      ? Array(newVidas).fill('').map((_, i) => healthData.idades[i] || '')
      : [];

    setHealthData({ ...healthData, vidas: newVidas, idades: newIdades });
  };

  const generateAndSend = () => {
    let msg = `🔵 *COTAÇÃO GALILEO - ${interest.toUpperCase()}*\n\n`;
    
    if (interest === 'Seguro Auto') {
      msg += `🚗 *VEÍCULO*\n• Placa: ${autoData.placa}\n• Marca: ${autoData.marca}\n• Modelo: ${autoData.modelo}\n\n`;
      msg += `👤 *CONDUTOR*\n• Nome: ${autoData.nomeMotorista}\n• Nasc: ${autoData.dataNascimento}\n`;
    } 
    else if (interest === 'Plano de Saúde Individual' || interest === 'Plano de Saúde Empresarial') {
      const isCorporate = interest === 'Plano de Saúde Empresarial';
      if (isCorporate) msg += `🏢 *EMPRESA:* ${healthData.empresa}\n`;
      msg += `🏥 *TOTAL DE VIDAS:* ${healthData.vidas}\n`;
      
      if (!isCorporate && healthData.vidas <= 30) {
        msg += `• Idades: ${healthData.idades.join(', ')}\n`;
      }
    } 
    else if (interest === 'Seguro de Vida') {
      msg += `👤 *SEGURADO*\n• Nome: ${lifeData.nome}\n• CPF: ${lifeData.cpf}\n• Nasc: ${lifeData.dataNascimento}\n`;
    }
    else if (interest === 'Seguro Empresarial') {
      msg += `🏢 *EMPRESA*\n• Razão Social: ${businessData.empresa}\n• Ramo de Atividade: ${businessData.ramo}\n`;
    }

    msg += `\n📞 *DADOS DO SOLICITANTE*\n• Nome: ${generalData.nome}\n• WhatsApp: ${generalData.whatsapp}`;
    
    handleWhatsappClick(msg);
    setStep(3);
  };

  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24 min-h-[100dvh] bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">Multicálculo Galileo</h1>
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 md:w-12 h-1.5 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-slate-100'}`} aria-hidden="true"></div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-700 text-center sm:text-left">Selecione o tipo de proteção:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Seguro Auto', icon: <Car /> },
                  { label: 'Plano de Saúde Individual', icon: <HeartPulse /> },
                  { label: 'Plano de Saúde Empresarial', icon: <Building2 /> },
                  { label: 'Seguro de Vida', icon: <UserPlus /> },
                  { label: 'Seguro Empresarial', icon: <Briefcase /> },
                  { label: 'Outros Seguros', icon: <ShieldCheck /> }
                ].map(item => (
                  <button 
                    key={item.label} 
                    onClick={() => { setInterest(item.label); setStep(2); }} 
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 font-bold hover:border-blue-600 hover:bg-blue-50 transition-all text-slate-700 flex flex-col items-center justify-center gap-4 group"
                  >
                    <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-base text-center leading-tight font-black">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-slate-700">Dados do {interest}</h2>
              </div>
              
              <div className="space-y-6">
                {interest === 'Seguro Auto' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Placa do Veículo" className="input-field" value={autoData.placa} onChange={e => setAutoData({...autoData, placa: e.target.value})} />
                    <input type="text" placeholder="Marca (Ex: Toyota)" className="input-field" value={autoData.marca} onChange={e => setAutoData({...autoData, marca: e.target.value})} />
                    <input type="text" placeholder="Modelo (Ex: Corolla)" className="input-field" value={autoData.modelo} onChange={e => setAutoData({...autoData, modelo: e.target.value})} />
                    <input type="text" placeholder="Nome do Motorista Principal" className="input-field" value={autoData.nomeMotorista} onChange={e => setAutoData({...autoData, nomeMotorista: e.target.value})} />
                    <div className="md:col-span-2">
                      <label className="text-[10px] uppercase font-bold text-slate-400 ml-2 mb-1 block">Data de Nascimento do Motorista</label>
                      <input type="date" className="input-field" value={autoData.dataNascimento} onChange={e => setAutoData({...autoData, dataNascimento: e.target.value})} />
                    </div>
                  </div>
                )}

                {(interest === 'Plano de Saúde Individual' || interest === 'Plano de Saúde Empresarial') && (
                  <div className="space-y-6">
                    {interest === 'Plano de Saúde Empresarial' && (
                      <input 
                        type="text" 
                        placeholder="Nome da Empresa / Razão Social" 
                        className="input-field" 
                        value={healthData.empresa} 
                        onChange={e => setHealthData({...healthData, empresa: e.target.value})} 
                      />
                    )}
                    
                    <div className="p-6 bg-blue-50 rounded-[2rem] border border-blue-100 space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <p className="font-black text-blue-900 text-lg">Quantidade de Vidas</p>
                          <p className="text-xs text-blue-600 font-medium">Informe o total de beneficiários.</p>
                        </div>
                        <div className="flex items-center space-x-2 bg-white p-2 rounded-2xl shadow-sm border border-blue-100">
                          <button onClick={() => handleHealthVidasChange('remove')} className="w-12 h-12 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-blue-600 transition-all">
                            <Minus size={20}/>
                          </button>
                          <div className="relative group">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                            <input 
                              type="number" 
                              className="w-24 md:w-32 bg-transparent text-center text-3xl font-black text-blue-900 outline-none pl-6" 
                              value={healthData.vidas} 
                              onChange={(e) => handleHealthVidasChange('manual', parseInt(e.target.value))}
                            />
                          </div>
                          <button onClick={() => handleHealthVidasChange('add')} className="w-12 h-12 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-blue-600 transition-all">
                            <Plus size={20}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700">Contato para envio:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Seu Nome" className="input-field" value={generalData.nome} onChange={e => setGeneralData({...generalData, nome: e.target.value})} />
                    <input type="tel" placeholder="Seu WhatsApp" className="input-field" value={generalData.whatsapp} onChange={e => setGeneralData({...generalData, whatsapp: e.target.value})} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                 <button onClick={() => setStep(1)} className="flex-1 p-4 bg-slate-100 rounded-xl font-bold text-slate-500 order-2 sm:order-1">Voltar</button>
                 <button onClick={generateAndSend} className="flex-[2] p-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                   <MessageCircle size={18} />
                   Solicitar Agora
                 </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Solicitação Enviada!</h2>
              <p className="text-slate-500 font-medium max-w-sm mx-auto">Sua solicitação técnica foi processada. Estamos redirecionando você para um consultor especialista.</p>
              <button onClick={() => setPage('home')} className="w-full p-5 bg-blue-600 text-white rounded-2xl font-black shadow-xl">Página Inicial</button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .input-field {
          width: 100%;
          padding: 1rem;
          background-color: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 0.75rem;
          outline: none;
          font-weight: 600;
          transition: all 0.2s;
          font-size: 16px; /* Mantém o zoom do browser estável no mobile */
        }
        .input-field:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
          background-color: white;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'seguros': return <InsurancePage />;
      case 'saude': return <HealthPage />;
      case 'sobre': return <AboutPage />;
      case 'contato': return <Contact />;
      case 'cotacao': return <QuotePage setPage={setPage} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="animate-in fade-in duration-700 min-h-[100dvh]">
        {renderPage()}
      </main>
      <Footer />
      <a 
        href="https://wa.me/5511979761882" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco agora pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-2xl shadow-2xl transition-all hover:scale-110 flex items-center space-x-2 group active:scale-95"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
};

export default App;
