import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { BulletList } from "@/components/ui/BulletList";
import { TagList } from "@/components/ui/TagList";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectStatus } from "@/components/projects/ProjectStatus";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { TextLink } from "@/components/ui/TextLink";

type FeaturedProjectCardProps = {
  project: Project;
  reverse?: boolean; // true হলে ছবি ডানে
};

export function FeaturedProjectCard({ project, reverse = false }: FeaturedProjectCardProps) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      {/* ছবি */}
      <div className={cn("lg:col-span-7", reverse && "lg:order-last")}>
        <ProjectImage project={project} />
      </div>

      {/* লেখা */}
      <div className="lg:col-span-5">
        <ProjectMeta kind={project.kind} role={project.role} />
        <h3 className="mt-2 text-2xl">{project.title}</h3>
        {project.status && (
          <div className="mt-3">
            <ProjectStatus text={String(project.status)} />
          </div>
        )}

        <p className="mt-4 text-muted">{project.summary}</p>

        <div className="mt-5">
          <BulletList items={project.highlights} />
        </div>

        <div className="mt-6">
          <TagList tags={project.tech} label={`Technologies used in ${project.title}`} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
          <TextLink href={`/projects/${project.slug}`}>Read case study</TextLink>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}