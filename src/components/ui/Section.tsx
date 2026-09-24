import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type SectionProps = {
  id: string; 
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id={headingId} title={title} description={description} />
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}