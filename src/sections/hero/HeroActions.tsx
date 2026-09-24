import { ButtonLink } from "@/components/ui/ButtonLink";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroActions() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-3">
      <ButtonLink href="#projects">See my work</ButtonLink>
      <ResumeButton text="Download résumé" size="md" />
      <SocialLinks />
    </div>
  );
}