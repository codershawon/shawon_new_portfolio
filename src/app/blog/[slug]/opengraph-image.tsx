import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { formatPostDate } from "@/data/blog";
import { brandColors } from "@/lib/brand";
import { BrandBadge } from "@/components/seo/BrandBadge";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostOpengraphImage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.meta.title ?? profile.name;
  const date = post ? formatPostDate(post.meta.date) : "";

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
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <BrandBadge size={64} />
          <div style={{ fontSize: 28, color: brandColors.muted }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: brandColors.brand }}>{date}</div>
          <div
            style={{
              marginTop: 20,
              maxWidth: 1000,
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    size
  );
}