import { Tilt } from "react-tilt";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider-overrides.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const imageX = useTransform(mouseX, (value) => `${(value - 50) * 0.06}%`);
  const imageY = useTransform(mouseY, (value) => `${(value - 50) * 0.06}%`);
  const lightMask = useMotionTemplate`radial-gradient(240px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.18), transparent 62%)`;

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
    glowX.set(x);
    glowY.set(y);
  };

  const resetPointer = () => {
    mouseX.set(50);
    mouseY.set(50);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group w-full pt-4"
    >
      <Tilt
        options={{
          max: prefersReducedMotion ? 0 : 16,
          scale: 1.015,
          speed: 500,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
        className="w-full"
      >
        <motion.div
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
          whileHover={prefersReducedMotion ? {} : { y: -8 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-tertiary/95 to-tertiary/80 p-[1px] shadow-[0_24px_55px_-30px_rgba(0,0,0,0.9)]"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: lightMask }}
          />

          <div className="relative z-10 rounded-[15px] bg-[#100d25]/95 p-4 backdrop-blur-sm sm:p-5">
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl sm:h-[230px]">
              <motion.a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                className="block h-full w-full"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              >
                <motion.img
                  src={image}
                  alt={`${name} project screenshot`}
                  className="h-full w-full object-cover"
                  style={prefersReducedMotion ? {} : { x: imageX, y: imageY }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0.88 }}
                whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                className="absolute right-3 top-3 card-img_hover"
              >
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 hover:scale-110"
                  aria-label={`Open source code for ${name}`}
                >
                  <img
                    src={github}
                    alt=""
                    className="h-1/2 w-1/2 object-contain"
                    aria-hidden
                  />
                </a>
              </motion.div>
            </div>

            <div className="mt-5">
              <h3 className="text-[22px] font-extrabold leading-snug text-white sm:text-[24px]">
                {name}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-secondary">
                {description}
              </p>
            </div>

            <motion.div
              className="mt-5 flex flex-wrap gap-2"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.035,
                  },
                },
              }}
              whileHover={prefersReducedMotion ? "rest" : "hover"}
              initial="rest"
            >
              {tags.map((tag) => (
                <motion.span
                  key={`${name}-${tag.name}`}
                  variants={{
                    rest: { y: 0, opacity: 0.95 },
                    hover: { y: -2, opacity: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className={`rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[13px] leading-none ${tag.color}`}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Tilt>
    </motion.article>
  );
};

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Custom arrows
    nextArrow: (
      <SampleNextArrow
        className="text-black bg-red-50"
        style={{ background: "red" }}
      />
    ),
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-primary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="px-4">
              <ProjectCard
                // key={`project-${index}`}
                index={index}
                {...project}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px" }}
      onClick={onClick}
    />
  );
};

export default SectionWrapper(Works, "");
