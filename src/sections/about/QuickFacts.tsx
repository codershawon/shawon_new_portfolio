import { FactItem } from "@/components/ui/FactItem";
import { quickFacts } from "@/data/about";

export function QuickFacts() {
  return (
    <dl className="space-y-5 rounded-2xl bg-surface p-6 sm:p-8">
      {quickFacts.map((fact) => (
        <FactItem key={fact.label} label={fact.label}>
          {fact.value}
        </FactItem>
      ))}
    </dl>
  );
}