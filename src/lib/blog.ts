import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import { createHighlighter, type Highlighter } from "shiki";
import { imageSize } from "image-size";
import { z } from "zod";
import type { PostMeta } from "@/data/blog";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const WORDS_PER_MINUTE = 200;

// ১. Post-এর উপরের তথ্য ঠিকঠাক লেখা হয়েছে কিনা
const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.iso.date(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
});

// ২. Shiki একবারই চালু হবে, প্রতি post-এ নয়
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  highlighterPromise ??= createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["ts", "tsx", "js", "jsx", "json", "bash", "css", "html", "sql", "md"],
  });
  return highlighterPromise;
}

// ৩. ছবির আসল মাপ বের করা, যাতে লেখা লাফিয়ে না যায়
async function readImageSize(src: string) {
  if (!src.startsWith("/")) return null;
  try {
    const buffer = await readFile(path.join(PUBLIC_DIR, src));
    const { width, height } = imageSize(buffer);
    return width && height ? { width, height } : null;
  } catch {
    return null;
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ৪. Markdown → HTML
async function renderMarkdown(markdown: string) {
  const highlighter = await getHighlighter();

  // ছবির মাপ আগেই পড়ে রাখি, কারণ renderer-এ await করা যায় না
  const sources = [...markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map((m) => m[1]);
  const sizes = new Map<string, { width: number; height: number }>();
  await Promise.all(
    [...new Set(sources)].map(async (src) => {
      const size = await readImageSize(src);
      if (size) sizes.set(src, size);
    })
  );

  const marked = new Marked();

  marked.use({
    renderer: {
      code({ text, lang }) {
        const known = highlighter.getLoadedLanguages().includes(lang ?? "");
        return highlighter.codeToHtml(text, {
          lang: known ? (lang as string) : "text",
          themes: { light: "github-light", dark: "github-dark" },
          defaultColor: false,
        });
      },

      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },

      image({ href, text, title }) {
        const size = sizes.get(href);
        const dims = size ? ` width="${size.width}" height="${size.height}"` : "";
        const caption = title ? ` title="${escapeHtml(title)}"` : "";
        return `<img src="${href}" alt="${escapeHtml(text)}"${dims}${caption} loading="lazy" decoding="async" />`;
      },

      link({ href, text, title }) {
        const external = /^https?:\/\//.test(href);
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : "";
        const caption = title ? ` title="${escapeHtml(title)}"` : "";
        return `<a href="${href}"${caption}${rel}>${text}</a>`;
      },
    },
  });

  return marked.parse(markdown);
}

// ৫. একটা file পড়ে meta আর markdown আলাদা করা
async function readPostFile(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const raw = await readFile(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ");
    throw new Error(`Invalid frontmatter in ${fileName} — ${issues}`);
  }

  const words = content.trim().split(/\s+/).length;

  const meta: PostMeta = {
    ...parsed.data,
    slug,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };

  return { meta, content };
}

// ৬. বাইরে থেকে যা ব্যবহার করা হবে

export async function getAllPosts(): Promise<PostMeta[]> {
  let fileNames: string[];
  try {
    fileNames = (await readdir(POSTS_DIR)).filter((name) => name.endsWith(".md"));
  } catch {
    return []; // এখনো কোনো post নেই
  }

  const posts = await Promise.all(fileNames.map((name) => readPostFile(name)));

  return posts
    .map(({ meta }) => meta)
    .filter((meta) => !meta.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string) {
  try {
    const { meta, content } = await readPostFile(`${slug}.md`);
    if (meta.draft && process.env.NODE_ENV !== "development") return null;
    return { meta, html: await renderMarkdown(content) };
  } catch {
    return null;
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  return [...new Set(posts.flatMap((post) => post.tags))].sort();
}