import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

import { SEO } from "../components/SEO/SEO";
import { SITE_NAME, SITE_URL } from "../constants/site";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-primary-light px-6 py-24 text-primary dark:bg-primary dark:text-white sm:px-16">
      <SEO
        title={`Page not found | ${SITE_NAME}`}
        description="The requested page could not be found."
        canonical={`${SITE_URL}/404`}
        robots="noindex, nofollow"
      />
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary-light dark:text-secondary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Page not found</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-primary/75 dark:text-secondary">
          The page you are looking for does not exist or may have moved. Use the
          links below to return to the portfolio or browse the available project
          pages.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-tertiary px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 dark:bg-white dark:text-primary"
          >
            <Home className="h-4 w-4" />
            Go home
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-black-100/60 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
