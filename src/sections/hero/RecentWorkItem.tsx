import Link from "next/link";
import type { Project } from "@/data/projects";

type RecentWorkItemProps = {
  project: Project;
};

export function RecentWorkItem({ project }: RecentWorkItemProps) {
  return (
    <li className="border-t-2 border-line pt-5">
      <h3 className="text-[1.05rem] tracking-normal">
        <Link href="/projects" className="transition-colors hover:text-brand-ink">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
        {project.summary}
      </p>
    </li>
  );
}