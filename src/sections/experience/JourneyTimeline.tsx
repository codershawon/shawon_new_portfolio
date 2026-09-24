import { journey } from "@/data/journey";
import { JourneyItem } from "./JourneyItem";

export function JourneyTimeline() {
  return (
    <div className="rounded-2xl bg-surface p-6 sm:p-8">
      <h3 className="text-lg tracking-normal">Journey</h3>
      <ol className="mt-6 border-l-2 border-line">
        {journey.map((step) => (
          <JourneyItem key={`${step.date}-${step.title}`} step={step} />
        ))}
      </ol>
    </div>
  );
}