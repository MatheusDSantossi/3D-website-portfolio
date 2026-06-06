import { SITE_NAME, SITE_URL } from "../../constants/site";

export function buildProjectsSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#projects`,
    name: `${SITE_NAME} Projects`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.liveUrl || project.githubUrl || project.source_code_link,
        image: project.image,
        creator: {
          "@type": "Person",
          name: SITE_NAME,
          url: SITE_URL,
        },
        codeRepository: project.githubUrl || project.source_code_link,
        keywords: project.tags.map((tag) => tag.name).join(", "),
      },
    })),
  };
}
