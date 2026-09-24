import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SkillGroupRow } from "./SkillGroupRow";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="The tools I use at work, grouped by where they fit."
    >
      <div className="border-b border-line">
        {skillGroups.map((group) => (
          <SkillGroupRow key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}