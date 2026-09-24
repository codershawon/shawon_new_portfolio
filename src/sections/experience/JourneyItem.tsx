import type { JourneyStep } from "@/data/journey";
import { cn } from "@/lib/cn";

type JourneyItemProps = {
  step: JourneyStep;
};

export function JourneyItem({ step }: JourneyItemProps) {
  return (
    <li className="relative pb-8 pl-7 last:pb-0">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1.5 -left-1.75 size-3 rounded-full border-2 border-brand",
          step.current ? "bg-brand" : "bg-surface"
        )}
      />
      <p className="text-[0.85rem] text-muted">{step.date}</p>
      <p className="mt-1 font-semibold leading-snug">{step.title}</p>
      <p className="text-[0.95rem] text-muted">{step.place}</p>
    </li>
  );
}