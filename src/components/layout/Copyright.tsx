import { profile } from "@/data/profile";

export function Copyright() {
  const year = new Date().getFullYear();

  return (
    <p className="text-[0.9rem] text-muted">
      © {year} {profile.name}. Built with Next.js.
    </p>
  );
}