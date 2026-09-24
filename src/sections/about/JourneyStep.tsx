import type { JourneyStep as JourneyStepType } from "@/data/journey";
import { cn } from "@/lib/cn";

type JourneyStepProps = {
  step: JourneyStepType;
};

export function JourneyStep({ step }: JourneyStepProps) {
  return (
    <li
      className={cn(
        "relative",
        "border-l-2 border-line pb-10 pl-7 last:pb-0",
        "md:border-t-2 md:border-l-0 md:pt-8 md:pr-6 md:pb-0 md:pl-0"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute size-3.5 rounded-full border-2 border-brand",
          "top-1 -left-2",
          "md:-top-2 md:left-0",
          step.current ? "bg-brand" : "bg-bg"
        )}
      />
      <p className="text-[0.85rem] text-muted">{step.date}</p>
      <p className="mt-1.5 font-semibold leading-snug">{step.title}</p>
      <p className="mt-0.5 text-[0.95rem] text-muted">{step.place}</p>
    </li>
  );
}