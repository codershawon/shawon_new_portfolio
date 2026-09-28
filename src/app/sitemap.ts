import type { MetadataRoute } from "next";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...navItems.map((item) => item.href)].map((path) => ({
    url: absoluteUrl(path),
  }));

  const projectPages = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
  }));

  return [...pages, ...projectPages];
}