import { profile } from "@/data/profile";
import { personSchema } from "@/data/person-schema";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/sections/hero/Hero";
import { FeaturedProjects } from "@/sections/featured-projects/FeaturedProjects";
import { Experience } from "@/sections/experience/Experience";
import { WorkTogether } from "@/sections/work-together/WorkTogether";

export const metadata = pageMetadata({
  description: profile.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <WorkTogether />
    </>
  );
}