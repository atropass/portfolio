import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship or opportunity I'm open to, plus contact info. Use this when someone asks about my internship experience or how to reach me for offers.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s the deal 👇

- 📅 **Availability**: Open to New Grad positions.
- 🌍 **Location**: Remote-first or on-site in **Europe**, **US** (*with J-1 sponsorship*), or **Asia** if it's spicy enough 🇰🇿
- 💡 **Focus**: AI/LLM infrastructure, agentic pipelines, custom RAG systems, or anything GenAI with real-world mess
- 🧠 **Interests**: long-context modeling, hybrid retrieval, metadata games, tool use, orchestration, and AI-native SaaS
- 💼 **Stack**: Python, LangChain, LangGraph, Qdrant, FastAPI, Next.js, Hugging Face, Docker, GitLab CI/CD, you name it
- 🎯 **What I bring**: Production LLM apps, mentoring, shipped bots, custom protocols, infra thinking, and **speed**
- 🥷 Not just “curious about AI” — I build it, test it, break it, fix it. No fluffy BS.

📬 Wanna build cool shit or need GenAI help?

- Email: aibar.berekeyev@gmail.com  
- LinkedIn: [linkedin.com/in/aibarberekeyev-794250250](https://www.linkedin.com/in/aibarberekeyev-794250250)  
- GitHub: [github.com/atropass](https://github.com/atropass)

Ping me if your stack is chaotic and your problem’s juicy. Otherwise… good luck 🤞`;
  },
});
