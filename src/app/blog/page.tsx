import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PostCard } from "@/components/blog/PostCard";
import { blog } from "@/data/blog";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata({
    title: blog.title,
    description: blog.description,
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container>
      <PageHeader title={blog.title} description={blog.description} />

      {posts.length === 0 ? (
        <p className="pb-24 text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="max-w-3xl pb-24">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}