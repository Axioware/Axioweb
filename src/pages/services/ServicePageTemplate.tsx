import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import CTASection from "@/components/CTASection";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/components/SEO";
import ServicePageExpansion, { type ServicePageExpansionData } from "@/components/services/ServicePageExpansion";
import RelatedWorkSection from "@/components/case-studies/RelatedWorkSection";
import type { ServiceSlug } from "@/data/caseStudies";

export interface ServicePageContent {
  slug: ServiceSlug;
  label: string;
  homeHeadline?: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  whatItDoes: string[];
  faqs: { question: string; answer: string }[];
  showReceptionistDemo?: boolean;
  expansion?: ServicePageExpansionData;
}

export const servicePages: Record<string, ServicePageContent> = {
  "ai-receptionist": {
    slug: "ai-receptionist",
    label: "AI Receptionist",
    homeHeadline: "Never miss a call again.",
    h1: "AI Receptionist for Calls and Appointments",
    subhead: "Your AI receptionist answers every call, handles common questions, and books appointments into your calendar. Your staff step in only when needed.",
    metaTitle: "AI Receptionist for Small Businesses",
    metaDescription: "An AI receptionist that answers every call, handles common questions, and books appointments into your calendar. Staff step in only when needed.",
    showReceptionistDemo: true,
    whatItDoes: [
      "Answers every call, day and night",
      "Handles common questions about your services, hours, and policies",
      "Books, reschedules, and confirms appointments in your calendar",
      "Sends the details to your CRM and texts a confirmation",
      "Hands the call to your staff when a person is needed",
    ],
    faqs: [
      { question: "Will callers know it is an AI?", answer: "That depends on how you set it up. We can have it say at the start that it is an AI assistant, and we recommend being open about it." },
      { question: "What happens if it cannot answer a question?", answer: "It takes a message with the caller's details or transfers the call to your team, depending on the rules we set with you." },
      { question: "Does it work after hours?", answer: "Yes. It answers whenever a call comes in, including evenings, weekends, and when your team is busy." },
      { question: "Can it book into my existing calendar?", answer: "We connect it to your calendar or booking tool so it only offers times that are open. Ask us about your specific tool." },
    ],
    expansion: {
      overview: {
        heading: "AI receptionist for calls and appointments",
        paragraphs: [
          "The AI receptionist answers incoming calls, handles common questions about your services, hours, and policies, and books appointments into your calendar.",
          "It can reschedule and confirm appointments, send caller details to your CRM, and hand the call to your staff when a person is needed.",
        ],
      },
      whatItDoesHeading: "What your AI receptionist handles",
      whatItDoes: [
        { title: "Answers every call", description: "Picks up right away, day and night, including when your team is busy or the office is closed." },
        { title: "Answers common questions", description: "Covers your services, hours, location, and policies using the information you give us." },
        { title: "Books and reschedules", description: "Checks your calendar, offers open times, confirms the booking, and texts the caller a confirmation." },
        { title: "Logs everything", description: "Sends caller details and a summary of each call to your CRM, so nothing depends on someone's notes." },
        { title: "Hands over when needed", description: "Transfers the call or takes a message when the caller needs a person." },
      ],
      example: {
        heading: "What a call looks like",
        label: "Illustrative example",
        items: [
          "Caller: Hi, I'd like to book a cleaning for next week.",
          "Receptionist: Of course. Are you a new or existing patient?",
          "Caller: New.",
          "Receptionist: Welcome. I have Tuesday at 10:00 or Thursday at 2:30. Which works better?",
          "Caller: Thursday.",
          "Receptionist: Booked for Thursday at 2:30. I'm sending a confirmation to your phone now, and the details are with the team.",
        ],
      },
      howItWorks: {
        heading: "How your AI receptionist gets set up",
        steps: [
          { title: "We learn how you handle calls.", description: "Your services, hours, common questions, booking rules, and when a call should go to a person." },
          { title: "We build and test your receptionist.", description: "We set the voice, connect your calendar and CRM, and run test calls on real scenarios." },
          { title: "It goes live and we review the calls.", description: "We go through real calls with you and adjust answers and handoffs." },
        ],
      },
      worksWith: "Your calendar and CRM, including GoHighLevel, Salesforce, and Calendly.",
      whoItIsFor: {
        heading: "Who uses an AI receptionist",
        items: [
          "Dental clinics: New patient calls, bookings, reschedules, and basic questions while the front desk is with patients.",
          "Insurance agencies: Quote requests and callback details captured while agents are on other calls.",
          "Other service businesses: Any business where a call usually means a booking or a quote request.",
        ],
      },
      faqs: [
        { question: "Will callers know it is an AI?", answer: "That depends on how you set it up. We can have it say at the start that it is an AI assistant, and we recommend being open about it." },
        { question: "What happens if it cannot answer a question?", answer: "It takes a message with the caller's details or transfers the call to your team, depending on the rules we set with you." },
        { question: "Does it work after hours?", answer: "Yes. It answers whenever a call comes in, including evenings, weekends, and when your team is busy." },
        { question: "Can it book into my existing calendar?", answer: "We connect it to your calendar or booking tool so it only offers times that are open. Ask us about your specific tool." },
      ],
      relatedServices: ["automated-follow-ups", "whatsapp-and-chat-agents", "crm-and-workflow-setup"],
    },
  },
  "ai-lead-generation": {
    slug: "ai-lead-generation",
    label: "AI Lead Generation",
    homeHeadline: "Too many hours go to the wrong leads.",
    h1: "AI Lead Generation for Qualified Prospects",
    subhead: "We research each prospect, score them against what you look for, and send you a short list with the reasoning behind each one.",
    metaTitle: "AI Lead Generation",
    metaDescription: "We find businesses that fit your ideal customer, research and score each one, and send you a short list worth contacting.",
    whatItDoes: [
      "Finds businesses that match your ideal customer",
      "Researches each company before anyone contacts it",
      "Scores every prospect against your criteria and shows the reasoning",
      "Writes a personalized first message for each one",
      "Sends you a short list and a weekly report",
    ],
    faqs: [
      { question: "How does it decide which businesses are a fit?", answer: "We agree on your criteria first: type of business, size, location, services, and any deal-breakers. The system scores each prospect against them and records the reasons, so you can review and adjust." },
      { question: "Does the service contact prospects?", answer: "It drafts the first message for each prospect. Whether messages are sent automatically or reviewed by you first is your choice." },
      { question: "What information do I receive?", answer: "A short list of qualified prospects with a score, the reasoning, the evidence found, and a draft message, plus a weekly report." },
      { question: "Where does the prospect data come from?", answer: "Public sources such as business websites and listings, and lead databases such as Apollo.io." },
    ],
    expansion: {
      overview: {
        heading: "AI lead generation for focused prospecting",
        paragraphs: [
          "AI lead generation finds businesses that match your ideal customer profile, researches each company, and scores prospects against criteria you provide.",
          "Your team receives a focused list with the reasoning behind each score, along with a personalized first message and a weekly report.",
        ],
      },
      whatItDoesHeading: "What you get",
      whatItDoes: [
        { title: "Finds matching businesses", description: "Builds a list from your ideal customer profile: type of business, size, location, and services." },
        { title: "Researches each company", description: "Reads the website and public information to understand what the business does before anyone reaches out." },
        { title: "Scores and explains", description: "Rates each prospect against your criteria and records why. Businesses that clearly do not fit are dropped, so they never reach your team." },
        { title: "Writes the first message", description: "Drafts a personalized opening message based on what the research found." },
        { title: "Delivers a short list", description: "Sends the qualified prospects with their scores and reasoning, plus a weekly report." },
      ],
      example: {
        heading: "What a scored prospect looks like",
        label: "Illustrative example, not a real business",
        items: [
          "Prospect A: Independent dental practice, two dentists, takes new patient bookings online.",
          "Score: 8 out of 10.",
          "Why: Matches target size and service. No sign of after-hours phone coverage.",
          "Draft opener: \"Hi [Name], I saw you take new patient bookings online. Do calls outside office hours get answered?\"",
          "Prospect B: Dental group with more than 40 locations and a central call center.",
          "Result: Disqualified. Outside the target size.",
        ],
      },
      howItWorks: {
        heading: "How lead generation gets set up",
        steps: [
          { title: "We define your ideal customer.", description: "Who you sell to, what makes a good fit, and what rules a prospect out." },
          { title: "We build the research and scoring.", description: "We set up the research steps and scoring rules, then test them on a sample list with you." },
          { title: "You get a short list on a schedule.", description: "Qualified prospects arrive with scores and reasoning, plus a weekly report. We tune the criteria as you give feedback." },
        ],
      },
      worksWith: "Apollo.io, Instantly, Google Sheets, GoHighLevel, and n8n.",
      whoItIsFor: {
        heading: "Who uses AI lead generation",
        items: [
          "Service businesses that sell to other businesses and need a steady list of qualified prospects.",
          "Agencies and consultants who do their prospecting by hand today.",
          "Sales teams that want to spend their time on conversations instead of research.",
        ],
      },
      faqs: [
        { question: "How does it decide which businesses are a fit?", answer: "We agree on your criteria first: type of business, size, location, services, and any deal-breakers. The system scores each prospect against them and records the reasons, so you can review and adjust." },
        { question: "Does the service contact prospects?", answer: "It drafts the first message for each prospect. Whether messages are sent automatically or reviewed by you first is your choice." },
        { question: "What information do I receive?", answer: "A short list of qualified prospects with a score, the reasoning, the evidence found, and a draft message, plus a weekly report." },
        { question: "Where does the prospect data come from?", answer: "Public sources such as business websites and listings, and lead databases such as Apollo.io." },
      ],
      relatedServices: ["linkedin-bdr", "outbound-ai-calling", "automated-follow-ups"],
    },
  },
  "linkedin-bdr": {
    slug: "linkedin-bdr",
    label: "LinkedIn BDR",
    homeHeadline: "Spend your time on calls, not on LinkedIn messages.",
    h1: "LinkedIn BDR for Outreach and Meetings",
    subhead: "We run your outreach, handle the replies, and book interested prospects onto your calendar. You step in for the conversation that matters.",
    metaTitle: "LinkedIn BDR",
    metaDescription: "We run your LinkedIn outreach, handle replies, and book interested prospects onto your calendar, so you only join the meetings.",
    whatItDoes: [
      "Targets the right people based on your ideal customer profile",
      "Sends connection requests and messages every day",
      "Handles replies and follow-ups",
      "Books interested prospects onto your calendar",
      "Leaves the real conversations to you",
    ],
    faqs: [
      { question: "Will the messages sound automated?", answer: "Messages are short and specific to the person, and we write them with you so they sound like you. When a prospect wants a real conversation, it goes to you." },
      // TODO: OWNER TO CONFIRM whether the Sales Navigator advice matches how you work.
      { question: "Do I need LinkedIn Sales Navigator?", answer: "It helps with precise targeting. We will recommend the setup that fits your audience." },
      // TODO: OWNER TO CONFIRM FAQ 3 and FAQ 4 wording before publishing.
      { question: "Who handles the replies?", answer: "Common replies are handled for you, and anything that needs a real conversation is passed to you." },
      { question: "Is this safe for my LinkedIn account?", answer: "LinkedIn limits automated activity, so we keep outreach at a steady, modest daily volume and avoid aggressive tactics. No tool can remove all risk to an account." },
    ],
    expansion: {
      overview: {
        heading: "LinkedIn BDR for outreach and follow-up",
        paragraphs: [
          "LinkedIn BDR targets people who match your ideal customer profile, sends connection requests and messages, and handles replies and follow-ups.",
          "Interested prospects are booked onto your calendar, so you can focus on the conversations that matter.",
        ],
      },
      whatItDoesHeading: "What we handle on LinkedIn",
      whatItDoes: [
        { title: "Targets the right people", description: "Builds your prospect list from your ideal customer profile: role, industry, company size, and location." },
        { title: "Connects and messages daily", description: "Sends connection requests and opening messages at a steady daily pace." },
        { title: "Handles replies and follow-ups", description: "Responds to common replies and follows up with people who go quiet." },
        { title: "Books meetings", description: "Moves interested prospects to a booking link and puts the meeting on your calendar." },
        { title: "Leaves real conversations to you", description: "When a prospect wants to talk in depth, you take over with the full history in front of you." },
      ],
      example: {
        heading: "What an outreach sequence looks like",
        label: "Illustrative example",
        ordered: true,
        items: [
          "Day 1: A short connection request that mentions something specific to their role.",
          "Day 3: After they accept, a brief message about a problem relevant to their business, ending with one question.",
          "Day 7: If there is no reply, one follow-up from a different angle.",
          "When someone replies with interest: They get a booking link, and the meeting appears in your calendar.",
        ],
      },
      howItWorks: {
        heading: "How LinkedIn outreach gets set up",
        steps: [
          { title: "We define who to reach and what to say.", description: "Your ideal customer, your offer, and the tone you want in messages." },
          { title: "We set up and test the outreach.", description: "Profile review, message drafts, targeting, and a test run with a small group." },
          { title: "Outreach runs daily and you see the results.", description: "You can see the conversations and booked meetings, and we adjust messaging based on the replies." },
        ],
      },
      worksWith: "LinkedIn, Sales Navigator, GoHighLevel, n8n, and Zapier.",
      whoItIsFor: {
        heading: "Who uses LinkedIn BDR",
        items: [
          "Founders and owners who know LinkedIn works but do not have time for it.",
          "Agencies and service firms that sell to decision makers.",
          "Professional businesses that want a steady flow of conversations without a full-time hire.",
        ],
      },
      faqs: [
        { question: "Will the messages sound automated?", answer: "Messages are short and specific to the person, and we write them with you so they sound like you. When a prospect wants a real conversation, it goes to you." },
        // TODO: OWNER TO CONFIRM whether the Sales Navigator advice matches how you work.
        { question: "Do I need LinkedIn Sales Navigator?", answer: "It helps with precise targeting. We will recommend the setup that fits your audience." },
        // TODO: OWNER TO CONFIRM FAQ 3 and FAQ 4 wording before publishing.
        { question: "Who handles the replies?", answer: "Common replies are handled for you, and anything that needs a real conversation is passed to you." },
        { question: "Is this safe for my LinkedIn account?", answer: "LinkedIn limits automated activity, so we keep outreach at a steady, modest daily volume and avoid aggressive tactics. No tool can remove all risk to an account." },
      ],
      relatedServices: ["ai-lead-generation", "automated-follow-ups", "crm-and-workflow-setup"],
    },
  },
  "automated-follow-ups": {
    slug: "automated-follow-ups",
    label: "Automated Follow-Ups",
    homeHeadline: "The lead went quiet and nobody followed up.",
    h1: "Automated Follow-Ups for Leads and Customers",
    subhead: "A call goes unreturned, a quote sits unanswered, a patient skips an appointment. We set up follow-ups that go out on time without adding to anyone's workload.",
    metaTitle: "Automated Follow-Ups",
    metaDescription: "Automatic follow-ups for missed calls, no-shows, and unanswered quotes, by text, email, or call, with your CRM updated each time.",
    whatItDoes: [
      "Texts back missed callers",
      "Reminds and rebooks no-shows",
      "Chases quotes that have gone unanswered",
      "Re-engages old leads on a schedule you choose",
      "Updates the CRM after every step",
    ],
    faqs: [
      { question: "What channels does it use?", answer: "Text, email, and phone calls, depending on the follow-up and what you prefer." },
      { question: "Will it keep messaging someone who already replied?", answer: "No. Each sequence stops as soon as the person replies or books, so nobody gets a message that no longer applies." },
      { question: "Can I control the wording and timing?", answer: "Yes. We write the messages with you, and you approve the timing and the rules for when each sequence starts and stops." },
      { question: "Does it work with my CRM?", answer: "We build follow-ups in GoHighLevel and connect other tools through n8n or Zapier. Ask us about yours." },
    ],
    expansion: {
      overview: {
        heading: "Automated follow-ups for every lead",
        paragraphs: [
          "Automated follow-ups send messages after missed calls, appointment no-shows, unanswered quotes, and older leads, using rules you choose.",
          "The system can re-engage leads on a schedule and update your CRM after each step, helping your team keep track of every follow-up.",
        ],
      },
      whatItDoesHeading: "What gets followed up automatically",
      whatItDoes: [
        { title: "Missed call text-back", description: "Texts people who called and did not get through, with a link to book or reply." },
        { title: "No-show recovery", description: "Reminds people before appointments and offers a new time if they miss one." },
        { title: "Quote follow-up", description: "Checks in on quotes and proposals that have not had a response." },
        { title: "Old lead re-engagement", description: "Reaches back out to past leads on a schedule you choose." },
        { title: "CRM updates", description: "Records every message and response so you can see where each lead stands." },
      ],
      example: {
        heading: "What a follow-up sequence looks like",
        label: "Illustrative example",
        ordered: true,
        items: [
          "5:42 PM: A call comes in and nobody answers.",
          "Right away: The caller gets a text: \"Sorry we missed your call. Want to book a time? [link]\"",
          "Next morning: If there is no reply, one short second message.",
          "Caller replies \"Thursday works\": The booking is made, the sequence stops, and the CRM is updated.",
        ],
      },
      howItWorks: {
        heading: "How automated follow-ups get set up",
        steps: [
          { title: "We map your follow-up moments.", description: "Where leads currently go quiet: missed calls, quotes, no-shows, and old enquiries." },
          { title: "We write and build the sequences.", description: "Messages in your voice, timing rules, and stop conditions, tested before they go live." },
          { title: "It runs and we refine it.", description: "We review replies and booking rates with you and adjust wording and timing." },
        ],
      },
      worksWith: "GoHighLevel, Twilio, email, n8n, Zapier, and your calendar and CRM.",
      whoItIsFor: {
        heading: "Who uses automated follow-ups",
        items: [
          "Dental clinics: Missed calls, appointment reminders, no-shows, and patients overdue for a visit.",
          "Insurance agencies: Quotes waiting for a decision and upcoming renewals.",
          "Service businesses: Estimates and enquiries that need a nudge.",
        ],
      },
      faqs: [
        { question: "What channels does it use?", answer: "Text, email, and phone calls, depending on the follow-up and what you prefer." },
        { question: "Will it keep messaging someone who already replied?", answer: "No. Each sequence stops as soon as the person replies or books, so nobody gets a message that no longer applies." },
        { question: "Can I control the wording and timing?", answer: "Yes. We write the messages with you, and you approve the timing and the rules for when each sequence starts and stops." },
        { question: "Does it work with my CRM?", answer: "We build follow-ups in GoHighLevel and connect other tools through n8n or Zapier. Ask us about yours." },
      ],
      relatedServices: ["ai-receptionist", "outbound-ai-calling", "crm-and-workflow-setup"],
    },
  },
  "outbound-ai-calling": {
    slug: "outbound-ai-calling",
    label: "Outbound AI Calling",
    homeHeadline: "Fill your calendar without picking up the phone.",
    h1: "Outbound AI Calling for Lead Qualification",
    subhead: "Our AI voice agent calls your leads, finds out who is interested, and books them straight into your calendar.",
    metaTitle: "Outbound AI Calling",
    metaDescription: "An AI voice agent that calls your leads, finds out who is interested, and books them into your calendar.",
    whatItDoes: [
      "Calls your leads or past customers",
      "Handles voicemail and common objections",
      "Works out who is interested and who is not",
      "Books interested people into your calendar",
      "Records every outcome in your CRM",
    ],
    faqs: [
      { question: "Will people know they are talking to an AI?", answer: "You decide how the call opens. We recommend the agent is upfront about being an AI assistant, and you should check the calling and disclosure rules where you operate." },
      { question: "Who does it call?", answer: "Only the lists you give it, such as leads who asked for contact, past customers, or quotes awaiting a reply. Calling rules vary by country and by type of list, and we will go through them with you." },
      { question: "What happens when someone wants to talk to a person?", answer: "The agent can book a call with your team or transfer the call, depending on the setup." },
      { question: "How do I see the results?", answer: "Every call outcome is recorded in your CRM, so you can see who booked, who wants a later call, and who declined." },
    ],
    expansion: {
      overview: {
        heading: "Outbound AI calling for lead qualification",
        paragraphs: [
          "An outbound AI voice agent calls leads or past customers, handles voicemail and common objections, and finds out who is interested.",
          "It can book interested people into your calendar and record each call outcome in your CRM.",
        ],
      },
      whatItDoesHeading: "What the AI voice agent does",
      whatItDoes: [
        { title: "Calls your list", description: "Phones new leads, old leads, or past customers on a schedule you set." },
        { title: "Sounds like a calm team member", description: "Holds short, natural conversations using a voice and script we set up with you." },
        { title: "Handles voicemail and objections", description: "Leaves a message when no one answers and responds to common pushback." },
        { title: "Books interested people", description: "Offers times and books straight into your calendar." },
        { title: "Records every outcome", description: "Marks each lead as booked, call later, or not interested, and updates your CRM." },
      ],
      example: {
        heading: "What a call looks like",
        label: "Illustrative example",
        items: [
          "Agent: Hi, this is Sam from Riverside Dental. You asked about a cleaning last week. Is now a good time for a quick chat?",
          "Lead: Sure.",
          "Agent: I have Thursday at 2:30 or Friday at 9:00. Which suits you?",
          "Lead: Friday.",
          "Agent: Booked for Friday at 9:00. You will get a text with the details.",
        ],
        note: "Other outcomes: \"Call me later\" schedules a callback. \"Not interested\" is recorded and the lead is not called again.",
      },
      howItWorks: {
        heading: "How outbound calling gets set up",
        steps: [
          { title: "We define who to call and why.", description: "The list, the reason for the call, and what counts as a good outcome." },
          { title: "We build the voice agent and test it.", description: "Script, voice, calendar connection, and test calls with you listening." },
          { title: "Calls run and outcomes flow into your CRM.", description: "You see who booked, who asked for a later call, and who declined. We refine the script from real calls." },
        ],
      },
      worksWith: "Twilio, ElevenLabs, n8n, GoHighLevel, and your calendar and CRM.",
      whoItIsFor: {
        heading: "Who uses outbound AI calling",
        items: [
          "Businesses with leads that went cold after an enquiry or a quote.",
          "Clinics and agencies that want to re-contact past customers.",
          "Sales teams that want appointments booked without manual dialing.",
        ],
      },
      faqs: [
        { question: "Will people know they are talking to an AI?", answer: "You decide how the call opens. We recommend the agent is upfront about being an AI assistant, and you should check the calling and disclosure rules where you operate." },
        { question: "Who does it call?", answer: "Only the lists you give it, such as leads who asked for contact, past customers, or quotes awaiting a reply. Calling rules vary by country and by type of list, and we will go through them with you." },
        { question: "What happens when someone wants to talk to a person?", answer: "The agent can book a call with your team or transfer the call, depending on the setup." },
        { question: "How do I see the results?", answer: "Every call outcome is recorded in your CRM, so you can see who booked, who wants a later call, and who declined." },
      ],
      relatedServices: ["automated-follow-ups", "ai-receptionist", "crm-and-workflow-setup"],
    },
  },
  "whatsapp-and-chat-agents": {
    slug: "whatsapp-and-chat-agents",
    label: "WhatsApp and Chat Agents",
    homeHeadline: "Messages pile up when your team is busy.",
    h1: "WhatsApp and Chat Agents for Customer Conversations",
    subhead: "Our chat agent replies straight away using your own information, and passes anything complicated to your team.",
    metaTitle: "WhatsApp and Chat Agents",
    metaDescription: "AI chat agents for WhatsApp, SMS, and your website that answer from your own information and pass complex cases to your team.",
    whatItDoes: [
      "Replies on WhatsApp, SMS, and your website chat",
      "Answers from your own information: services, prices, hours, and policies",
      "Takes bookings",
      "Flags anything complicated and passes it to your team",
      "Keeps the full conversation history",
    ],
    faqs: [
      { question: "Which channels does it support?", answer: "WhatsApp, SMS, and website chat. Other channels may be possible, so ask us." },
      { question: "Will it make up answers?", answer: "We set it up to answer from the information you provide. When it does not know something, it passes the conversation to your team instead of guessing." },
      { question: "Can it book appointments?", answer: "Yes. It checks your calendar and books directly." },
      { question: "Can my team see the conversations?", answer: "Yes. Conversations are logged so your team can read them, step in, and review how the agent handled each one." },
    ],
    expansion: {
      overview: {
        heading: "WhatsApp and chat agents for customer conversations",
        paragraphs: [
          "WhatsApp and chat agents reply on WhatsApp, SMS, and your website chat using your information about services, prices, hours, and policies.",
          "The agent can take bookings, keep the conversation history, and pass complicated questions to your team.",
        ],
      },
      whatItDoesHeading: "What your chat agent handles",
      whatItDoes: [
        { title: "Replies right away", description: "Answers messages on WhatsApp, SMS, and website chat as they arrive." },
        { title: "Uses your information", description: "Answers from your services, prices, hours, and policies, not generic text." },
        { title: "Takes bookings", description: "Checks availability and books the appointment in the chat." },
        { title: "Hands over smoothly", description: "Flags anything complicated and passes the full conversation to your team." },
        { title: "Keeps the history", description: "Remembers the conversation so customers do not repeat themselves, and logs it to your CRM." },
      ],
      example: {
        heading: "What a chat looks like",
        label: "Illustrative example",
        items: [
          "Customer: Hi, do you do same-day appointments?",
          "Agent: We do when there is space. Today I have 3:30 PM or 5:00 PM. Would one of those work?",
          "Customer: 5 please.",
          "Agent: Booked for 5:00 PM today. You will get a confirmation here.",
        ],
      },
      howItWorks: {
        heading: "How a chat agent gets set up",
        steps: [
          { title: "We collect your answers.", description: "Services, prices, hours, policies, and the questions customers ask most." },
          { title: "We build and test the agent.", description: "We connect your channels and calendar, then test it with real questions, including tricky ones." },
          { title: "It goes live and we improve it.", description: "We review conversations with you, fill gaps in its answers, and tune when it hands over to your team." },
        ],
      },
      worksWith: "WhatsApp, SMS through Twilio, your website chat, GoHighLevel, n8n, and your calendar and CRM.",
      whoItIsFor: {
        heading: "Who uses chat agents",
        items: [
          "Clinics and agencies that get booking questions on WhatsApp and text.",
          "Businesses with a small team and a busy inbox.",
          "Anyone answering the same questions again and again.",
        ],
      },
      faqs: [
        { question: "Which channels does it support?", answer: "WhatsApp, SMS, and website chat. Other channels may be possible, so ask us." },
        { question: "Will it make up answers?", answer: "We set it up to answer from the information you provide. When it does not know something, it passes the conversation to your team instead of guessing." },
        { question: "Can it book appointments?", answer: "Yes. It checks your calendar and books directly." },
        { question: "Can my team see the conversations?", answer: "Yes. Conversations are logged so your team can read them, step in, and review how the agent handled each one." },
      ],
      relatedServices: ["ai-receptionist", "automated-follow-ups", "crm-and-workflow-setup"],
    },
  },
  "crm-and-workflow-setup": {
    slug: "crm-and-workflow-setup",
    label: "CRM and Workflow Setup",
    homeHeadline: "Your tools do not talk to each other.",
    h1: "CRM and Workflow Setup for Connected Operations",
    subhead: "We link your CRM, calendar, forms, and messaging so data moves by itself and nothing depends on someone remembering to copy it.",
    metaTitle: "CRM and Workflow Setup",
    metaDescription: "We connect your CRM, calendar, and messaging tools so leads, calls, and bookings are recorded automatically.",
    whatItDoes: [
      "Sets up your CRM, including GoHighLevel",
      "Builds pipelines and lead capture forms",
      "Connects your calendar, email, and messaging",
      "Automates repetitive steps with n8n or Zapier",
      "Moves data between your tools so nothing is copied by hand",
    ],
    faqs: [
      { question: "Which CRMs do you work with?", answer: "We work most with GoHighLevel and also connect tools such as Salesforce, Monday.com, and Asana. Ask us about yours." },
      { question: "Do I need to change my current tools?", answer: "Not necessarily. We connect what you already use where we can, and suggest changes only when they save real work." },
      { question: "Can you fix a CRM that is already set up?", answer: "Yes. We review what is there, tidy pipelines and fields, and connect the missing steps." },
      // TODO: OWNER TO CONFIRM the documentation promise before publishing.
      { question: "Will my team understand what you built?", answer: "We document each workflow and walk your team through it." },
    ],
    expansion: {
      overview: {
        heading: "CRM and workflow setup for connected operations",
        paragraphs: [
          "CRM and workflow setup connects your CRM with lead forms, calendars, email, and messaging so information moves between your tools.",
          "Pipelines, lead capture forms, and workflows in n8n or Zapier can automate repeated steps and reduce manual data entry.",
        ],
      },
      whatItDoesHeading: "What we set up",
      whatItDoes: [
        { title: "Sets up your CRM", description: "Configures GoHighLevel or your current CRM with the pipelines and fields you actually use." },
        { title: "Captures leads automatically", description: "Connects forms, calls, and messages so every enquiry creates a record." },
        { title: "Connects your tools", description: "Links your calendar, email, messaging, and spreadsheets so data moves between them." },
        { title: "Automates repeated steps", description: "Builds workflows in n8n or Zapier for notifications, assignments, and updates." },
        { title: "Keeps records consistent", description: "Syncs changes between systems so each one shows the same information." },
      ],
      example: {
        heading: "What a connected workflow looks like",
        label: "Illustrative example",
        ordered: true,
        items: [
          "A lead submits a form on your website.",
          "A contact and an opportunity are created in the CRM.",
          "A calendar event is created and your team is notified.",
          "The lead gets a welcome message.",
          "As the lead moves through your pipeline, each stage change updates the CRM and notifies the right person.",
        ],
      },
      howItWorks: {
        heading: "How workflow setup works",
        steps: [
          { title: "We map how information flows today.", description: "Where leads come in, where details get copied, and where things get lost." },
          { title: "We build the connections and test them.", description: "We set up the CRM and workflows, then run test records through them." },
          // TODO: OWNER TO CONFIRM the documentation promise before publishing.
          { title: "We hand it over and stay available.", description: "We document what we built and support your team as your needs change." },
        ],
      },
      worksWith: "GoHighLevel, n8n, Zapier, Salesforce, Monday.com, Asana, Microsoft Teams, Slack, and Google Sheets.",
      whoItIsFor: {
        heading: "Who uses workflow setup",
        items: [
          "Businesses whose CRM is only half set up.",
          "Teams that copy data between spreadsheets and apps by hand.",
          "Companies adding an AI receptionist or follow-ups that need a CRM behind them.",
        ],
      },
      faqs: [
        { question: "Which CRMs do you work with?", answer: "We work most with GoHighLevel and also connect tools such as Salesforce, Monday.com, and Asana. Ask us about yours." },
        { question: "Do I need to change my current tools?", answer: "Not necessarily. We connect what you already use where we can, and suggest changes only when they save real work." },
        { question: "Can you fix a CRM that is already set up?", answer: "Yes. We review what is there, tidy pipelines and fields, and connect the missing steps." },
        // TODO: OWNER TO CONFIRM the documentation promise before publishing.
        { question: "Will my team understand what you built?", answer: "We document each workflow and walk your team through it." },
      ],
      relatedServices: ["ai-receptionist", "automated-follow-ups", "ai-lead-generation"],
    },
  },
};

