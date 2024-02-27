import { notFound } from "next/navigation";
import ShowCaseStudy, { CaseStudyId, allowableCaseStudyIds } from "@/app/case-study/ShowCaseStudy";

export default function CaseStudyPage({ params: { id } }: { params: { id: string } }) {
  if (allowableCaseStudyIds.indexOf(id) === -1) {
    return notFound();
  }
  return <ShowCaseStudy id={id as CaseStudyId} />;
}
