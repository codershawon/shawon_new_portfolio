import Link from "next/link";
import { navItems } from "@/data/navigation";

export function FooterNav() {
  return (
    <nav aria-label="Footer">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[0.95rem] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}