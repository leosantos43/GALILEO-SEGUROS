
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a "IA Galileu", o assistente virtual da GALILEO Corretora de Seguros.
Sua missão: Ajudar clientes a escolherem a melhor proteção (Seguros ou Saúde).

DIFERENCIAL GALILEO:
- Somos uma Corretora Tech Independente.
- NÃO somos uma seguradora. Somos consultores que usam IA para comparar TODAS as empresas (Porto, Bradesco, Allianz, Amil, SulAmérica, etc).
- Nosso foco é transparência: mostramos o melhor custo-benefício real.

DIRETRIZES:
1. Seja tecnológico, profissional e empático.
2. Slogan: "Cuidando do que importa para você".
3. Se o cliente quiser cotação de Plano de Saúde Empresa, mencione que analisamos por "Vidas" e rede credenciada.
4. Responda sempre em Português (BR).
5. Mantenha respostas concisas e objetivas.
`;

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Limpeza da chave para evitar espaços ou aspas extras que o Vercel pode injetar
    const rawApiKey = process.env.API_KEY;
    const apiKey = rawApiKey?.trim().replace(/["']/g, "");
    
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      console.error("ERRO CRÍTICO: Variável de ambiente API_KEY não encontrada.");
      return "Olá! A minha chave de acesso (API_KEY) não foi detectada pelo sistema. Por favor, verifique se você a adicionou no Vercel (em Settings > Environment Variables), salvou e realizou um NOVO DEPLOY.";
    }

    // O modelo 'gemini-flash-latest' é o mais recomendado para o plano gratuito
    const ai = new GoogleGenAI({ apiKey });

    // A API Gemini exige que a conversa comece com 'user'
    const validHistory = history.filter((msg, index) => {
      if (index === 0 && msg.role === 'model') return false;
      return true;
    });

    const contents = [
      ...validHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userPrompt }]
      }
    ];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-flash-latest', // Modelo otimizado para o plano gratuito
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("Resposta vazia da API");
    }

    return text;
  } catch (error: any) {
    console.error("Erro detalhado da API Gemini:", error);
    
    const errorMessage = error.message || "";
    
    // Erros de permissão ou chave
    if (errorMessage.includes("API key not valid") || errorMessage.includes("403") || errorMessage.includes("permission denied")) {
      return "Ops! Parece que minha chave de acesso gratuita está com problemas de permissão. Certifique-se de que a API 'Generative Language' está ativada no seu Google AI Studio. Enquanto isso, fale com nosso time no WhatsApp: (11) 97976-1882.";
    }

    // Erros de limite de taxa (comum no plano grátis)
    if (errorMessage.includes("429")) {
      return "Recebi muitas perguntas agora! Por ser um serviço gratuito, tenho um limite de velocidade. Pode aguardar 10 segundos e tentar de novo? Ou chame no WhatsApp: (11) 97976-1882.";
    }

    return "Olá! Tive um pequeno soluço tecnológico aqui. Tente enviar sua mensagem novamente ou fale diretamente com nossos consultores no WhatsApp: (11) 97976-1882.";
  }
};
