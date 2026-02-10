
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    <section id="ia" className="pt-32 pb-24 bg-white relative overflow-hidden min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="max-w-5xl w-full px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Galileu AI Assistant</h1>
          <p className="text-slate-500 font-medium">Consultoria em seguros baseada em dados reais e inteligência artificial.</p>
        </div>

        <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[70vh] border-8 border-slate-950">
          <div className="px-8 py-4 flex items-center justify-between bg-slate-900/50 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <Terminal size={18} className="text-blue-500" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protocolo Galileo-3.0-Flash</span>
            </div>
            <div className="flex items-center space-x-2 text-green-500">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Ativo</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-blue-600/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-4 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-slate-800' : 'bg-blue-600'}`}>
                    {m.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
                  </div>
                  <div className={`p-5 rounded-3xl text-sm font-medium leading-relaxed ${
                    m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-900 text-slate-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center animate-pulse">
                    <Loader2 size={18} className="animate-spin text-white" />
                  </div>
                  <div className="bg-slate-900 p-5 rounded-3xl text-sm text-slate-400 animate-pulse rounded-tl-none">Analisando dados do mercado...</div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-slate-950 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Como funciona o seguro auto tech?"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-5 pl-8 pr-16 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-600 outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-3 top-3 bottom-3 px-6 rounded-xl transition-all ${input.trim() && !isLoading ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-600'}`}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-slate-400">
           <div className="flex items-center space-x-2">
             <Info size={14} />
             <span className="text-[10px] font-bold uppercase">Consulte nossos termos de IA</span>
           </div>
           <div className="flex items-center space-x-2">
             <Sparkles size={14} />
             <span className="text-[10px] font-bold uppercase">Respostas geradas por Gemini Flash 2.5</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
