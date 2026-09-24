import type { ReactNode } from "react";

type CaseStudyBlockProps = {
  title: string;
  children: ReactNode;
};

export function CaseStudyBlock({ title, children }: CaseStudyBlockProps) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-4 max-w-prose text-ink/90">{children}</div>
    </section>
  );
}