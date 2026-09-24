import type { SkillGroup } from "@/data/skills";
import { SkillChip } from "./SkillChip";

type SkillGroupRowProps = {
  group: SkillGroup;
};

export function SkillGroupRow({ group }: SkillGroupRowProps) {
  return (
    <div className="grid gap-5 border-t border-line py-8 md:grid-cols-12 md:gap-8">
      <h3 className="text-lg tracking-normal md:col-span-3">{group.title}</h3>
      <ul
        aria-label={group.title}
        className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:col-span-9 lg:grid-cols-4"
      >
        {group.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}