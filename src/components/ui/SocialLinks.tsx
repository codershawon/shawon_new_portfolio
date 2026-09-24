import { socialLinks } from "@/data/socials";
import { SocialIconLink } from "./SocialIconLink";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <SocialIconLink link={link} />
        </li>
      ))}
    </ul>
  );
}