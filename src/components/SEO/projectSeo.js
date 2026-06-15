import {
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  getAbsoluteUrl,
  getProjectUrl,
} from "../../constants/site";

export function buildProjectMetadata(project) {
  const canonical = getProjectUrl(project.slug);
  const description =
    project.detail?.seoDescription ||
    project.detail?.summary ||
    project.headline ||
    project.description;
  const title =
    project.detail?.seoTitle ||
    `${project.name} Case Study`;
  const image = getAbsoluteUrl(project.detail?.seoImage || project.image || SITE_OG_IMAGE);

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    canonical,
    image,
    imageAlt: project.detail?.imageAlt || `${project.name} project preview`,
    type: "article",
  };
}

export function buildProjectSchema(project) {
  const canonical = getProjectUrl(project.slug);
  const image = getAbsoluteUrl(project.detail?.seoImage || project.image);
  const description =
    project.detail?.seoDescription ||
    project.detail?.summary ||
    project.headline ||
    project.description;
  const schemaType =
    project.detail?.schemaType ||
    (project.liveUrl ? "WebApplication" : "CreativeWork");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: canonical,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: `${project.name} Case Study | ${SITE_NAME}`,
        description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${canonical}#project`,
        },
        primaryImageOfPage: image
          ? {
              "@type": "ImageObject",
              url: image,
            }
          : undefined,
        inLanguage: "en-US",
      },
      {
        "@type": schemaType,
        "@id": `${canonical}#project`,
        name: project.name,
        description,
        url: project.liveUrl || canonical,
        image,
        ...(project.seo?.lastmod ? { dateModified: project.seo.lastmod } : {}),
        creator: {
          "@id": `${SITE_URL}/#person`,
        },
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
        ...(project.tags?.length
          ? { keywords: project.tags.map((tag) => tag.name).join(", ") }
          : {}),
        ...(project.liveUrl
          ? {
              applicationCategory: "WebApplication",
              operatingSystem: "Web",
            }
          : {}),
      },
    ],
  };
}
