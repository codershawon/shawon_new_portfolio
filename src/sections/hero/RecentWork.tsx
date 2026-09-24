import { featuredProjects } from "@/data/projects";
import { RecentWorkItem } from "./RecentWorkItem";

export function RecentWork() {
  return (
    <div className="mt-20">
      <h2 className="text-lg tracking-normal text-ink">Recent work</h2>
      <ul className="mt-5 grid gap-8 md:grid-cols-3 md:gap-10">
        {featuredProjects.map((project) => (
          <RecentWorkItem key={project.slug} project={project} />
        ))}
      </ul>
    </div>
  );
}