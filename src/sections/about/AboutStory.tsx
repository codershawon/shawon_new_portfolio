import { aboutStory } from "@/data/about";

export function AboutStory() {
  return (
    <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
      {aboutStory.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}