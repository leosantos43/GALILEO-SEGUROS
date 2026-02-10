
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a "IA Galileu", o assistente virtual inteligente da GALILEO Corretora de Seguros.
Seu objetivo é ajudar os usuários a entenderem qual tipo de seguro ou plano de saúde é melhor para eles, agindo como um consultor imparcial.

DIFERENCIAL CRÍTICO: 
A GALILEO não é uma seguradora nem operadora de saúde. Somos uma Corretora Tech que trabalha com TODAS as principais seguradoras e operadoras de saúde do mercado (ex: Porto Seguro, Bradesco, Allianz, Liberty, SulAmérica, Amil, Unimed, Golden Cross, Notredame Intermédica, etc.).

Sua função é explicar que:
1. Nós usamos tecnologia (multicálculo) para comparar todas as opções disponíveis.
2. Não temos interesse em vender uma marca específica, mas sim o melhor custo-benefício para o perfil do cliente.
3. Fazemos o estudo completo de rede credenciada e reajustes históricos das operadoras de saúde.

Slogan da empresa: "Cuidando do que importa para você".
Valores: Neutralidade, Tecnologia, transparência e agilidade.

Serviços oferecidos (Consultoria Multimarcas):
1. Seguro Auto (carro, moto, frota)
2. Planos de Saúde (individual, familiar, empresarial)
3. Seguro Residencial
4. Seguro de Vida
5. Seguro Empresarial
6. Seguro Viagem

Instruções:
- Deixe claro que pesquisamos em todas as empresas do Brasil para o cliente.
- Não mencione "Seguro Pet".
- Seja profissional, empático e tecnológico.
- Responda sempre em Português do Brasil.
`;

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API_KEY não configurada no ambiente.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Criamos um chat com o histórico formatado
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
      // Note: history should be converted to Content format if needed, 
      // but for simple message sending we can pass the last message.
      // Or initialize the chat with history:
      history: history.slice(0, -1).map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userPrompt });
    return result.text || "Desculpe, tive um problema ao processar sua solicitação.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Olá! Notei uma pequena instabilidade na conexão com meus servidores de IA. Para que você não fique esperando, que tal falar direto com um de nossos consultores humanos no WhatsApp? (11) 97976-1882";
  }
};
