import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Production apps, client work and products built by Shawon Barua.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Container className="pb-24">
      <PageHeader
        title="Projects"
        description="Production apps, client work and products I've built."
      />

      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}