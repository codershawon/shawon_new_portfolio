import type { Experience } from "@/data/experience";
import { ExternalLink } from "@/components/ui/ExternalLink";

type ExperienceHeaderProps = {
  experience: Experience;
};

export function ExperienceHeader({ experience }: ExperienceHeaderProps) {
  const { role, company, companyUrl, start, end, type, location } = experience;

  return (
    <header>
      <h3 className="text-xl tracking-normal">
        {role}{" "}
        <span className="font-normal text-muted">at</span>{" "}
        {companyUrl ? (
          <ExternalLink href={companyUrl} className="text-brand-ink hover:underline">
            {company}
          </ExternalLink>
        ) : (
          company
        )}
      </h3>
      <p className="mt-1.5 text-[0.95rem] text-muted">
        {start} – {end}, {type}, {location}
      </p>
    </header>
  );
}