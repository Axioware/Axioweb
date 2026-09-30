export interface CaseStudy {
  slug: string;
  title: string;
  client?: string;
  clientWebsite?: string;
  industry: string;
  summary: string;
  challenge?: string;
  solution?: string;
  capabilities?: string[];
  outcome?: string;
  projectDescription?: string;
  tools?: string[];
  techStack?: string[];
  projectGoals?: string[];
  image: string;
  testimonial?: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hax-vault",
    title: "HAX Vault",
    client: "HAX Consulting",
    clientWebsite: "https://haxconsulting.com/",
    industry: "Knowledge Management",
    summary: "A full-stack SOP management platform with rich-text documents, nested folders, role-based access, auto-save, and AI-powered semantic search.",
    projectDescription: "HAX Vault is a full-stack web application for centralizing internal SOPs in a structured, Notion-style document system. Teams can create, organize, and edit rich-text documents in nested folders, with auto-save, role-based access, and a recycle bin for safe deletion. Supabase provides authentication, database, and storage, while n8n powers AI-based search using embeddings so users can find relevant SOPs by title and content. The platform turns static documentation into a dynamic, searchable knowledge system and lays the foundation for a future custom AI chatbot.",
    tools: ["Supabase", "n8n", "Zapier"],
    techStack: ["Frontend: Vite + React", "Backend: Python", "Vector database: Supabase", "Hosting: Vercel and Lovable Cloud", "Database: Supabase"],
    projectGoals: [
      "Deliver a rich content editor tailored for HAX Consulting",
      "Centralize internal document management",
      "Automatically embed and index saved documents",
      "Make SOPs searchable by title and content",
      "Create a knowledge foundation for a future custom AI chatbot",
      "Support accurate retrieval of SOPs, policies, and internal documentation",
    ],
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//assets.cdn.filesafe.space/BGL3ZjGmMr1ajpXNKlhX/media/63ed48a44db3b965e42c8d96.png",
  },
  {
    slug: "vino-design-build-ai-follow-up-calling-system",
    title: "AI Follow-Up Calling System",
    client: "Vino Design & Build",
    clientWebsite: "https://vinodesignbuild.com/",
    industry: "AI & Automation",
    summary: "A human-like outbound voice assistant that follows up with Vino Design & Build leads, identifies their intent, and updates lead statuses through automated workflows.",
    projectDescription: "The AI Follow-Up Calling System is an outbound voice automation solution for re-engaging leads through natural, conversational calls. Built with ElevenLabs voice agents and n8n workflows, it acts as a calm, professional follow-up consultant focused on understanding lead intent and guiding each person toward an appropriate next step. It determines whether a lead wants to schedule an Estimate Overview call, reconnect later, or is no longer interested, then updates lead statuses through n8n automations. The conversation design prioritizes realism, brevity, contextual awareness, voicemail handling, and clear conversational guardrails.",
    tools: ["ElevenLabs", "n8n", "Twilio", "CRM integrations", "OpenAI APIs"],
    techStack: ["Conversational Voice AI", "ElevenLabs Voice Agents", "n8n workflow automation", "CRM automation", "Webhook-based lead updates"],
    projectGoals: [
      "Automate outbound lead follow-up operations",
      "Increase lead engagement efficiency",
      "Reduce manual outbound calling workload",
      "Provide natural, human-like phone interactions",
      "Improve lead qualification and status tracking",
      "Automate appointment scheduling workflows",
      "Standardize follow-up communication processes",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
  },
  {
    slug: "ai-voice-receptionist-system",
    title: "AI Voice Receptionist System",
    industry: "AI & Automation",
    summary: "A conversational AI receptionist that handles inbound calls, captures and qualifies leads, assists existing clients, and routes enquiries through CRM-aware workflows.",
    projectDescription: "The AI Voice Receptionist System is a conversational receptionist designed to handle inbound customer calls with natural, human-like interactions. It understands caller intent, collects structured information, assists existing clients, and routes or escalates calls when needed. Built using GoHighLevel (GHL), AI conversational workflows, and webhook-based automations, it adapts conversations using CRM data, client context, and caller intent. Its prompt architecture supports contextual memory, intelligent question flows, escalation handling, and operational guardrails.",
    tools: ["GoHighLevel", "CRM integrations", "OpenAI APIs", "ElevenLabs"],
    techStack: ["AI conversational agents", "Voice AI processing", "GoHighLevel CRM", "Webhook automation"],
    projectGoals: [
      "Automate receptionist and inbound call operations",
      "Provide natural, human-like conversational experiences",
      "Reduce manual receptionist workload",
      "Improve lead capture and qualification",
      "Maintain structured CRM data collection",
      "Increase response efficiency for inbound enquiries",
      "Enable scalable AI-powered customer intake operations",
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&auto=format&fit=crop&q=80",
  },
  {
    slug: "vino-design-build-sop-guide",
    title: "Vino Design & Build SOP Guide",
    client: "Vino Design & Build",
    clientWebsite: "https://vinodesignbuild.com/",
    industry: "Design & Build",
    summary: "An AI-powered internal knowledge assistant that helps employees find answers in standard operating procedures and operational documents.",
    projectDescription: "The Vino Design & Build SOP Guide is an internal knowledge assistant built with ElevenLabs conversational agents and a Retrieval-Augmented Generation (RAG) knowledge base. Employees can ask questions in natural language and receive concise, contextual answers drawn from the SOP and operational documentation, without searching through lengthy files manually. An n8n workflow periodically fetches SOP documents from SmartSuite, cleans and structures them into knowledge chunks, and refreshes the RAG knowledge base so it reflects the latest documentation.",
    tools: ["ElevenLabs", "n8n", "SmartSuite", "OpenAI APIs", "Vector database / RAG infrastructure"],
    techStack: ["AI conversational agent architecture", "Retrieval-Augmented Generation (RAG)", "n8n workflow automation", "SmartSuite API integrations", "Knowledge base processing and embedding pipelines"],
    projectGoals: [
      "Centralize internal SOP access for employees",
      "Reduce time spent searching documentation",
      "Improve onboarding and operational efficiency",
      "Automate SOP document synchronization and updates",
      "Increase accuracy and consistency in employee guidance",
      "Create a scalable AI-driven knowledge management system",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
  },
];
