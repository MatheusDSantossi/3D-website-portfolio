export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://matheusdsantosr.com/#person",

  name: "Matheus D. Santos",
  url: "https://matheusdsantosr.com/",
  image: "https://matheusdsantosr.com/profile.jpg",

  jobTitle: "Full Stack Developer",

  description:
    "Full stack developer specializing in TypeScript, React, Next.js, Python, Java, AI applications, and SaaS products.",

  sameAs: [
    "https://github.com/MatheusDSantossi",
    "https://www.linkedin.com/in/matheussantossi",
    "https://x.com/MSantos79880",
  ],

  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
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
  "@id": "https://matheusdsantosr.com/#website",

  url: "https://matheusdsantosr.com/",
  name: "Matheus D. Santos",
  description:
    "Portfolio of Matheus D. Santos, software engineer building web applications, AI tools, and SaaS products.",

  publisher: {
    "@id": "https://matheusdsantosr.com/#person",
  },

  inLanguage: "en-US",
};

export const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://matheusdsantosr.com/#webpage",

  url: "https://matheusdsantosr.com/",
  name: "Matheus D. Santos | Software Engineer",
  description:
    "Portfolio of Matheus D. Santos, software engineer building web applications, AI tools, and SaaS products.",

  isPartOf: {
    "@id": "https://matheusdsantosr.com/#website",
  },

  about: {
    "@id": "https://matheusdsantosr.com/#person",
  },

  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://matheusdsantosr.com/og-image.png",
  },

  inLanguage: "en-US",
};
