import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { TagList } from "@/components/ui/TagList";
import { PostMetaLine } from "@/components/blog/PostMetaLine";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { profile } from "@/data/profile";
import { absoluteUrl } from "@/lib/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

// Build-এর সময় প্রতিটা post-এর page আগেই বানিয়ে রাখা
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return pageMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { meta, html } = post;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        url: absoluteUrl(`/blog/${slug}`),
        image: absoluteUrl(`/blog/${slug}/opengraph-image`),
        keywords: meta.tags,
        author: {
        "@type": "Person",
        name: profile.name,
        url: absoluteUrl("/"),
        },
    };

  return (
    <Container>
      <JsonLd data={articleSchema} />
      <article className="pt-10 pb-24 sm:pt-16">
        <BackLink href="/blog">All posts</BackLink>

        <header className="mt-8">
          <h1 className="text-3xl sm:text-4xl">{meta.title}</h1>
          <div className="mt-4">
            <PostMetaLine date={meta.date} readingMinutes={meta.readingMinutes} />
          </div>
        </header>

        {/* html আমাদের নিজের markdown থেকে তৈরি, বাইরের কারো লেখা নয় */}
        <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        {meta.tags.length > 0 && (
          <footer className="mt-12 border-t border-line pt-6">
            <TagList tags={meta.tags} label="Topics in this post" />
          </footer>
        )}
      </article>
    </Container>
  );
}