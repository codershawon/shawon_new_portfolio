import { journey } from "@/data/journey";
import { Section } from "@/components/ui/Section";
import { JourneyStep } from "./JourneyStep";

export function Journey() {
  return (
    <Section id="journey" title="Journey" description="From my first course to where I am now.">
      <ol className="grid md:grid-cols-4">
        {journey.map((step) => (
          <JourneyStep key={`${step.date}-${step.title}`} step={step} />
        ))}
      </ol>
    </Section>
  );
}