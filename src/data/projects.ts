import type { StaticImageData } from "next/image";

// Screenshot পেলে এই লাইনগুলোর সামনে থেকে "//" সরিয়ে দিন:
// import complyguardImage from "@/assets/projects/complyguard-ai.png";
// import hospitalImage from "@/assets/projects/hospital-management.png";
// import ecommerceImage from "@/assets/projects/ecommerce-platform.png";

export type ProjectLinks = {
  live?: string;
  github?: string;
};

// Case study
export type CaseStudy = {
  problem: string;
  solution: string;
  challenges: string[]; 
  outcome: string;    
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  role: string;
  status?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: ProjectLinks;
  isPrivate?: boolean;
  image?: StaticImageData;
  featured: boolean;
  period?: string;
  team?: string;
  caseStudy?: CaseStudy; 
};

export const projects: Project[] = [
  {
    slug: "complyguard-ai",
    title: "ComplyGuard AI",
    kind: "Shopify app",
    role: "Full-stack developer",
    status: "Approved on the Shopify App Store",
    summary:
      "A Shopify app that helps stores comply with EU AI Act Article 50 by finding AI-generated and edited media in their catalog.",
    highlights: [
      "Automated catalog scanning for AI-generated and modified media.",
      "Integrated OpenAI, Claude, Gemini and Flux with fallback when a provider fails.",
      "Implemented OAuth 2.0, webhooks and Shopify Billing APIs for recurring billing.",
    ],
    tech: ["Remix", "Node.js", "Shopify Polaris", "App Bridge", "Prisma", "PostgreSQL", "GraphQL"],
    links: {
      live: undefined,
    },
    isPrivate: true,
    // image: complyguardImage,
    featured: true,
    caseStudy: {
      problem:
        "Article 50 of the EU AI Act requires businesses to tell people when content was generated or edited by AI. Shopify merchants with large catalogs had no practical way to find which of their product images and media were AI-generated.",
      solution:
        "I built a Shopify app that scans a store's catalog and flags AI-generated or modified media. Detection runs through several AI providers, so one provider being slow or down doesn't stop a scan.",
      challenges: [
        "Keeping scans reliable when an AI provider fails, by falling back across OpenAI, Claude, Gemini and Flux.",
        "Meeting Shopify's App Store requirements for OAuth, webhooks and recurring billing.",
      ],
      outcome: "Approved and published on the Shopify App Store.",
    },
  },
  {
    slug: "hospital-management",
    title: "Hospital Management Application",
    kind: "Healthcare web app",
    role: "Frontend lead",
    status: "Live in production",
    summary:
      "A hospital system with separate portals for admins, doctors, staff and patients, covering daily operations and billing.",
    highlights: [
      "Built role-based portals for admins, doctors, staff and patients.",
      "Added SMS login verification and automated appointment reminders.",
      "Developed 8+ accounting and operations modules, including OPD/IPD and final billing.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Express.js", "MySQL", "Prisma"],
    links: {
      live: undefined,
    },
    isPrivate: true,
    // image: hospitalImage,
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "Digital Tools & E-Commerce Platform",
    kind: "E-commerce platform",
    role: "Full-stack developer",
    summary:
      "An online store for digital tools with automated orders, payments and a live admin dashboard.",
    highlights: [
      "Built automated order processing with online payments.",
      "Added SMS and email automation for order updates and bulk messages.",
      "Engineered a real-time admin dashboard for sales, inventory and orders.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Express.js", "MySQL", "Prisma", "Framer Motion"],
    links: {
      live: undefined,
    },
    // image: ecommerceImage,
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}