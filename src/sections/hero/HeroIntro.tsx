import { profile } from "@/data/profile";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";

export function HeroIntro() {
  return (
    <div>
      <AvailabilityBadge text={profile.availability} />

      <p className="mt-8 text-lg text-ink">Hi, I&apos;m {profile.name}.</p>

      <h1
        id="hero-heading"
        className="mt-3 max-w-[20ch] text-[clamp(2.1rem,1.4rem+2.8vw,3.4rem)] leading-[1.08] tracking-tight"
      >
        {profile.headline}
      </h1>

      <p className="mt-6 max-w-prose text-muted">{profile.intro}</p>
    </div>
  );
}