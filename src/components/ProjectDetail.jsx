import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { getAbsoluteUrl } from "../constants/site";

const renderStackGroups = (project) => {
  if (project.detail?.stack?.length) {
    return project.detail.stack;
  }

  if (project.tags?.length) {
    return [
      {
        title: "Core stack",
        items: project.tags.map((tag) => tag.name),
      },
    ];
  }

  return [
    {
      title: "Core stack",
      items: ["Information not provided"],
    },
  ];
};

const renderResults = (project) => {
  if (project.detail?.results?.length) {
    return project.detail.results;
  }

  return [
    "Built as part of the portfolio and product storytelling layer.",
    "Ready to expand with richer project-specific details later.",
  ];
};

const renderLinks = (project) => {
  const links = project.detail?.links?.length
    ? project.detail.links
    : [
        ...(project.liveUrl
          ? [
              {
                label: "Live site",
                href: project.liveUrl,
                type: "primary",
              },
            ]
          : []),
        ...(project.githubUrl
          ? [
              {
                label: "Source code",
                href: project.githubUrl,
                type: "secondary",
              },
            ]
          : []),
      ];

  return links;
};

const getRelatedProjects = (project) =>
  projects
    .filter((item) => item.slug !== project.slug)
    .map((item) => {
      const sharedTags = item.tags.filter((tag) =>
        project.tags?.some((projectTag) => projectTag.name === tag.name),
      ).length;

      return {
        ...item,
        score: (item.featured === project.featured ? 1 : 0) + sharedTags,
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);

function InfoCard({ title, children, index }) {
  return (
    <motion.section
      variants={fadeIn("up", "spring", 0.1 + index * 0.08, 0.6)}
      className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-card backdrop-blur-md dark:bg-tertiary/85"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
    >
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
        className="text-[22px] font-bold text-tertiary dark:text-white"
      >
        {title}
      </h2>
      <div className="mt-4 text-[15px] leading-7 text-primary/80 dark:text-secondary">
        {children}
      </div>
    </motion.section>
  );
}

export default function ProjectDetail({ project }) {
  const heroSummary =
    project.detail?.valueProposition || project.headline || project.description;
  const stackGroups = renderStackGroups(project);
  const results = renderResults(project);
  const links = renderLinks(project);
  const relatedProjects = getRelatedProjects(project);
  const imageSrc = getAbsoluteUrl(project.detail?.image || project.image);
  const imageAlt = project.detail?.imageAlt || `${project.name} preview image`;

  return (
    <main className="relative overflow-hidden bg-primary-light text-primary dark:bg-primary dark:text-white">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-secondary-light/20 via-transparent to-transparent blur-3xl dark:from-secondary-light/20" />
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-16 lg:py-32">
        <motion.div variants={textVariant(0.1)} initial="hidden" animate="show">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-black-100/60 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </motion.div>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.8)}
            initial="hidden"
            animate="show"
          >
            <p className={styles.sectionSubText}>Project detail</p>
            <h1 className={`${styles.heroHeadText} !mt-3`}>{project.name}</h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-8 text-primary/75 dark:text-secondary">
              {heroSummary}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3"
              aria-label="Technologies used"
            >
              {stackGroups
                .flatMap((group) => group.items)
                .map((item) => (
                  <span
                    key={`${project.slug}-${item}`}
                    className="rounded-full border border-primary/10 bg-white/70 px-3 py-1 text-sm font-medium text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    {item}
                  </span>
                ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={`${project.slug}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    link.type === "primary"
                      ? "bg-tertiary text-white shadow-card dark:bg-white dark:text-primary"
                      : "border border-primary/10 bg-white/70 text-primary backdrop-blur-md dark:border-white/10 dark:bg-black-100/60 dark:text-white"
                  }`}
                >
                  {(link.label || "").toLowerCase().includes("source") ||
                  (link.href || "").includes("github") ? (
                    <img
                      src={github}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                  {link.label}
                </a>
              ))}

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-secondary-light/30 bg-secondary-light/10 px-5 py-3 text-sm font-semibold text-secondary-light transition hover:-translate-y-0.5 dark:text-secondary"
              >
                <Sparkles className="h-4 w-4" />
                Browse all projects
              </Link>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeIn("left", "spring", 0.25, 0.85)}
            initial="hidden"
            animate="show"
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-tertiary/90 p-3 shadow-card dark:bg-black-100/90"
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-[320px] w-full rounded-[22px] object-cover sm:h-[420px]"
              />
            ) : (
              <div className="flex h-[320px] items-center justify-center rounded-[22px] bg-black/20 text-secondary sm:h-[420px]">
                Preview unavailable
              </div>
            )}

            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">
                Case study summary
              </p>
              <p className="mt-2 text-sm leading-6 text-white/90">
                {project.detail?.seoDescription || project.description}
              </p>
            </div>
          </motion.aside>
        </div>

        <div className="mt-16 mb-8 grid gap-6 lg:grid-cols-2">
          <InfoCard title="What It Is" index={0}>
            <p>{project.detail?.whatItIs || project.description}</p>
          </InfoCard>

          <InfoCard title="Problem" index={1}>
            <p>
              {project.detail?.problem ||
                "The project needed a clearer story, sharper hierarchy, and a better way to communicate the value of the solution quickly."}
            </p>
          </InfoCard>

          <InfoCard title="Solution" index={2}>
            <p>{project.detail?.solution || project.headline}</p>
          </InfoCard>

          <InfoCard title="Stack" index={3}>
            <div className="space-y-5">
              {stackGroups.map((group) => (
                <div key={`${project.slug}-${group.title}`}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-light dark:text-secondary">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={`${project.slug}-${group.title}-${item}`}
                        className="rounded-full border border-primary/10 bg-primary-light px-3 py-1 text-sm text-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Results" index={4}>
          <ul className="grid gap-3 md:grid-cols-2">
            {results.map((result) => (
              <li
                key={`${project.slug}-${result}`}
                className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white/60 p-4 text-[15px] leading-7 text-primary/80 dark:border-white/10 dark:bg-black-100/50 dark:text-secondary"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary-light dark:bg-secondary" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        {relatedProjects.length > 0 && (
          <section className="mt-6 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-card backdrop-blur-md dark:bg-tertiary/85">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className={styles.sectionSubText}>Next steps</p>
                <h2 className="mt-2 text-[22px] font-bold text-tertiary dark:text-white">
                  Related Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-sm font-semibold text-secondary-light underline decoration-secondary-light/30 underline-offset-4"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  to={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-primary/10 bg-primary-light/80 transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-black-100/60"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={getAbsoluteUrl(item.image)}
                      alt={`${item.name} preview`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-tertiary dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-primary/70 dark:text-secondary">
                      {item.headline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
