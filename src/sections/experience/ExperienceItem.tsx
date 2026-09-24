import type { Experience } from "@/data/experience";
import { BulletList } from "@/components/ui/BulletList";
import { TagList } from "@/components/ui/TagList";
import { ExperienceHeader } from "./ExperienceHeader";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article>
      <ExperienceHeader experience={experience} />
      <p className="mt-5 text-muted">{experience.summary}</p>

      <div className="mt-5">
        <BulletList items={experience.highlights} />
      </div>

      <div className="mt-6">
        <TagList tags={experience.tech} label="Technologies used" />
      </div>
    </article>
  );
}