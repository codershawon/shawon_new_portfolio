import type { MetadataRoute } from "next";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["/", ...navItems.map((item) => item.href)].map((path) => ({
    url: absoluteUrl(path),
  }));

  const projectPages = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
  }));

  const posts = await getAllPosts();
  const postPages = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  return [...pages, ...projectPages, ...postPages];
}