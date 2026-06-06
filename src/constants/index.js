import {
  mobile,
  backend,
  frontendDeveloper,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  java,
  postgresql,
  python,
  mysql,
  // mongodb,
  // redux,
  tambau,
  ceos_solucoes,
  grupo_atan,
  supermercado_santos,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  social_media,
  crabby_game,
  portfolio_website,
  learning_journey,
  hecate_landing_page,
  plai_landing_page,
  posture_guard,
} from "../assets";
import { getProjectUrl } from "./site";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineering",
    icon: web,
  },
  {
    title: "AI & Data Solution",
    icon: mobile,
  },
  {
    title: "Backend Architecture",
    icon: backend,
  },
  {
    title: "Cross-Platform Apps",
    icon: frontendDeveloper,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    experience: "95%",
  },
  {
    name: "CSS",
    icon: css,
    experience: "95%",
  },
  {
    name: "JavaScript",
    icon: javascript,
    experience: "95%",
  },
  {
    name: "TypeScript",
    icon: typescript,
    experience: "95%",
  },
  {
    name: "React",
    icon: reactjs,
    experience: "95%",
  },
  {
    name: "Java",
    icon: java,
    experience: "90%",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    experience: "95%",
  },
  {
    name: "Node JS",
    icon: nodejs,
    experience: "85%",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    experience: "85%",
  },
  {
    name: "Python",
    icon: python,
    experience: "95%",
  },
  {
    name: "git",
    icon: git,
    experience: "90%",
  },
  {
    name: "figma",
    icon: figma,
    experience: "90%",
  },
  {
    name: "docker",
    icon: docker,
    experience: "75%",
  },
  {
    name: "MySQL",
    icon: mysql,
    experience: "75%",
  },
];

