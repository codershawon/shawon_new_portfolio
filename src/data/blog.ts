export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  draft: boolean;
  readingMinutes: number;
};

export const blog = {
  title: "Blog",
  description:
    "Notes on building web applications — what worked, what broke, and what I'd do differently.",
  postsPerPage: 10,
} as const;

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}