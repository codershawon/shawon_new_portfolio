import { formatPostDate } from "@/data/blog";

type PostMetaLineProps = {
  date: string;
  readingMinutes: number;
};

export function PostMetaLine({ date, readingMinutes }: PostMetaLineProps) {
  return (
    <p className="flex flex-wrap items-center gap-2 text-[0.9rem] text-muted">
      <time dateTime={date}>{formatPostDate(date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes} min read</span>
    </p>
  );
}