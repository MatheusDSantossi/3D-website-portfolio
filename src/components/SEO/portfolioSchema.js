import {
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  getAbsoluteUrl,
  getProjectUrl,
} from "../../constants/site";

export function buildPortfolioSchema(projects) {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const projectsId = `${SITE_URL}/#projects`;

  const projectEntities = projects.map((project) => {
    const url =
      project.liveUrl || project.githubUrl || getProjectUrl(project.slug);

    const isSoftwareApplication = Boolean(project.liveUrl);

    return {
      "@type": isSoftwareApplication ? "SoftwareApplication" : "CreativeWork",
      "@id": `${SITE_URL}/#project-${project.slug}`,
      name: project.name,
      description: project.description,
      url,
      image: getAbsoluteUrl(project.image),
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
        name: SITE_NAME,
        url: SITE_URL,
        image: SITE_OG_IMAGE,
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
        url: SITE_URL,
        name: SITE_NAME,
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
        url: SITE_URL,
        name: `${SITE_NAME} | Software Engineer`,
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
          url: SITE_OG_IMAGE,
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
