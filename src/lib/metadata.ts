import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const defaultTitle = `${profile.name} | ${profile.role}`;

// src/app/opengraph-image.tsx যে ছবি বানায়, সব page-এ সেটাই
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${profile.name}, ${profile.role}`,
};

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
};

// প্রতিটা page-এর metadata একই নিয়মে বানানো
export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} | ${profile.name}` : defaultTitle;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}