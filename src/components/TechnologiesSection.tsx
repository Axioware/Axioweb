import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Technology logos
import reactLogo from "@/assets/tech/react.svg";
import typescriptLogo from "@/assets/tech/typescript.svg";
import nodejsLogo from "@/assets/tech/nodejs.svg";
import pythonLogo from "@/assets/tech/python.svg";
import tensorflowLogo from "@/assets/tech/tensorflow.svg";
import openaiLogo from "@/assets/tech/openai.svg";
import awsLogo from "@/assets/tech/aws.svg";
import postgresqlLogo from "@/assets/tech/postgresql.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import nextjsLogo from "@/assets/tech/nextjs.svg";
import tailwindLogo from "@/assets/tech/tailwindcss.svg";
import graphqlLogo from "@/assets/tech/graphql.svg";
import elevenlabsLogo from "@/assets/tech/elevenlabs.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import mongodbLogo from "@/assets/tech/mongodb.svg";
import redisLogo from "@/assets/tech/redis.svg";
import kubernetesLogo from "@/assets/tech/kubernetes.svg";
import vercelLogo from "@/assets/tech/vercel.svg";
import supabaseLogo from "@/assets/tech/supabase.svg";
import firebaseLogo from "@/assets/tech/firebase.svg";
import anthropicLogo from "@/assets/tech/anthropic.svg";
import langchainLogo from "@/assets/tech/langchain.svg";
import vueLogo from "@/assets/tech/vue.svg";
import githubLogo from "@/assets/tech/github.svg";
import gitlabLogo from "@/assets/tech/gitlab.svg";
import figmaLogo from "@/assets/tech/figma.svg";

interface Technology {
  name: string;
  logo: string;
}

interface TechStack {
  name: string;
  color: string;
  technologies: Technology[];
}

const techStacks: TechStack[] = [
  {
    name: "Frontend",
    color: "text-cyan-500",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Vue", logo: vueLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
  {
    name: "Backend",
    color: "text-green-500",
    technologies: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Python", logo: pythonLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Redis", logo: redisLogo },
      { name: "GraphQL", logo: graphqlLogo },
      { name: "Supabase", logo: supabaseLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    name: "AI & ML",
    color: "text-purple-500",
    technologies: [
      { name: "OpenAI", logo: openaiLogo },
      { name: "Anthropic", logo: anthropicLogo },
      { name: "TensorFlow", logo: tensorflowLogo },
      { name: "ElevenLabs", logo: elevenlabsLogo },
      { name: "LangChain", logo: langchainLogo },
    ],
  },
  {
    name: "Automation",
    color: "text-orange-500",
    technologies: [
      { name: "n8n", logo: n8nLogo },
      { name: "Zapier", logo: zapierLogo },
      { name: "Make", logo: makeLogo },
    ],
  },
  {
    name: "DevOps",
    color: "text-amber-500",
    technologies: [
      { name: "AWS", logo: awsLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "GitLab", logo: gitlabLogo },
    ],
  },
];

// Flatten all technologies for carousel
const allTechnologies = techStacks.flatMap((stack) =>
  stack.technologies.map((tech) => ({ ...tech, category: stack.name, color: stack.color }))
);

// Duplicate for seamless loop
const duplicatedTechnologies = [...allTechnologies, ...allTechnologies];

export default function TechnologiesSection() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10 mb-10">
        <SectionHeading
          badge="Technologies"
          title="Powered by Modern Tech"
          highlight="Modern Tech"
          subtitle="We leverage the latest technologies to build scalable, maintainable, and high-performance solutions."
        />

        {/* Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {techStacks.map((stack) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full bg-card border border-border/50 ${stack.color} font-display font-semibold text-sm`}
            >
              {stack.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/80 via-secondary/50 to-transparent z-10" />

        {/* Scrolling Technologies - Row 1 */}
        <div className="flex overflow-hidden mb-4">
          <motion.div
            className="flex gap-4"
            style={{ willChange: "transform" }}
            animate={{
              x: [0, -120 * allTechnologies.length],
            }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-24 bg-card rounded-xl border border-border/50 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-primary/30 hover:shadow-soft group-hover:scale-105 px-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="font-display font-medium text-foreground text-xs text-center">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling Technologies - Row 2 (Reverse) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            style={{ willChange: "transform" }}
            animate={{
              x: [-120 * allTechnologies.length, 0],
            }}
            transition={{
              x: {
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedTechnologies].reverse().map((tech, index) => (
              <div
                key={`${tech.name}-rev-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-24 bg-card rounded-xl border border-border/50 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-primary/30 hover:shadow-soft group-hover:scale-105 px-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="font-display font-medium text-foreground text-xs text-center">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
