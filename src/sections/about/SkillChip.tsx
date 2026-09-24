import type { Skill } from "@/data/skills";

type SkillChipProps = {
  skill: Skill;
};

export function SkillChip({ skill }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <li className="flex items-center gap-2.5 text-[0.95rem]">
      <span className="flex size-5 shrink-0 items-center justify-center text-muted">
        {Icon && <Icon className="size-[18px]" aria-hidden="true" />}
      </span>
      {skill.name}
    </li>
  );
}