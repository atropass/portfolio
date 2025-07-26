import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool shows public-facing projects or side works by Aibar. Use it when the user asks to see portfolio, repos, or demos.",
  parameters: z.object({}),
  execute: async () => {
    return `
Most of my production-grade work is under NDA or hosted on private GitLab instances (corporate clients, internal tools, etc).  
But don't worry — public writeups, RAG demos, and side tools are in the works and will be dropped here soon.

Meanwhile, here’s the type of stuff I usually build:
- LLM-powered assistants with retrieval, filtering, and memory
- Agentic pipelines using LangGraph / ReAct-style orchestration
- SaaS-style AI tools for e-commerce, internal search, or compliance
- Custom vector search stacks (Qdrant/Chroma + metadata + rerankers)

💡 Wanna see something specific? Just ask — I might have a demo version I can share.
    `.trim();
  },
});
