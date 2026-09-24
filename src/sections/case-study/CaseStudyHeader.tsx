import type { Project } from "@/data/projects";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectStatus } from "@/components/projects/ProjectStatus";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="max-w-3xl">
      <ProjectMeta kind={project.kind} role={project.role} />
      <h1 className="mt-3 text-4xl sm:text-5xl">{project.title}</h1>

      {project.status && (
        <div className="mt-4">
          <ProjectStatus text={project.status} />
        </div>
      )}

      <p className="mt-5 text-lg text-muted">{project.summary}</p>

      <div className="mt-6">
        <ProjectLinks project={project} />
      </div>
    </header>
  );
}