const processSteps = [
  { title: "We learn your business.", description: "A short call to cover your services, hours, and how you want things handled." },
  { title: "We build and test it.", description: "We set it up, connect your calendar and CRM, and test it with real scenarios." },
  { title: "It goes live and we keep improving it.", description: "We watch how it performs and adjust it every month." },
];

export default function ServicePageTemplate({ service }: { service: ServicePageContent }) {
  const canonical = `/services/${service.slug}`;

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        structuredData={{
          "@graph": [
            generateServiceSchema({ name: service.label, description: service.metaDescription, url: `https://axioware.tech${canonical}` }),
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: service.label, url: canonical },
            ]),
            generateFAQSchema(service.expansion?.faqs ?? service.faqs),
          ],
        }}
      />
      <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">{service.label}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{service.h1}</h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">{service.subhead}</p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
              <Link to="/contact" className="group">
                Book a 15-minute call
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {service.showReceptionistDemo && (
        <>
          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <div className="mx-auto max-w-5xl rounded-2xl border border-border/50 bg-card p-6 md:p-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">69% of callers who reach voicemail hang up without leaving a message.</p>
                <p className="mt-3 text-sm text-muted-foreground">Source: <a className="underline underline-offset-4 hover:text-accent" href="https://moneypenny.com/us/resources/news/small-business-call-report/" target="_blank" rel="noreferrer">Moneypenny Small Business Call Report</a></p>
                {/* TODO: Check the report's publication date. */}
              </div>
            </div>
          </section>
          <VoiceAgentDemo />
        </>
      )}

      {service.expansion ? (
        <ServicePageExpansion
          content={service.expansion}
          relatedServices={service.expansion.relatedServices.map((slug) => {
            const relatedService = servicePages[slug];
            return {
              slug,
              label: relatedService.label,
              headline: relatedService.homeHeadline ?? "",
            };
          })}
        />
      ) : <>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">What it does</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.whatItDoes.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-card border border-border/50 p-5 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-card border border-border/50 p-6">
                <span className="text-sm font-semibold text-accent">Step {index + 1}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-3 mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Who it is for</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Dental clinics, insurance agencies, and other small service businesses that rely on calls, leads, and appointments.</p>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      </>}

      <RelatedWorkSection service={service.slug} />

      <CTASection
        title="Talk about your service needs"
        description="Tell us how your team handles calls, leads, and appointments."
        buttonLabel="Book a 15-minute call"
      />
    </Layout>
  );
}
