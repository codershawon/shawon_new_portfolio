import Image from "next/image";
import { LuImage } from "react-icons/lu";
import type { Project } from "@/data/projects";

type ProjectImageProps = {
  project: Project;
  sizes?: string;
};

const frame = "aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface";

export function ProjectImage({
  project,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: ProjectImageProps) {
  if (!project.image) {
    return (
      <div className={`${frame} flex flex-col items-center justify-center gap-2 text-muted`}>
        <LuImage className="size-8" aria-hidden="true" />
        <span className="text-[0.9rem]">Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        placeholder="blur"
        sizes={sizes}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}