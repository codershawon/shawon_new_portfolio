---
title: "Post template — every feature this blog supports"
description: "A reference post showing every piece of formatting available. Keep draft set to true so this never goes live, and copy it when starting something new."
date: "2026-10-03"
tags: ["reference"]
cover: "/blog/template/cover.webp"
coverAlt: "Describe the cover image here for screen readers"
draft: true
---

This first paragraph is the hook. Keep it to two or three sentences that tell the reader what they get by reading on. No "In this post I will discuss" — just say the thing.

The second paragraph can set up the problem. Why did this matter enough to write about?

## Headings use two hashes

One hash is reserved for the title in frontmatter, so body headings start at `##`. Each one automatically gets an `id`, so `/blog/my-post#headings-use-two-hashes` scrolls straight here.

### Three hashes for sub-sections

Use these sparingly. If a post needs four levels of nesting, it probably wants to be two posts.

## Text formatting

Regular text, **bold for emphasis**, *italic for titles or terms*, and `inline code` for anything you'd type into a terminal or an editor.

Links to [another site](https://nextjs.org) open in a new tab automatically. Links to [your own pages](/projects) stay in the same tab.

You can also combine them: **`npm run build`** is bold inline code.

## Lists

Unordered, for things with no sequence:

- The first item
- The second item, which can be long enough to wrap onto a second line without breaking the spacing
- A third item with `inline code` inside it

Ordered, for steps that must happen in sequence:

1. Install the package
2. Add the component
3. Push and let the deploy run

## Code blocks

Always name the language after the opening backticks — that is what turns the colours on.

```ts
type PostMeta = {
  slug: string;
  title: string;
  readingMinutes: number;
};

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
```

Terminal commands use `bash`:

```bash
npm install gray-matter marked shiki image-size
npm run build
```

Available languages: `ts`, `tsx`, `js`, `jsx`, `json`, `bash`, `css`, `html`, `sql`, `md`. Anything else renders as plain text — to add more, edit the `langs` array in `src/lib/blog.ts`.

```json
{
  "name": "shawon-portfolio",
  "private": true
}
```

## Quotes

> Use a quote for someone else's words, or to pull out a single idea you want the reader to remember.
>
> Quotes can run to more than one paragraph.

## Images

Put the file in `public/blog/your-post-slug/` and reference it from the site root:

![Describe what the image shows — this text is read aloud to blind readers and shown if the image fails to load](/blog/template/example.webp)

Width and height are measured at build time and written into the HTML, so the page never jumps while images load. You don't have to do anything.

**Before committing an image:** run it through [Squoosh](https://squoosh.app), export as WebP, and keep it under 200KB. Screenshots straight off your machine are often 2–5MB, and git keeps them forever even after you delete them.

## Tables

| Option | What it does | Default |
| :--- | :--- | :--- |
| `draft` | Hides the post from production builds | `false` |
| `tags` | Shown on the card and under the post | `[]` |
| `cover` | Image path for social sharing | none |

## Horizontal rules

Three dashes make a divider, useful before a closing section:

---

## Closing

End with what the reader should take away, or what you plan to do next. One short paragraph is plenty.

---

## Frontmatter reference

Everything above the first `---` is settings, not content.

| Field | Required | Notes |
| :--- | :--- | :--- |
| `title` | Yes | Shown as the heading and in the browser tab |
| `description` | Yes | Card text, Google result, and social preview. One or two sentences |
| `date` | Yes | Must be `YYYY-MM-DD`. Any other format fails the build |
| `tags` | No | Lowercase, no spaces. Defaults to empty |
| `cover` | No | Path from the site root, e.g. `/blog/my-post/cover.webp` |
| `coverAlt` | No | Describe the cover image |
| `draft` | No | `true` keeps it out of production. Defaults to `false` |

## Checklist before publishing

- [ ] File name is lowercase with hyphens — it becomes the URL
- [ ] `description` reads well as a Google search result
- [ ] Every image compressed to WebP, under 200KB
- [ ] Every image has real alt text, not "image" or "screenshot"
- [ ] Every code block names its language
- [ ] `draft` removed or set to `false`
- [ ] `npm run build` passes
- [ ] Read it once on your phone before pushing