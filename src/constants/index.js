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
    // mongodb,
    // redux,
    tambau,
    ceos_solucoes,
    supermercado_santos,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    python,
    // threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: frontendDeveloper,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Manager",
      company_name: "Santos Supermarket",
      icon: supermercado_santos,
      iconBg: "#383E56",
      date: "January 2019 - February 2022",
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
      title: "IT Intern and Junior Developer",
      company_name: "Céos Soluções Empresariais",
      icon: ceos_solucoes,
      iconBg: "#383E56",
      date: "Oct 2023 - Present",
      points: [
        "Supported users and maintained systems, utilizing tools like Windows Server and TOTVS RM for network management and configuration.",
        "Contributed to a significant project implementing the TOTVS Protheus accounting system, working on areas like finance, purchasing, and inventory management.",
        "Provided technical support and ensured system functionality through daily checklists.",
        "Developed a website on Hostinger, focusing on usability and advanced features that improved user experience, furthering my full-stack development skills.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  