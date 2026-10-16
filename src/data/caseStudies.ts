export type ServiceSlug =
  | "ai-receptionist"
  | "ai-lead-generation"
  | "linkedin-bdr"
  | "automated-follow-ups"
  | "outbound-ai-calling"
  | "whatsapp-and-chat-agents"
  | "crm-and-workflow-setup";

export interface CaseStudy {
  slug: string;
  clientLabel: string;
  /** Internal only. Never render unless clientNameApproved is true. */
  clientName: string;
  clientNameApproved: boolean;
  tags: ServiceSlug[];
  title: string;
  summary: string;
  problem: string;
  built: string[];
  facts: { label: string; value: string }[];
  stack: string[];
  flow: string[];
  featured: true;
}

interface UnfeaturedCaseStudy {
  slug: string;
  clientName: string;
  title: string;
  featured: false;
}

export const caseStudies: (CaseStudy | UnfeaturedCaseStudy)[] = [
  {
    slug: "vino-voice-receptionist",
    clientLabel: "Design-build contractor",
    clientName: "Vino Design & Build",
    clientNameApproved: false,
    tags: ["ai-receptionist", "crm-and-workflow-setup"],
    title: "AI voice receptionist for inbound calls",
    summary: "A virtual front desk that answers inbound calls, captures new leads, supports existing clients, and logs everything to the CRM.",
    problem: "The business needed inbound calls handled naturally, with new leads captured and existing clients supported, without a full-time receptionist.",
    built: [
      "A voice agent built on GoHighLevel and ElevenLabs that understands why the caller is calling.",
      "Adapts the conversation to what the CRM already knows about the caller.",
      "Collects project and contact details and sends them to the CRM by webhook.",
      "Escalates to a person when the call needs one.",
    ],
    facts: [{ label: "Lead capture", value: "Structured CRM data on every call" }],
    stack: ["GoHighLevel", "ElevenLabs", "OpenAI", "Webhooks"],
    flow: ["Inbound call", "Voice agent", "Intent and CRM lookup", "Collect details", "Webhook to CRM", "Escalate to a person when needed"],
    featured: true,
  },
  {
    slug: "agi-bilingual-receptionist",
    clientLabel: "Driving school",
    clientName: "AGI Driving Academy",
    clientNameApproved: false,
    tags: ["ai-receptionist"],
    title: "Bilingual AI receptionist for booking and customer care",
    summary: "Answers calls in two languages, books lessons, texts the confirmation, and hands off to a person when needed.",
    problem: "A driving school needed inbound calls handled in two languages, from general questions to booking a lesson, without a receptionist on every line.",
    built: [
      "A conversational AI agent that answers inbound calls in two languages.",
      "Handles common questions and books appointments directly into the scheduling system.",
      "Sends an automatic SMS confirmation after each booking.",
      "Hands the call to customer care when a person is needed instead of guessing.",
    ],
    facts: [
      { label: "Languages", value: "2" },
      { label: "Booking confirmation", value: "Automatic SMS on every booking" },
      { label: "Escalation", value: "Automatic handoff to customer care" },
    ],
    stack: ["Voice AI agent", "Appointment scheduling integration", "SMS automation", "CRM and escalation routing"],
    flow: ["Inbound call", "Language detected", "Answer or book", "SMS confirmation", "Handoff to customer care when needed"],
    featured: true,
  },
  {
    slug: "vino-followup-calling",
    clientLabel: "Design-build contractor",
    clientName: "Vino Design & Build",
    clientNameApproved: false,
    tags: ["automated-follow-ups", "outbound-ai-calling"],
    title: "AI follow-up calls to re-engage cold leads",
    summary: "An outbound voice agent calls leads that went quiet, sounds like a calm team member, and updates the CRM from the outcome.",
    problem: "Leads were going cold because nobody had time to make follow-up calls.",
    built: [
      "An outbound voice agent built with ElevenLabs, n8n, and Twilio.",
      "Works out whether the lead wants an estimate overview call, wants to reconnect later, or is no longer interested.",
      "Handles voicemail.",
      "Updates the lead status in the CRM automatically.",
    ],
    facts: [
      { label: "Outcomes classified", value: "3 (book, later, not interested)" },
      { label: "Manual follow-up calls", value: "Eliminated" },
    ],
    stack: ["ElevenLabs", "n8n", "Twilio", "OpenAI", "CRM webhooks"],
    flow: ["Lead list", "Outbound call", "Outcome detected", "Book, reconnect later, or close", "CRM status updated"],
    featured: true,
  },
  {
    slug: "sellersfirst-lead-qualification",
    clientLabel: "Real estate company",
    clientName: "SellersFirst",
    clientNameApproved: false,
    tags: ["automated-follow-ups", "outbound-ai-calling", "whatsapp-and-chat-agents"],
    title: "AI lead qualification and appointment booking",
    summary: "Every new lead is texted or called right away, qualified, and booked into a calendar, day or night.",
    problem: "A real estate operation needed every new lead contacted immediately, qualified, and booked without receptionists handling each conversation.",
    built: [
      "An n8n workflow that texts or AI-calls each new lead.",
      "Classifies intent and replies over SMS, keeping the conversation history.",
      "Respects business hours and calls from local area codes.",
      "Books appointments through Calendly.",
      "Extracts structured details such as seller motivation, property information, and appointment status.",
      "Hands over to a person when it matters and syncs call transcripts to the CRM.",
    ],
    facts: [{ label: "Coverage", value: "24/7" }],
    stack: ["n8n", "Claude", "ElevenLabs", "Twilio", "Calendly", "Salesforce", "Google Sheets"],
    flow: ["New lead", "Text or AI call", "Qualify and reply", "Book in Calendly", "Transcript and data to CRM"],
    featured: true,
  },
  {
    slug: "fasttranslate-outbound",
    clientLabel: "Translation company",
    clientName: "Fast Translate IO LLC",
    clientNameApproved: false,
    tags: ["ai-lead-generation"],
    title: "Lead sourcing and personalized cold email system",
    summary: "Finds leads, researches each company, writes personalized emails, runs the follow-ups, and sends a weekly report.",
    problem: "The business needed a full outbound pipeline for finding leads, personalizing outreach, and tracking results without a sales ops team.",
    built: [
      "Sources leads from Apollo.io and researches each company.",
      "Writes personalized emails with Claude.",
      "Enrolls leads into Instantly campaigns with follow-up sequences based on engagement.",
      "Generates a weekly HTML performance report.",
    ],
    facts: [{ label: "Reporting", value: "Automated weekly reports" }],
    stack: ["n8n", "Apollo.io", "Claude API", "Instantly", "Google Sheets", "WordPress REST API"],
    flow: ["Lead sourcing", "Company research", "Personalized email", "Follow-up sequence", "Weekly report"],
    featured: true,
  },
  {
    slug: "platinumlist-instagram-rag",
    clientLabel: "Events company",
    clientName: "PlatinumList",
    clientNameApproved: false,
    tags: ["whatsapp-and-chat-agents"],
    title: "Instagram comment replies from live event data",
    summary: "Reads comments, finds the right event details, and replies in the brand's voice, with a safety filter for spam and aggressive comments.",
    problem: "The team could not keep up with Instagram comments asking about events, and risky comments had to be caught before any reply went out.",
    built: [
      "An n8n workflow that reads Instagram comment events and works out what the person is asking.",
      "Looks up matching events with semantic search, then writes a human-sounding reply.",
      "A safety layer (Lakera) that detects spam and aggression before replying.",
      "Escalation logic for support cases.",
    ],
    facts: [
      { label: "Safety layer", value: "Spam and aggression detection built in" },
      { label: "Replies", value: "Automatic" },
    ],
    stack: ["n8n", "Instagram Graph API", "OpenAI", "Supabase Vector Store", "Lakera AI"],
    flow: ["Instagram comment", "Understand intent", "Find event details", "Safety check", "Reply or escalate"],
    featured: true,
  },
  {
    slug: "hax-haxmind-assistant",
    clientLabel: "Consulting firm",
    clientName: "HAX Consulting",
    clientNameApproved: false,
    tags: ["whatsapp-and-chat-agents"],
    title: "Internal AI assistant for company knowledge",
    summary: "Employees ask a question and get the answer from the company's own SOPs. It can also send follow-up emails on request.",
    problem: "Employees needed quick, accurate answers from SOPs instead of digging through documents.",
    built: [
      "A chatbot that searches the company's SOP library by meaning, not just keywords.",
      "Answers using OpenAI based on the retrieved content.",
      "Can send emails to employees on request through n8n workflows.",
    ],
    facts: [{ label: "Actions", value: "Answers plus automated emails" }],
    stack: ["OpenAI", "Supabase (pgvector, Auth)", "n8n"],
    flow: ["Employee question", "Search SOP library", "Answer", "Optional email sent through workflow"],
    featured: true,
  },
  {
    slug: "hax-onboarding-automation",
    clientLabel: "Consulting firm",
    clientName: "HAX Consulting",
    clientNameApproved: false,
    tags: ["crm-and-workflow-setup"],
    title: "CRM to Microsoft Teams client onboarding",
    summary: "A form submission creates the contact, the opportunity, and a private Teams channel, then posts stage updates automatically.",
    problem: "Every new client needed a dedicated Teams channel and regular progress updates, all set up by hand.",
    built: [
      "A GoHighLevel form submission creates the contact and opportunity.",
      "Zapier creates a named, described private Teams channel for the client.",
      "Each stage change from Week 1 to Week 4 posts a templated message to that channel.",
    ],
    facts: [
      { label: "Channel setup", value: "Manual to automatic" },
      { label: "Stage updates", value: "4 templated, auto-posted" },
    ],
    stack: ["GoHighLevel", "Zapier", "Microsoft Teams", "Google Sheets", "Webhooks"],
    flow: ["Form submitted", "Contact and opportunity created", "Teams channel created", "Stage updates posted"],
    featured: true,
  },
  {
    slug: "sellersfirst-sheets-monday-sync",
    clientLabel: "Real estate company",
    clientName: "SellersFirst",
    clientNameApproved: false,
    tags: ["crm-and-workflow-setup"],
    title: "Google Sheets and Monday.com two-way sync",
    summary: "One click keeps the deal sheet and the Monday board in agreement, with no double entry.",
    problem: "Operations teams tracked deals in both Google Sheets and Monday.com, and the two were constantly out of date.",
    built: [
      "A Google Apps Script with menu buttons inside the sheet.",
      "Pulls deal data from Monday into Sheets and pushes edits back, with batching and retries to respect API limits.",
      "Covers purchase price, sales price, expenses, escrow dates, deposits, liens, and notes.",
    ],
    facts: [
      { label: "Manual data entry", value: "Eliminated" },
      { label: "Sync direction", value: "Two-way" },
    ],
    stack: ["Google Apps Script", "Google Sheets", "Monday.com GraphQL API"],
    flow: ["Edit in Sheets or Monday", "Menu button", "Sync both ways", "Both systems match"],
    featured: true,
  },

  // TODO: Add the client name and title supplied by the owner for each non-featured case.
  { slug: "5dot-deepfake-detection-app", clientName: "", title: "", featured: false },
  { slug: "sf-voice-ai-sales-coach", clientName: "", title: "", featured: false },
  { slug: "sellersfirst-call-scoring", clientName: "", title: "", featured: false },
  { slug: "referrizer-video-automation", clientName: "", title: "", featured: false },
  { slug: "hax-vault-sop-manager", clientName: "", title: "", featured: false },
  { slug: "hax-insights-dashboard", clientName: "", title: "", featured: false },
  { slug: "hax-asana-reports", clientName: "", title: "", featured: false },
  { slug: "vino-sop-voice-guide", clientName: "", title: "", featured: false },
  { slug: "platinumlist-talkey-ecosystem", clientName: "", title: "", featured: false },
  { slug: "platinumlist-event-embedding", clientName: "", title: "", featured: false },
  { slug: "platinumlist-talkey-dashboard", clientName: "", title: "", featured: false },
  { slug: "platinumlist-slack-asana", clientName: "", title: "", featured: false },
  { slug: "platinumlist-form-submission-agent", clientName: "", title: "", featured: false },
  { slug: "platinumlist-typeform-playwright", clientName: "", title: "", featured: false },
  { slug: "moveon-removals-platform", clientName: "", title: "", featured: false },
];

export const featuredCaseStudies = caseStudies.filter(
  (study): study is CaseStudy => study.featured,
);

// TODO: Confirm the AGI Driving Academy client name before it is approved for public display.
// TODO screenshots: vino-voice-receptionist, agi-bilingual-receptionist, vino-followup-calling,
// sellersfirst-lead-qualification, fasttranslate-outbound, platinumlist-instagram-rag,
// hax-haxmind-assistant, hax-onboarding-automation, sellersfirst-sheets-monday-sync.
// TODO audio: public/case-studies/vino-voice-receptionist/call.mp3.
// TODO audio: public/case-studies/agi-bilingual-receptionist/call.mp3.
// TODO audio: public/case-studies/vino-followup-calling/call.mp3.
// TODO client approval: keep all nine client names internal until clientNameApproved is changed.
