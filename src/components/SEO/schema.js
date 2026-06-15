import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "../../constants/site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,

  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,

  jobTitle: "Full Stack Developer",

  description:
    "Full stack developer specializing in TypeScript, React, Next.js, Python, Java, AI applications, and SaaS products.",

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

  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Federal Rural University of Pernambuco (UFRPE)",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Portfolio of Matheus D. Santos, fullstack building web applications, AI tools, and SaaS products.",

  publisher: {
    "@id": `${SITE_URL}/#person`,
  },

  inLanguage: "en-US",
};

export const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,

  url: SITE_URL,
  name: `${SITE_NAME} | Fullstack developer`,
  description:
    "Portfolio of Matheus D. Santos, Fullstack developer building web applications, AI tools, and SaaS products.",

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  about: {
    "@id": `${SITE_URL}/#about`,
  },

  primaryImageOfPage: {
    "@type": "ImageObject",
    url: SITE_OG_IMAGE,
  },

  inLanguage: "en-US",
};
