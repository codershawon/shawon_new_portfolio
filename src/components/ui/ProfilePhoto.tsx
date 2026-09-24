import Image from "next/image";
import profilePhoto from "@/assets/images/profile.png";
import { profile } from "@/data/profile";

export function ProfilePhoto() {
  return (
    <div className="bracket-frame w-40 sm:w-48 md:w-72 lg:w-80">
      <Image
        src={profilePhoto}
        alt={`${profile.name}, ${profile.role}`}
        placeholder="blur"
        fetchPriority="high"
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 192px"
        className="aspect-4/5 w-full rounded-2xl bg-surface object-cover dark:brightness-90"
      />
    </div>
  );
}