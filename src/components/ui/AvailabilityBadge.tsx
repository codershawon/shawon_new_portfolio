type AvailabilityBadgeProps = {
  text: string;
};

export function AvailabilityBadge({ text }: AvailabilityBadgeProps) {
  return (
    <p className="flex items-center gap-2.5 text-[0.95rem] text-muted">
      <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
      {text}
    </p>
  );
}