export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientWebsite: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  outcome: string;
  image: string;
  testimonial?: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "vino-design-build-ai-receptionist",
    title: "AI Receptionist for Vino Design Build",
    client: "Vino Design Build",
    clientWebsite: "https://vinodesignbuild.com/",
    industry: "Design & Build",
    summary: "An AI receptionist experience for Vino Design Build, designed to help callers get project enquiries to the right team.",
    challenge: "Design and build businesses receive enquiries from prospective clients with different project needs. A clear first response helps capture the details the team needs to follow up.",
    solution: "The AI receptionist provides a conversational first point of contact, gathers project enquiry details, answers common questions using approved business information, and routes callers to the appropriate next step.",
    capabilities: [
      "Respond to common questions about getting started with a project",
      "Capture caller contact details and project enquiry context",
      "Direct enquiries to the appropriate team member",
      "Provide a consistent first point of contact when staff are occupied",
    ],
    outcome: "The experience gives prospective clients a clear next step and helps the team receive project enquiries with useful context. Specific performance figures were not provided for this project.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
  },
  {
    slug: "agi-driving-ai-receptionist",
    title: "AI Receptionist for AGI Driving Academy",
    client: "AGI Driving Academy",
    clientWebsite: "https://www.agidrivingmb.com/",
    industry: "Driving Instruction",
    summary: "A voice assistant experience for a driving academy, designed around prospective learners' calls and everyday questions.",
    challenge: "Driving schools need to respond to prospective students while managing lesson enquiries, scheduling questions, and routine calls throughout the day.",
    solution: "The AI receptionist provides a conversational first point of contact, answers common questions, gathers learner details, and helps direct each enquiry to the next step with the academy.",
    capabilities: [
      "Respond to common questions about lessons and getting started",
      "Capture learner contact details and enquiry context",
      "Help callers understand how to reach the right staff member",
      "Offer a consistent call experience when staff are occupied",
    ],
    outcome: "The client highlighted reliable delivery, on-time milestones, and a smooth revision process. No call volume or conversion figures were provided.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
    testimonial: {
      quote: "The milestones always stayed on time and were nearly perfect each time. When revisions were needed, they were handled promptly and without any hassle.",
      author: "Aaron Gott",
      role: "CEO, AGI Driving Academy",
    },
  },
];
