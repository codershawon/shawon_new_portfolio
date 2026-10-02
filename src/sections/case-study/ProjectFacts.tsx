import type { Project } from "@/data/projects";
import { TagList } from "@/components/ui/TagList";
import { FactItem } from "@/components/ui/FactItem";

type ProjectFactsProps = {
  project: Project;
};

export function ProjectFacts({ project }: ProjectFactsProps) {
  return (
    <dl className="space-y-6 rounded-2xl bg-surface p-6 sm:p-8">
      <FactItem label="Role">{project.role}</FactItem>
      <FactItem label="Type">{project.kind}</FactItem>
      {project.period && <FactItem label="Timeline">{project.period}</FactItem>}
      {project.team && <FactItem label="Team">{project.team}</FactItem>}
      <FactItem label="Stack">
        <div className="mt-2">
          <TagList tags={project.tech} />
        </div>
      </FactItem>
    </dl>
  );
}