import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { FactItem } from "@/components/ui/FactItem";

export function ContactDetails() {
  const webLinks = socialLinks.filter((link) => link.newTab);

  return (
    <dl className="space-y-6 rounded-2xl bg-surface p-6 sm:p-8">
      <FactItem label="Email">
        <ExternalLink
          href={`mailto:${profile.email}`}
          newTab={false}
          className="font-semibold text-brand-ink hover:underline"
        >
          {profile.email}
        </ExternalLink>
      </FactItem>

      <FactItem label="Elsewhere">
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {webLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.href} className="font-semibold text-brand-ink hover:underline">
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </FactItem>

      <FactItem label="Based in">{profile.location} (GMT+6)</FactItem>
      <FactItem label="Response time">Usually within 24 hours</FactItem>
    </dl>
  );
}