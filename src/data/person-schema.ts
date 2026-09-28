import { profile } from "./profile";
import { experiences } from "./experience";
import { siteUrl } from "@/lib/site";

const currentJob = experiences[0];

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  worksFor: {
    "@type": "Organization",
    name: currentJob.company,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "BD",
  },
  knowsAbout: currentJob.tech,
  sameAs: [profile.socials.github, profile.socials.linkedin],
};