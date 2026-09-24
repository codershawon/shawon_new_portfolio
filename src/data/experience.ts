export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  start: string;
  end: string;
  location: string;
  summary: string;  
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Microters",
    type: "Full-time",
    start: "Nov 2023",
    end: "Present",
    location: "Cumilla, Bangladesh",
    summary:
      "Frontend lead on production web apps, internal SaaS platforms and Shopify apps.",
    highlights: [
      "Lead frontend architecture and UI engineering across the company's production web apps and internal SaaS platforms.",
      "Build and maintain an enterprise hospital management system with separate portals for admins, doctors, staff and patients.",
      "Built ComplyGuard AI, a Shopify compliance app approved on the Shopify App Store.",
      "Develop WordPress plugins and Shopify apps for client projects.",
    ],
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "Remix",
      "Shopify Polaris",
      "WordPress",
    ],
  },
];