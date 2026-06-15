import { Navigate, useParams } from "react-router-dom";

import ProjectDetail from "../components/ProjectDetail";
import ProjectSchema from "../components/SEO/ProjectSchema";
import { SEO } from "../components/SEO/SEO";
import { getProjectBySlug } from "../constants";
import { buildProjectMetadata } from "../components/SEO/projectSeo";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const metadata = buildProjectMetadata(project);

  if (slug !== project.slug) {
    return <Navigate to={`/projects/${project.slug}`} replace />;
  }

  return (
    <>
      <SEO {...metadata} />
      <ProjectSchema project={project} />
      <ProjectDetail project={project} />
    </>
  );
}
