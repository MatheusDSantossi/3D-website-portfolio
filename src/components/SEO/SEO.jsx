import { Helmet } from "react-helmet-async";

export function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  imageAlt = "Portfolio preview",
  robots = "index, follow",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:site_name" content="Matheus D. Santos" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      {image && (
        <meta
          property="og:image:alt"
          content={imageAlt}
        />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && (
        <meta
          name="twitter:image:alt"
          content={imageAlt}
        />
      )}
    </Helmet>
  );
}
