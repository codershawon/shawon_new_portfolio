import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { profile } from "./profile";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  newTab: boolean;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub, newTab: true },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin, newTab: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: LuMail, newTab: false },
];