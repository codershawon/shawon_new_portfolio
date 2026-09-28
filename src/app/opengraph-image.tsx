import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { brandColors } from "@/lib/brand";
import { BrandBadge } from "@/components/seo/BrandBadge";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 80,
          background: brandColors.dark,
          color: brandColors.white,
        }}
      >
        <BrandBadge size={96} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -1 }}>{profile.name}</div>
          <div style={{ marginTop: 12, fontSize: 40, color: brandColors.brand }}>{profile.role}</div>
          <div style={{ marginTop: 28, maxWidth: 900, fontSize: 30, color: brandColors.muted }}>
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    size
  );
}