import { LuBadgeCheck } from "react-icons/lu";

type ProjectStatusProps = {
  text: string;
};

export function ProjectStatus({ text }: ProjectStatusProps) {
  return (
    <p className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand-ink">
      <LuBadgeCheck className="size-4" aria-hidden="true" />
      {text}
    </p>
  );
}