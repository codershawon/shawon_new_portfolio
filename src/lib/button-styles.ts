import { cn } from "./cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors";

const variants = {
  primary: "bg-brand text-on-brand hover:bg-brand-hover",
  secondary: "border border-line text-ink hover:border-brand-ink hover:text-brand-ink",
};

// আকার
const sizes = {
  md: "h-11 px-5 text-[0.95rem]",
  sm: "h-10 px-4 text-[0.9rem]",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type Options = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: Options = {}) {
  return cn(base, variants[variant], sizes[size], className);
}