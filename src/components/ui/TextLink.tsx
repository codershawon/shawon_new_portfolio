import Link from "next/link";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-semibold text-brand-ink"
    >
      {children}
      <LuArrowRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}