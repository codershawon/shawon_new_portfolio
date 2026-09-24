import type { IconType } from "react-icons";
import {
  SiAnthropic, SiBootstrap, SiExpress, SiFigma, SiFirebase, SiGit, SiGithub,
  SiGooglegemini, SiGraphql, SiJavascript, SiJsonwebtokens, SiLinux, SiMongodb,
  SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPrisma,
  SiReact, SiRedux, SiShopify, SiSocketdotio, SiSqlite, SiStripe, SiTailwindcss,
  SiTypescript, SiVercel, SiWordpress,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { LuKeyRound, LuServer, LuWebhook } from "react-icons/lu";

export type Skill = {
  name: string;
  icon?: IconType;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shopify Polaris", icon: SiShopify },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "REST APIs", icon: LuServer },
      { name: "GraphQL", icon: SiGraphql },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      { name: "OpenAI API", icon: RiOpenaiFill },
      { name: "Claude API", icon: SiAnthropic },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "Stripe", icon: SiStripe },
      { name: "Webhooks", icon: LuWebhook },
      { name: "OAuth 2.0", icon: LuKeyRound },
    ],
  },
  {
    title: "Platforms & Tools",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Shopify", icon: SiShopify },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Firebase", icon: SiFirebase },
      { name: "Postman", icon: SiPostman },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];