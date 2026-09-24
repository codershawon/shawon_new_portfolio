import type { SocialLink } from "@/data/socials";
import { ExternalLink } from "./ExternalLink";

type SocialIconLinkProps = {
  link: SocialLink;
};

export function SocialIconLink({ link }: SocialIconLinkProps) {
  const Icon = link.icon;

  return (
    <ExternalLink
      href={link.href}
      label={link.label}
      newTab={link.newTab}
      className="inline-flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      <Icon className="size-5" aria-hidden="true" />
    </ExternalLink>
  );
}