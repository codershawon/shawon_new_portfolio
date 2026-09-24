import type { CaseStudy } from "@/data/projects";
import { BulletList } from "@/components/ui/BulletList";
import { CaseStudyBlock } from "./CaseStudyBlock";

type CaseStudyStoryProps = {
  story: CaseStudy;
};

export function CaseStudyStory({ story }: CaseStudyStoryProps) {
  return (
    <>
      <CaseStudyBlock title="The problem">
        <p>{story.problem}</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="What I built">
        <p>{story.solution}</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Challenges">
        <BulletList items={story.challenges} />
      </CaseStudyBlock>

      <CaseStudyBlock title="Outcome">
        <p>{story.outcome}</p>
      </CaseStudyBlock>
    </>
  );
}