import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { projectRoutes } from "../src/constants/projectRoutes.js";

const SITE_URL = (
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://matheusdsantosr.com"
).replace(/\/+$/, "");

const lastmod = "2026-06-15";

const routes = [
  {
    path: "/",
    lastmod,
    priority: 1,
    changefreq: "weekly",
  },
  {
    path: "/projects",
    lastmod,
    priority: 0.9,
    changefreq: "weekly",
  },
  ...projectRoutes.filter((route) => route.path !== "/projects"),
];

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq || "monthly"}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve("public", "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve("public", "robots.txt"), robots, "utf8");
