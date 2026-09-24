import { profile } from "@/data/profile";
import { ExternalLink } from "./ExternalLink";
import { buttonClasses, type ButtonSize } from "@/lib/button-styles";

type ResumeButtonProps = {
  text?: string;
  size?: ButtonSize; 
  className?: string;
};

export function ResumeButton({ text = "Résumé", size = "sm", className }: ResumeButtonProps) {
  return (
    <ExternalLink
      href={profile.resumeUrl}
      className={buttonClasses({ variant: "secondary", size: "sm", className })}
    >
      {text}
    </ExternalLink>
  );
}