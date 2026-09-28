import Link from "next/link";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
  newTab?: boolean;
};

// Site-এর বাইরের link (GitHub, LinkedIn, mailto, PDF)।
// এগুলো Next.js-এর page না, তাই সাধারণ <a>।
export function ExternalLink({
  href,
  children,
  className,
  label,
  newTab = true,
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}