import JsonLd from "./JsonLd";
import { buildProjectSchema } from "./projectSeo";

export default function ProjectSchema({ project }) {
  if (!project) {
    return null;
  }

  return <JsonLd data={buildProjectSchema(project)} />;
}
