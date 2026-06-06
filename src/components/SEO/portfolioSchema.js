// src/components/SEO/portfolioSchema.js
export function buildPortfolioSchema(projects) {
  const personId = "https://matheusdsantosr.com/#person";
  const websiteId = "https://matheusdsantosr.com/#website";
  const webpageId = "https://matheusdsantosr.com/#webpage";
  const projectsId = "https://matheusdsantosr.com/#projects";

  const projectEntities = projects.map((project) => {
    const url =
      project.liveUrl ||
      project.githubUrl ||
      `https://matheusdsantosr.com/#project-${project.slug}`;

    const isSoftwareApplication = Boolean(project.liveUrl);

    return {
      "@type": isSoftwareApplication ? "SoftwareApplication" : "CreativeWork",
      "@id": `https://matheusdsantosr.com/#project-${project.slug}`,
      name: project.name,
      description: project.description,
      url,
      image: project.image,
      creator: {
        "@id": personId,
      },
      keywords: project.tags.map((tag) => tag.name).join(", "),
      ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      ...(isSoftwareApplication
        ? {
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
          }
        : {}),
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Matheus D. Santos",
        url: "https://matheusdsantosr.com/",
        image: "https://matheusdsantosr.com/og-image.png",
        jobTitle: "Software Engineer",
        description:
          "Software engineer and full stack developer specializing in React, Python, AI applications, and SaaS products.",
        sameAs: [
          "https://github.com/MatheusDSantossi",
          "https://www.linkedin.com/in/matheussantossi",
          "https://x.com/MSantos79880",
          "https://www.reddit.com/user/matheusdsantosr",
          "https://dribbble.com/matheusdsantosr",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "Tailwind CSS",
          "Flutter",
          "Machine Learning",
          "Artificial Intelligence",
          "SaaS Development",
          "Data Analysis",
          "Full Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: "https://matheusdsantosr.com/",
        name: "Matheus D. Santos",
        description:
          "Portfolio of Matheus D. Santos, fullstack building web applications, AI tools, and SaaS products.",
        publisher: {
          "@id": personId,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: "https://matheusdsantosr.com/",
        name: "Matheus D. Santos | Software Engineer",
        description:
          "Portfolio of Matheus D. Santos, fullstack building web applications, AI tools, and SaaS products.",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": personId,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://matheusdsantosr.com/og-image.png",
        },
        mainEntity: {
          "@id": personId,
        },
        hasPart: {
          "@id": projectsId,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: "Featured Projects",
        itemListElement: projectEntities.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": project["@id"],
          },
        })),
      },
      ...projectEntities,
    ],
  };
}
