import Link from "next/link";
import type { Project } from "@/data/projects";
import { TagList } from "@/components/ui/TagList";
import { ProjectImage } from "./ProjectImage";
import { ProjectMeta } from "./ProjectMeta";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col">
      <ProjectImage project={project} sizes="(min-width: 768px) 560px, 100vw" />

      <div className="mt-5">
        <ProjectMeta kind={project.kind} role={project.role} />
        <h2 className="mt-2 text-xl tracking-normal">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors group-hover:text-brand-ink after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-2 text-muted">{project.summary}</p>
      </div>

      <div className="mt-5">
        <TagList tags={project.tech} label={`Technologies used in ${project.title}`} />
      </div>
    </article>
  );
}