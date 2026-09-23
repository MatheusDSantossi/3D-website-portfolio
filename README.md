# 3D Website Portfolio

![3D Website Portfolio Demo](https://github.com/user-attachments/assets/3206ca11-9572-47d0-aa48-3f87d3997b55)

**Live Demo:** [View the portfolio](https://www.matheusdsantosr.com/)

A personal portfolio website built with **React**, **Vite**, and **Three.js** to showcase my projects, experience, and development skills through an interactive 3D user interface.

This project combines modern frontend engineering with visual storytelling. It was created both as a professional portfolio and as a practical project for exploring 3D web experiences, responsive interfaces, animation, and client-side navigation.

## Overview

The site is designed to present my work in a more engaging way than a traditional static portfolio. It includes:

* a 3D-inspired hero experience
* dedicated sections for about, experience, and projects
* individual project detail pages
* responsive layouts and navigation
* animated and interactive visual elements

The goal is to balance **visual presentation, usability, and maintainable frontend architecture**.

## Features

* Interactive 3D visuals with Three.js
* Responsive design for desktop and mobile
* Route-based navigation with React Router
* Reusable React components
* Structured page and component organization
* Smooth scrolling and animated interactions
* Dedicated project detail pages
* Responsive navigation and interface elements

## Tech Stack

* **React**
* **Vite**
* **Three.js**
* **React Router**
* **Tailwind CSS**
* **JavaScript**
* **HTML / CSS**

## Project Structure

```text
src/
├── assets/
├── components/
├── constants/
├── pages/
├── utils/
├── App.jsx
└── main.jsx
```

### Main sections

* **components** — reusable interface components and portfolio sections
* **pages** — page-level views and project detail pages
* **constants** — shared configuration and portfolio content
* **utils** — helper functions and reusable logic
* **assets** — images, icons, and other static resources

## Getting Started

### Prerequisites

* Node.js
* npm or yarn

### Installation

```bash
git clone https://github.com/MatheusDSantossi/3D-website-portfolio.git
cd 3D-website-portfolio
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Screenshots

### Home

![Home Page](https://github.com/user-attachments/assets/8b007be1-eccf-4550-af8c-9b02dcad19b1)

### Projects

![Projects Page](https://github.com/user-attachments/assets/5331eb86-1ff2-425c-813f-1779b809979d)

### Project Details

![Projects Details Page](https://github.com/user-attachments/assets/18311c61-e3e1-4c54-ad56-03da906b248b)

### Mobile

![Projects Details Page](https://github.com/user-attachments/assets/99eb9f7f-fe7c-4e00-bfa5-34253870845c)

## Why I Built This

I built this project to create a portfolio that reflects both my **frontend engineering skills** and my interest in interactive web experiences.

Beyond presenting my work, the project gave me an opportunity to explore:

* component-based frontend architecture
* 3D experiences on the web with Three.js
* responsive interface design
* client-side routing
* animation and interaction design
* presenting technical projects through visual storytelling

## Future Improvements

* improve accessibility across the application
* further optimize mobile performance
* refine 3D interactions and transitions
* add more detailed project case studies
* document performance measurements and optimization decisions

## Acknowledgements

### Foundation

This portfolio started as a follow-along of the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) tutorial [Build and Deploy an Amazing 3D Web Developer Portfolio in React JS](https://www.youtube.com/watch?v=0fYi8SGA20k) by Adrian Hajdin, along with its [companion repository](https://github.com/adrianhajdin/project_3D_developer_portfolio).

From the tutorial, I kept the overall section layout (Hero, About, Experience, Tech, Works, Contact), the `SectionWrapper` higher-order component pattern, the Framer Motion variants in `utils/motion.js`, the base React Three Fiber scenes (Earth, tech balls, stars), and the initial set of technology icons.

### What I built and changed

After completing the tutorial, I customized and extended the project substantially:

- Replaced the 3D computer in the hero with a custom animated bloom-line scene
- Light/dark theme with a persisted preference and animated transitions
- Multi-page routing with React Router: a projects hub and individual project detail pages
- SEO work: `react-helmet-async`, JSON-LD structured data, and `sitemap.xml` / `robots.txt` generated at build time
- Reworked the Works section into a carousel of interactive project cards
- Tech section with experience progress bars and tooltips
- Contact form rebuilt with `react-hook-form` validation and success/error feedback
- Performance work: memoized components, throttled scroll-based mounting of 3D canvases, and Vercel Speed Insights
- All content, copy, projects, and branding are my own

### Third-party assets and code

**3D models** (from Sketchfab, licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)):

- This work is based on ["Stylized planet"](https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70) by [cmzw](https://sketchfab.com/cmzw).
- This work is based on ["Gaming Desktop PC"](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66) by [Yolala1232](https://sketchfab.com/Yolala1232).

**Line animation:** the hero's line rendering uses [MeshLine](https://github.com/pmndrs/meshline), originally created as THREE.MeshLine by Jaume Sánchez Elias.

**Libraries:** React, Vite, Three.js, React Three Fiber, Drei, maath, Framer Motion, Tailwind CSS, React Router, react-tilt, react-vertical-timeline-component, react-slick, react-hook-form, EmailJS, Lucide, and React Icons.

## License

See the repository's `LICENSE` file for usage and distribution terms.
