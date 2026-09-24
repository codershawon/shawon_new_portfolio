// About page-এর সব লেখা।

export const aboutStory: string[] = [
  "I'm a full-stack web developer from Chattogram, Bangladesh. I started with a six-month web development course in early 2023, finished my diploma in computer technology the same year, and joined Microters as a web developer that November.",
  "At Microters I lead frontend architecture and UI engineering. Most of my time goes into a live hospital management system with portals for admins, doctors, staff and patients, alongside internal SaaS tools, WordPress plugins and Shopify apps. One of those apps, ComplyGuard AI, is now approved on the Shopify App Store.",
  "I enjoy work where the interface has to stay simple while the logic behind it gets complicated: role-based dashboards, billing flows, and AI features that keep working when a provider fails. Alongside my job, I'm studying for a B.Sc. in Computer Science & Engineering at East Delta University.",
];

export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  { label: "Based in", value: "Chattogram, Bangladesh" },
  { label: "Currently", value: "Web Developer at Microters" },
  { label: "Experience", value: "Almost 3 years" },
  { label: "Studying", value: "B.Sc. in CSE, East Delta University" },
  { label: "Languages", value: "Bangla (native), English" },
  { label: "Open to", value: "Full-time roles and freelance projects" },
];