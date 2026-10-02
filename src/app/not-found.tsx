import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

// 404 page-এর canonical URL হয় না, তাই pageMetadata() ব্যবহার করছি না।
// noindex Next.js নিজেই বসিয়ে দেয়।
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="max-w-prose">
        <p className="text-[0.95rem] font-semibold text-brand-ink">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or it has moved somewhere else.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            See my work
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}