
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Terminal, Info, ShieldAlert } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sistemas carregados. Sou a IA Galileu. Como posso proteger seu futuro hoje? Digite sua dúvida sobre seguros ou saúde.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ia" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-950 relative overflow-hidden min-h-[90vh] flex flex-col items-center">
      {/* Background Cyber-Tech */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0,transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-5xl w-full px-4 relative z-10 flex flex-col h-full">
        <div className="text-center mb-10 space-y-4">
          <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] mx-auto floating">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-tech font-bold text-white tracking-tighter uppercase">Galileu <span className="text-blue-500">Core</span> IA</h2>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-xl mx-auto">Motor de inteligência artificial de 4ª geração para análise de riscos e seguros.</p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[65vh] md:h-[75vh] border border-white/10">
          {/* Terminal Header */}
          <div className="px-6 py-4 flex items-center justify-between bg-black/40 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <Terminal size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GALILEO-OS-3.1</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest animate-pulse">Encriptado</span>
              <ShieldAlert size={12} className="text-blue-500" />
            </div>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin scrollbar-thumb-blue-600/20 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`flex max-w-[90%] sm:max-w-[80%] items-start space-x-4 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                    m.role === 'user' ? 'bg-slate-800' : 'bg-blue-600 shadow-blue-600/20'
                  }`}>
                    {m.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
                  </div>
                  <div className={`p-5 rounded-2xl md:rounded-3xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-xl shadow-blue-600/10' 
                    : 'bg-black/40 text-slate-200 border border-white/10 rounded-tl-none font-medium'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Loader2 size={20} className="animate-spin text-white" />
                  </div>
                  <div className="bg-black/40 border border-white/10 p-5 rounded-2xl md:rounded-3xl text-sm text-blue-400 font-bold animate-pulse rounded-tl-none">
                    PROCESSANDO DADOS DO MERCADO...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 bg-black/40 border-t border-white/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Solicitar análise de seguro ou plano de saúde..."
                className="relative w-full bg-slate-800/50 border border-white/10 rounded-2xl py-5 pl-8 pr-20 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-3 top-3 bottom-3 px-6 rounded-xl transition-all flex items-center justify-center ${
                  input.trim() && !isLoading 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-slate-700 text-slate-500'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 text-slate-500">
           <div className="flex items-center space-x-2">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Criptografia Militar</span>
           </div>
           <div className="flex items-center space-x-2">
             <Sparkles size={12} className="text-blue-500" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Motor Gemini 3 Turbo</span>
           </div>
           <div className="flex items-center space-x-2">
             <Info size={12} className="text-blue-500" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Auditoria Imparcial</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
