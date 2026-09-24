import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { AboutStory } from "@/sections/about/AboutStory";
import { QuickFacts } from "@/sections/about/QuickFacts";
import { Skills } from "@/sections/about/Skills";
import { Journey } from "@/sections/about/Journey";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shawon Barua is a full-stack web developer in Chattogram, Bangladesh, working on healthcare systems, SaaS tools and Shopify apps.",
};

export default function AboutPage() {
  return (
        <>
      <Container className="pb-20">
        <PageHeader title="About" description="How I got here and how I work." />

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <AboutStory />
          </div>

          <aside aria-label="Quick facts" className="lg:col-span-5">
            <QuickFacts />
          </aside>
        </div>
      </Container>
      <Journey />
      <Skills />
    </>
  );
}