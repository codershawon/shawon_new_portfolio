import { experiences } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { ExperienceItem } from "./ExperienceItem";
import { JourneyTimeline } from "./JourneyTimeline";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Where I work now and how I got here."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* বামে: চাকরি */}
        <div className="space-y-14 lg:col-span-7">
          {experiences.map((experience) => (
            <ExperienceItem
              key={`${experience.company}-${experience.start}`}
              experience={experience}
            />
          ))}
        </div>

        {/* ডানে: Journey */}
        <aside aria-label="Career journey" className="lg:col-span-5">
          <JourneyTimeline />
        </aside>
      </div>
    </Section>
  );
}