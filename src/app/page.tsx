import { Hero } from "@/sections/hero/Hero";
import { FeaturedProjects } from "@/sections/featured-projects/FeaturedProjects";
import { Experience } from "@/sections/experience/Experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
    </>
  );
}