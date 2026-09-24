"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: "desktop" | "mobile"; 
};

const styles = {
  desktop: {
    base: "rounded-md px-3 py-2 text-[0.95rem] transition-colors",
    active: "font-semibold text-ink underline decoration-brand decoration-2 underline-offset-[10px]",
    idle: "text-muted hover:text-ink",
  },
  mobile: {
    base: "block py-3 text-lg transition-colors",
    active: "font-semibold text-brand-ink",
    idle: "text-ink",
  },
};

export function NavLink({ href, children, onClick, variant = "desktop" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const style = styles[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(style.base, isActive ? style.active : style.idle)}
    >
      {children}
    </Link>
  );
}