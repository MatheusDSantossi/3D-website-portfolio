import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";
import { SEO } from "../components/SEO/SEO";
import StructuredData from "../components/SEO/StructuredData";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "../constants/site";

export default function HomePage({ showLine, showEarth }) {
  return (
    <main className="relative z-0 bg-primary-light dark:bg-primary">
      <SEO
        title={`${SITE_NAME} | Software Engineer`}
        description={SITE_DESCRIPTION}
        canonical={SITE_URL}
        image={SITE_OG_IMAGE}
      />
      <StructuredData />
      <div className="bg-primary-light dark:bg-hero-pattern dark:bg-cover dark:bg-no-repeat dark:bg-center">
        <Navbar />
        <Hero showLine={showLine} />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        {showEarth && <StarsCanvas />}
      </div>
    </main>
  );
}
