import AClient from "./a-client";
import BClient from "./b-client";

const allowableCaseStudies = {
  "a-client": AClient,
  "b-client": BClient,
};

export type CaseStudyId = keyof typeof allowableCaseStudies;
export const allowableCaseStudyIds = Object.keys(allowableCaseStudies);

export default function ShowCaseStudy({ id }: { id: CaseStudyId }) {
  const Component = allowableCaseStudies[id];

  return <Component />;
}
