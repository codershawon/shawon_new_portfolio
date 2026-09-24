import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { BulletList } from "@/components/ui/BulletList";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { CaseStudyHeader } from "@/sections/case-study/CaseStudyHeader";
import { ProjectFacts } from "@/sections/case-study/ProjectFacts";
import { CaseStudyBlock } from "@/sections/case-study/CaseStudyBlock";
import { CaseStudyStory } from "@/sections/case-study/CaseStudyStory";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// ১. Build-এর সময় কোন কোন page বানাতে হবে
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// ২. প্রতিটা page-এর নিজস্ব title আর description
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

// ৩. Page নিজে
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-10 pb-24 sm:pt-14">
      <Container>
        <BackLink href="/projects">All projects</BackLink>

        <div className="mt-8">
          <CaseStudyHeader project={project} />
        </div>

        <div className="mt-12">
          <ProjectImage project={project} sizes="(min-width: 1200px) 1150px, 100vw" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside aria-label="Project facts" className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <ProjectFacts project={project} />
            </div>
          </aside>

          <div className="space-y-12 lg:col-span-8">
            <CaseStudyBlock title="Highlights">
              <BulletList items={project.highlights} />
            </CaseStudyBlock>

            {project.caseStudy && <CaseStudyStory story={project.caseStudy} />}
          </div>
        </div>
      </Container>
    </article>
  );
}