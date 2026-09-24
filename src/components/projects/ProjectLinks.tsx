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
  const links =
    "links" in project && project.links && typeof project.links === "object"
      ? (project.links as { live?: string; github?: string })
      : {};
  const isPrivate = !links.github;

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
      {links.live && (
        <ExternalLink href={links.live} className={linkStyle}>
          <LuExternalLink className="size-4" aria-hidden="true" />
          Live site
        </ExternalLink>
      )}

      {links.github && (
        <ExternalLink href={links.github} className={linkStyle}>
          <FaGithub className="size-4" aria-hidden="true" />
          Code
        </ExternalLink>
      )}

      {isPrivate && (
        <span className="inline-flex items-center gap-1.5 text-muted">
          <LuLock className="size-4" aria-hidden="true" />
          Private codebase
        </span>
      )}
    </div>
  );
}