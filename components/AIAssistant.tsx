
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Terminal, Info } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA Galileu. Estou aqui para ajudar você a navegar pelo mundo dos seguros e planos de saúde. O que você gostaria de proteger hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Efeito para rolar apenas o chat internamente
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
    <section id="ia" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden min-h-[90vh] flex flex-col items-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="max-w-5xl w-full px-4 relative z-10 flex flex-col h-full">
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <div className="bg-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
            <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">Galileu AI Assistant</h1>
          <p className="text-sm md:text-base text-slate-500 font-medium px-4">Consultoria inteligente baseada em dados reais do mercado.</p>
        </div>

        <div className="bg-slate-950 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[60vh] md:h-[70vh] border-4 md:border-8 border-slate-950">
          <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between bg-slate-900/50 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <Terminal size={14} className="text-blue-500 md:hidden" />
              <Terminal size={18} className="text-blue-500 hidden md:block" />
              <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Galileo-3.0-Flash</span>
            </div>
            <div className="flex items-center space-x-2 text-green-500">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Live</span>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-blue-600/20 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[95%] sm:max-w-[85%] space-x-3 md:space-x-4 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-slate-800' : 'bg-blue-600'}`}>
                    {m.role === 'user' ? <User size={14} className="text-white md:hidden" /> : <Bot size={14} className="text-white md:hidden" />}
                    {m.role === 'user' ? <User size={18} className="text-white hidden md:block" /> : <Bot size={18} className="text-white hidden md:block" />}
                  </div>
                  <div className={`p-4 md:p-5 rounded-2xl md:rounded-3xl text-xs md:text-sm font-medium leading-relaxed ${
                    m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-900 text-slate-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center animate-pulse">
                    <Loader2 size={16} className="animate-spin text-white" />
                  </div>
                  <div className="bg-slate-900 p-4 md:p-5 rounded-2xl md:rounded-3xl text-xs md:text-slate-400 animate-pulse rounded-tl-none">Analisando mercado...</div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 md:p-6 bg-slate-950 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Qual o melhor seguro auto?"
                className="w-full bg-slate-900 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-4 md:pl-8 pr-12 md:pr-16 text-xs md:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 top-2 bottom-2 px-4 md:px-6 rounded-lg md:rounded-xl transition-all ${input.trim() && !isLoading ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-600'}`}
              >
                <Send size={16} md={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-slate-400">
           <div className="flex items-center space-x-2">
             <Info size={12} />
             <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Termos de IA auditados</span>
           </div>
           <div className="flex items-center space-x-2">
             <Sparkles size={12} />
             <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Powered by Gemini 3 Flash</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
