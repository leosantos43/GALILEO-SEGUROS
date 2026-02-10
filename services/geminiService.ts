
import { GoogleGenAI } from "@google/genai";

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

Serviços oferecidos:
1. Seguro Auto (carro, moto, frota)
2. Planos de Saúde (individual, familiar, empresarial)
3. Seguro Residencial
4. Seguro de Vida
5. Seguro Empresarial
6. Seguro Viagem

Instruções de Resposta:
- Deixe claro que pesquisamos em todas as empresas do Brasil para o cliente.
- Não mencione "Seguro Pet".
- Seja profissional, empático e tecnológico.
- Responda sempre em Português do Brasil de forma concisa.
`;

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      console.error("ERRO: API_KEY não detectada.");
      return "Olá! A minha chave de acesso (API_KEY) não foi detectada. Certifique-se de que você a adicionou nas variáveis de ambiente do Vercel com o nome exato 'API_KEY' e fez um novo Deploy.";
    }

    const ai = new GoogleGenAI({ apiKey });

    // A API do Gemini EXIGE que a conversa comece com um 'user'.
    // Como nossa primeira mensagem no componente é da 'IA' (model), 
    // precisamos filtrar o histórico para enviar apenas a partir do primeiro input do usuário.
    const filteredHistory = history.filter((msg, index) => {
      if (index === 0 && msg.role === 'model') return false;
      return true;
    });

    const contents = [
      ...filteredHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userPrompt }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
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
    console.error("Gemini API Error Details:", error);
    
    const errorMsg = error.message || "";
    
    if (errorMsg.includes("API key not valid") || errorMsg.includes("403")) {
      return "Sua chave de API parece inválida. Verifique se copiou o código corretamente do Google AI Studio.";
    }
    
    if (errorMsg.includes("429")) {
      return "Recebi muitas solicitações agora. Por favor, aguarde um instante ou fale conosco no WhatsApp (11) 97976-1882.";
    }
    
    return "Olá! Tive um problema técnico ao processar sua dúvida. Pode ser uma instabilidade temporária. Enquanto eu me recupero, você pode falar com nosso time humano no WhatsApp: (11) 97976-1882";
  }
};
