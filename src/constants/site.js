const stripTrailingSlash = (value) => value.replace(/\/+$/, "");

export const SITE_NAME = "Matheus D. Santos";
export const SITE_DESCRIPTION =
  "Portfolio of Matheus D. Santos, software engineer building web apps, products, and automation tools.";
export const SITE_URL = stripTrailingSlash(
  import.meta.env.VITE_SITE_URL || "https://matheusdsantosr.com",
);

export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const getAbsoluteUrl = (value) => {
  if (!value) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

export const getProjectUrl = (slug) => `${SITE_URL}/projects/${slug}`;
