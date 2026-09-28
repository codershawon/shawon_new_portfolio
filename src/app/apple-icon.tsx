import { ImageResponse } from "next/og";
import { BrandBadge } from "@/components/seo/BrandBadge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<BrandBadge size={size.width} rounded={false} />, size);
}