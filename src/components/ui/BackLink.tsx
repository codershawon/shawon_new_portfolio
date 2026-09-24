import Link from "next/link";
import type { ReactNode } from "react";
import { LuArrowLeft } from "react-icons/lu";

type BackLinkProps = {
  href: string;
  children: ReactNode;
};

export function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-[0.95rem] text-muted transition-colors hover:text-ink"
    >
      <LuArrowLeft className="size-4" aria-hidden="true" />
      {children}
    </Link>
  );
}