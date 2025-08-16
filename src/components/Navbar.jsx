import { forwardRef, memo, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../hoc";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`${styles.paddingX}
    ${theme} w-full flex items-center py-5 fixed top-0 z-20 bg-primary-light dark:bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.strollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-9 object-contain" />
          <p className="text-primary dark:text-white text-[18px] font-bold cursor-pointer flex flex-col md:flex-row">
            Matheus &nbsp;{" "}
            <span className="sm:block hidden">|&nbsp; D. Santos</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-primary dark:text-white"
                  : "text-gray-600 dark:text-secondary"
              }
                  hover:text-tertiary dark:hover:text-gray-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Theme Icons */}
          <div className="icon-container relative w-8 h-8">
            <AnimatePresence mode="wait">
              {theme == "dark" ? (
                <motion.button
                  onClick={toggleTheme}
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <IoIosSunny className="icon fade-in h-8 w-8 cursor-pointer rounded-full text-yellow-300 hover:text-yellow-400" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={toggleTheme}
                  initial={{ opacity: 0, rotate: 20 }}
                  animate={{ opacity: 1, rotate: -20 }}
                  exit={{ opacity: 0, rotate: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <IoIosMoon className="icon fade-in h-8 w-8 cursor-pointer rounded-full text-primary hover:text-red-950" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className={`toggle ${toggle ? "menu" : "close"}`}
            onClick={() => setToggle(!toggle)}
          >
            <span className="bg-gray-900 dark:bg-slate-300"></span>
            <span className="bg-gray-900 dark:bg-slate-300"></span>
            <span className="bg-gray-900 dark:bg-slate-300"></span>
          </div>
          {/* <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          /> */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-secondary dark:bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a className="transition-all hover:text-gray-300 dark:hover:text-tertiary" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              {theme == "dark" ? (
                <button onClick={toggleTheme}>
                  <IoIosSunny className="h-8 w-8 cursor-pointer rounded-full text-yellow-300 hover:text-yellow-400" />
                </button>
              ) : (
                <button onClick={toggleTheme}>
                  <IoIosMoon className="h-8 w-8 cursor-pointer rounded-full text-yellow-300 hover:text-yellow-400" />
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
