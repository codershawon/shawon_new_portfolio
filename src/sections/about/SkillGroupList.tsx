import type { SkillGroup } from "@/data/skills";
import { SkillChip } from "./SkillChip";

type SkillGroupListProps = {
  group: SkillGroup;
};

export function SkillGroupList({ group }: SkillGroupListProps) {
  return (
    <div>
      <h3 className="text-lg tracking-normal">{group.title}</h3>
      <ul aria-label={group.title} className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}