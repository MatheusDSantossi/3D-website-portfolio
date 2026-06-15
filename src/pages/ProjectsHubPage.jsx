import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL, getAbsoluteUrl } from "../constants/site";
import { SEO } from "../components/SEO/SEO";
import JsonLd from "../components/SEO/JsonLd";
import { buildProjectsSchema } from "../components/SEO/projectsSchema";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { github } from "../assets";

function ProjectHubCard({ project, index }) {
  return (
    <motion.article
      variants={fadeIn("up", "spring", 0.08 + index * 0.04, 0.6)}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/75 shadow-card backdrop-blur-md transition hover:-translate-y-1 dark:bg-tertiary/85"
    >
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={getAbsoluteUrl(project.image)}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Featured
            </span>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-[22px] font-bold text-tertiary dark:text-white">
            {project.name}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-primary/75 dark:text-secondary">
            {project.headline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <span
                key={`${project.slug}-${tag.name}`}
                className={`rounded-full border border-primary/10 bg-white/70 px-3 py-1 text-xs font-medium ${tag.color}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="flex flex-wrap items-center gap-3 px-6 pb-6">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-tertiary px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-primary"
        >
          Open case study
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 px-4 py-2 text-sm text-primary transition hover:bg-primary-light dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            <ExternalLink className="h-4 w-4" />
            Live site
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 px-4 py-2 text-sm text-primary transition hover:bg-primary-light dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            <img src={github} alt="" aria-hidden="true" className="h-4 w-4" />
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectsHubPage() {
  const title = `${SITE_NAME} Projects`;
  const description =
    "A complete index of portfolio projects with summaries, featured images, and dedicated case-study pages.";
  const canonical = `${SITE_URL}/projects`;

  return (
    <main className="relative overflow-hidden bg-primary-light text-primary dark:bg-primary dark:text-white">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        image={SITE_OG_IMAGE}
      />
      <JsonLd data={buildProjectsSchema(projects)} />

      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-secondary-light/20 via-transparent to-transparent blur-3xl dark:from-secondary-light/20" />

      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-16 lg:py-32">
        <motion.div variants={textVariant(0.1)} initial="hidden" animate="show">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-black-100/60 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className={styles.sectionSubText}>Projects hub</p>
            <h1 className={`${styles.heroHeadText} !mt-3`}>Selected work</h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-8 text-primary/75 dark:text-secondary">
              Browse the full project collection. Each card links to a dedicated
              case study with unique metadata, structured data, and a canonical
              URL for search engines.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/75 p-6 shadow-card backdrop-blur-md dark:bg-tertiary/85">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-light dark:text-secondary">
              What you’ll find
            </p>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-primary/75 dark:text-secondary">
              <li>Project summaries tailored for quick scanning.</li>
              <li>Featured images when available.</li>
              <li>Direct links to case-study pages and outbound live links.</li>
              <li>SEO metadata built from the project data source.</li>
            </ul>
          </div>
        </div>

        <section className="mt-16" aria-labelledby="all-projects-title">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={styles.sectionSubText}>Project collection</p>
              <h2
                id="all-projects-title"
                className="mt-2 text-[22px] font-bold text-tertiary dark:text-white"
              >
                All projects
              </h2>
            </div>
            <span className="text-sm text-primary/60 dark:text-secondary">
              {projects.length} total
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectHubCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
