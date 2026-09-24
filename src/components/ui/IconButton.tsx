import type { ReactNode } from "react";

type IconButtonProps = {
  label: string;       
  onClick: () => void; 
  children: ReactNode; 
  expanded?: boolean; 
  controls?: string;
};

export function IconButton({
  label,
  onClick,
  children,
  expanded,
  controls,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {children}
    </button>
  );
}