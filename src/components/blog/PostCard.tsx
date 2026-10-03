import Link from "next/link";
import type { PostMeta } from "@/data/blog";
import { TagList } from "@/components/ui/TagList";
import { PostMetaLine } from "./PostMetaLine";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative border-t border-line py-8 first:border-t-0 first:pt-0">
      <PostMetaLine date={post.date} readingMinutes={post.readingMinutes} />

      <h2 className="mt-2 text-xl tracking-normal sm:text-2xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors group-hover:text-brand-ink after:absolute after:inset-0"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mt-2 max-w-prose text-muted">{post.description}</p>

      {post.tags.length > 0 && (
        <div className="mt-4">
          <TagList tags={post.tags} label={`Topics in ${post.title}`} />
        </div>
      )}
    </article>
  );
}