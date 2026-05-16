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
} from "../assets";

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
    name: "Social Media",
    description:
      "A mobile platform that allows users to navigate through the system, see, and manage their perfil informaiton, providing a convenient and efficient solution for social media.",
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
    source_code_link:
      "https://github.com/MatheusDSantossi/flutter-project/tree/flutter_project_mobile_v13/flutter_application_v2",
  },
  {
    name: "Crabby Game",
    description:
      "Crabby Conquest: Mr. Piggy's Adventure is a Java-based block movement game developed as part of a university project for the Man-Machine Interface course. The game introduces players to the concept of block programming by incorporating logical challenges where they manipulate blocks to solve puzzles. Designed as an educational tool, it aims to make programming principles accessible and engaging for beginners while blending creativity and fun into the gameplay.",
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
    source_code_link:
      "https://github.com/MatheusDSantossi/projeto-IHM/tree/IHM_project_block_game_vFinal/Documents/universidade_stuff/IHM_stuff/IHM-Project/Project_IHM_full_edition_v9",
  },
  {
    name: "Portfolio Website",
    description:
      "A visually stunning and fully responsive portfolio website built using Next.js, Tailwind CSS, and Framer Motion. This project showcases a modern and dynamic design, incorporating smooth animations and an optimized layout to highlight the work and skills of somebody. Developed as one of my first projects using these technologies, it was inspired by a YouTube tutorial and served as a foundational step in mastering advanced web development tools and frameworks.",
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
    source_code_link:
      "https://github.com/MatheusDSantossi/portfolio-website-p2/tree/web_portfolio_project_2_v1",
  },
  {
    name: "Learning Journey",
    description:
      "Welcome to my Learning Journey repository! 🚀 This evolving codebase serves as a digital playground where I document my progress in mastering various programming languages, frameworks, and tools. Currently focused on Python-based projects, this repository will expand to include diverse technologies like Next.js, Tailwind CSS, and more as I explore web development, automation, and beyond.",
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
    source_code_link:
      "https://github.com/MatheusDSantossi/learning-journey/tree/main?tab=readme-ov-file/",
  },
  {
    name: "Chatbot Hecate Landing Page 🚀",
    description:
      "A clean, responsive React + Tailwind CSS site showcasing Hecate. Our Python/Django AI chatbot.The landing page have: 1) Hero Section: Overlapping robot and laptop images with a clear “AI-Powered” message. 2) Why Hecate?: Radial-gradient feature highlight with dynamic icons and a giant robot-hand graphic. 3) Modular Components: TypeScript + Tailwind v4 for easy reuse and consistent styling.Dive in to see how we turn Hecate’s intelligent tools into an engaging, production-ready landing page.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "learning-in-public",
        color: "orange-text-gradient",
      },
    ],
    image: hecate_landing_page,
    source_code_link:
      "https://github.com/MatheusDSantossi/hecate-landing-page.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
