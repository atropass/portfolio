import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Aibar Berekeyev. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Aibar Berekeyev — a 22-year-old Data Scientist & ML Engineer from Kazakhstan. I work at EPAM building LLM-powered systems and co-founded a startup focused on applied GenAI. I specialize in RAG pipelines, agentic workflows, and scalable NLP. I love solving real problems with AI, shipping fast, and mentoring others along the way.",
    };
  },
});
