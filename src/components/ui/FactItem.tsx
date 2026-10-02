import type { ReactNode } from "react";

type FactItemProps = {
  label: string;
  children: ReactNode;
};

// "নাম: মান" জোড়া। <dl>-এর ভেতরে বসে (about, contact, case study)।
export function FactItem({ label, children }: FactItemProps) {
  return (
    <div>
      <dt className="text-[0.85rem] text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}