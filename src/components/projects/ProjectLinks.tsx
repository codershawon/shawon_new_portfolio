import { FaGithub } from "react-icons/fa6";
import { LuExternalLink, LuLock } from "react-icons/lu";
import type { Project } from "@/data/projects";
import { ExternalLink } from "@/components/ui/ExternalLink";

type ProjectLinksProps = {
  project: Project;
};

const linkStyle =
  "inline-flex items-center gap-1.5 font-semibold text-brand-ink hover:underline";

export function ProjectLinks({ project }: ProjectLinksProps) {
  const { live, github } = project.links;

  // দেখানোর মতো কিছু না থাকলে খালি বাক্স বানাই না
  if (!live && !github && !project.isPrivate) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
      {live && (
        <ExternalLink href={live} className={linkStyle}>
          <LuExternalLink className="size-4" aria-hidden="true" />
          Live site
        </ExternalLink>
      )}

      {github && (
        <ExternalLink href={github} className={linkStyle}>
          <FaGithub className="size-4" aria-hidden="true" />
          Code
        </ExternalLink>
      )}

      {project.isPrivate && (
        <span className="inline-flex items-center gap-1.5 text-muted">
          <LuLock className="size-4" aria-hidden="true" />
          Private codebase
        </span>
      )}
    </div>
  );
}