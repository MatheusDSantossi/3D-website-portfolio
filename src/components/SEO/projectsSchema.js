export function buildProjectsSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://matheusdsantosr.com/#projects",
    name: "Matheus D. Santos Projects",
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
          name: "Matheus D. Santos",
          url: "https://matheusdsantosr.com/",
        },
        codeRepository: project.githubUrl || project.source_code_link,
        keywords: project.tags.map((tag) => tag.name).join(", "),
      },
    })),
  };
}
