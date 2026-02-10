
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
    // Acesso direto via process.env.API_KEY conforme exigido
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      console.error("ERRO: API_KEY não configurada no ambiente.");
      return "Olá! Notei que minha chave de comunicação com os servidores de IA ainda não foi ativada. Por favor, certifique-se de que a variável 'API_KEY' foi adicionada corretamente no painel do Vercel e que um novo Deploy foi realizado.";
    }

    const ai = new GoogleGenAI({ apiKey });

    // Filtragem obrigatória: A API Gemini não aceita histórico que comece com 'model'
    // Removemos a saudação inicial se ela for a primeira mensagem.
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
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("A API retornou uma resposta vazia.");
    }

    return text;
  } catch (error: any) {
    console.error("Erro na API Gemini:", error);
    
    if (error.message?.includes("API key not valid") || error.message?.includes("403")) {
      return "Sua Chave de API parece inválida ou não tem permissão para este modelo. Verifique as configurações no Google AI Studio.";
    }

    return "Olá! Tive um problema técnico ao acessar minha inteligência agora. Enquanto eu me recupero, nosso time humano pode te ajudar no WhatsApp: (11) 97976-1882.";
  }
};