const experiences = [
  {
    title: "Multifunctional Team Member",
    company_name: "Santos Supermarket",
    icon: supermercado_santos,
    iconBg: "#383E56",
    date: "Jan 2019 - Feb 2022",
    points: [
      "Managed a range of responsibilities in a family-owned supermarket, including hardware maintenance, troubleshooting, and sales support.",
      "Provided customer service, handling inquiries and assisting with sales, gaining valuable communication skills.",
      "Maintained systems by overseeing invoice registration and account tracking, ensuring operational efficiency.",
      "Developed a broad understanding of business operations, laying the foundation for my interest in full-stack development.",
    ],
  },
  {
    title: " Young Apprenticer",
    company_name: " Tambaú Alimentos",
    icon: tambau,
    iconBg: "#000000FF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Participated in trainings on safety, ethics, and quality management (5S, Kanban) through courses at Senai, gaining a foundation in essential workplace practices.",
      "Developed automation solutions in Excel VBA, creating macros to streamline repetitive tasks and boost team productivity.",
      "Conducted data analysis and created basic dashboards in Power BI, helping the team visualize data insights for improved decision-making.",
      "Acquired technical and interpersonal skills, building a strong base for a career in data and technology.",
    ],
  },
  {
    title: "IT Intern progressed to Support Analyst",
    company_name: "Céos Soluções Empresariais",
    icon: ceos_solucoes,
    iconBg: "#383E56",
    date: "Oct 2023 - June 2025",
    points: [
      "Supported users and maintained systems, utilizing tools like Windows Server and TOTVS RM for network management and configuration.",
      "Contributed to a significant project implementing the TOTVS Protheus accounting system, working on areas like finance, purchasing, and inventory management.",
      "Provided technical support and ensured system functionality through daily checklists.",
      "Developed a website on Hostinger, focusing on usability and advanced features that improved user experience, furthering my full-stack development skills.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Grupo Atan",
    icon: grupo_atan,
    iconBg: "#000000FF",
    date: "July 2025 - Present",
    points: [
      "Develop and maintain React/TypeScript applications, delivering new features, fixing bugs, and ensuring code quality.",
      "Led a major navigation refactor, replacing route-based flow with a component registry system to reduce reloads and improve UX.",
      "Contribute to a POS system with SEFAZ integration, building screens, operational flows, and feature improvements.",
      "Develop Python scripts for automation and collaborate in an Agile team through sprint planning, code reviews, and incremental delivery.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    slug: "social-media-app",
    name: "Social Media App",
    headline:
      "A lightweight cross-platform mobile app for real-time user interaction.",
    description:
      "A mobile application designed for smooth user profile management and content sharing. Built to explore cross-platform state management and seamless backend integration, it features responsive layouts and fluid UI animations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: social_media,
    liveUrl: null,
    featured: false,
    githubUrl:
      "https://github.com/MatheusDSantossi/flutter-project/tree/flutter_project_mobile_v13/flutter_application_v2",
  },
  {
    slug: "crabby-game",
    name: "Crabby Game",
    headline:
      "An educational Java puzzle game teaching block-based logic principles.",
    description:
      "Developed as a university project for the Human-Machine Interface course, this desktop game introduces beginners to block-based programming. Players guide 'Mr. Piggy' through puzzles, translating foundational logic and structural thinking into engaging gameplay mechanics.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "images edition",
        color: "green-text-gradient",
      },
      {
        name: "MMI",
        color: "pink-text-gradient",
      },
    ],
    image: crabby_game,
    liveUrl: null,
    featured: false,
    githubUrl:
      "https://github.com/MatheusDSantossi/projeto-IHM/tree/IHM_project_block_game_vFinal/Documents/universidade_stuff/IHM_stuff/IHM-Project/Project_IHM_full_edition_v9",
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    headline:
      "My personal developer portfolio showcasing web applications and open-source work.",
    description:
      "A responsive portfolio built to master modern frontend tools. It served as a practical foundation for implementing fluid motion layouts, structured styling systems, and component-driven architecture from scratch.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_website,
    liveUrl: null,
    featured: false,
    githubUrl:
      "https://github.com/MatheusDSantossi/portfolio-website-p2/tree/web_portfolio_project_2_v1",
  },
  {
    slug: "learning-journey",
    name: "Learning Journey",
    headline:
      "A central repository for tracking my technical growth and code experiments.",
    description:
      "An evolving digital playground where I build in public and archive my progress across different languages and domains. From Python automation to modern JavaScript frameworks, it acts as a transparent log of my continuous learning.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "learning-in-public",
        color: "green-pink-gradient",
      },
    ],
    image: learning_journey,
    liveUrl: null,
    featured: false,
    githubUrl:
      "https://github.com/MatheusDSantossi/learning-journey/tree/main?tab=readme-ov-file/",
  },
  {
    slug: "hecate-landing-page",
    name: "Chatbot Hecate Landing Page",
    headline:
      "A high-performance product page for an intelligent customer terminal chatbot.",
    description:
      "A fast, modern showcase for the Hecate AI platform. Built with strong attention to responsive design, using modular component structures and advanced CSS layout techniques to highlight complex product features clean and clearly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-v4",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "building-in-public",
        color: "orange-text-gradient",
      },
    ],
    image: hecate_landing_page,
    liveUrl: null,
    featured: false,
    githubUrl: "https://github.com/MatheusDSantossi/hecate-landing-page.git",
  },
  {
    slug: "plai",
    aliases: ["plai-landing-page"],
    name: "Plai's Landing Page",
    headline:
      "An interactive page for an AI curation tool converting prompts into custom playlists.",
    description:
      "The official web interface for Plai, an application that translates plain-text user intent into tailored educational streams and content paths. Built with clean UI patterns to drive early user engagement during its public launch.",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "building-in-public",
        color: "orange-text-gradient",
      },
    ],
    image: plai_landing_page,
    liveUrl: "https://plai.matheusdsantosr.com/",
    featured: true,
    githubUrl: null,
    detail: {
      seoTitle: "Plai Case Study",
      seoDescription:
        "A case study for Plai, an AI-powered web app that turns plain-language prompts into curated learning playlists and content paths.",
      valueProposition:
        "Plai turns a simple prompt into a tailored learning playlist, helping users move from curiosity to a structured path faster.",
      whatItIs:
        "Plai is a web application for AI-guided content curation. The landing page was designed to communicate the product vision quickly, build trust, and drive early launch engagement.",
      problem:
        "The product needed a clear, persuasive public-facing experience that explained the value of prompt-based curation without overwhelming first-time visitors.",
      solution:
        "I designed a focused landing page with concise messaging, strong hierarchy, and visual storytelling so the core product idea could be understood in seconds.",
      stack: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          title: "Design System",
          items: [
            "Responsive layout",
            "Accessible components",
            "Tailwind CSS patterns",
          ],
        },
        {
          title: "Product Focus",
          items: [
            "AI-assisted curation",
            "Launch marketing",
            "Public-facing growth",
          ],
        },
      ],
      results: [
        "Shipped a polished launch page that could support a public product introduction.",
        "Created a clearer product narrative for the AI curation workflow.",
        "Established a reusable structure that can expand into a larger product marketing site.",
      ],
      links: [
        {
          label: "Live site",
          href: "https://plai.matheusdsantosr.com/",
          type: "primary",
        },
      ],
      schemaType: "WebApplication",
      imageAlt: "Plai landing page preview",
    },
  },
  {
    slug: "posture-guard",
    name: "Posture Guard",
    headline:
      "A privacy-focused desktop application monitoring posture locally on the edge.",
    description:
      "A computer vision desktop utility that helps users maintain healthy ergonomics. By intentional design, all data processing runs strictly on the local hardware; video streams never leave the machine and all session memory clears upon closure.",
    tags: [
      {
        name: "python",
        color: "white-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "data-analysis",
        color: "blue-text-gradient",
      },
      {
        name: "building-in-public",
        color: "orange-text-gradient",
      },
    ],
    image: posture_guard,
    liveUrl: null,
    featured: false,
    githubUrl: "https://github.com/MatheusDSantossi/posture-guard",
  },
];

export { services, technologies, experiences, testimonials, projects };

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug) =>
  projects.find(
    (project) => project.slug === slug || project.aliases?.includes(slug),
  );

export const getProjectCanonicalUrl = (slug) => {
  const project = getProjectBySlug(slug);
  return project ? getProjectUrl(project.slug) : getProjectUrl(slug);
};
