import { SITE_NAME, SITE_URL, getAbsoluteUrl, getProjectUrl } from "../../constants/site";

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
        "@type": project.liveUrl ? "SoftwareApplication" : "CreativeWork",
        name: project.name,
        description: project.headline || project.description,
        url: getProjectUrl(project.slug),
        image: getAbsoluteUrl(project.image),
        creator: {
          "@type": "Person",
          name: SITE_NAME,
          url: SITE_URL,
        },
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
        keywords: project.tags.map((tag) => tag.name).join(", "),
        ...(project.liveUrl
          ? {
              applicationCategory: "WebApplication",
              operatingSystem: "Web",
            }
          : {}),
      },
    })),
  };
}
