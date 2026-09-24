import { cn } from "@/lib/cn";

// সব input, select, textarea-র একই style
export function fieldClasses(hasError: boolean) {
  return cn(
    "w-full rounded-lg border bg-bg px-4 py-3 text-ink transition-colors",
    "placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/40",
    hasError ? "border-red-600 dark:border-red-400" : "border-line focus:border-brand-ink"
  );
}