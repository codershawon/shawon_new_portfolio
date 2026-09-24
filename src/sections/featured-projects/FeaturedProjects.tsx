import { featuredProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      title="Selected work"
      description="Production apps I've built recently, from healthcare to e-commerce."
    >
      <div className="space-y-20 lg:space-y-28">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.slug}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <div className="mt-16">
        <ButtonLink href="/projects" variant="secondary">
          View all projects
        </ButtonLink>
      </div>
    </Section>
  );
}