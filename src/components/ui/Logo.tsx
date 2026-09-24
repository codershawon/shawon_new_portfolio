import Link from "next/link";
import { profile } from "@/data/profile";

export function Logo() {
  const firstLetter = profile.shortName.charAt(0);
  const restOfName = profile.shortName.slice(1);

  return (
    <Link
      href="/"
      aria-label={`${profile.name}, go to homepage`}
      className="brand-mark text-xl font-semibold tracking-[0.04em] text-ink"
    >
      <span className="text-brand-ink">{firstLetter}</span>
      {restOfName}
    </Link>
  );
}