import { projects } from "../../constants";
import JsonLd from "./JsonLd";
import { buildPortfolioSchema } from "./portfolioSchema";
// import { buildProjectsSchema } from "./projectsSchema";
import { personSchema, websiteSchema, webpageSchema } from "./schema";

export default function StructuredData() {
  // const projectsSchema = buildProjectsSchema(projects);
  const projectsSchema = buildPortfolioSchema(projects);
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={projectsSchema} />
    </>
  );
}
