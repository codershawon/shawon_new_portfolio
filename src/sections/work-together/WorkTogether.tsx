import { profile } from "@/data/profile";
import { workTogether } from "@/data/work-together";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";

const HEADING_ID = "work-together-heading";

export function WorkTogether() {
  return (
    <section aria-labelledby={HEADING_ID} className="border-t border-line py-20 sm:py-24">
      <Container>
        <div className="rounded-2xl bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <SectionHeading id={HEADING_ID} title={workTogether.title} description={workTogether.text} />

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={workTogether.buttonHref}>{workTogether.buttonLabel}</ButtonLink>
            <ExternalLink
              href={`mailto:${profile.email}`}
              newTab={false}
              className="font-semibold text-brand-ink hover:underline"
            >
              {profile.email}
            </ExternalLink>
          </div>
        </div>
      </Container>
    </section>
  );
}