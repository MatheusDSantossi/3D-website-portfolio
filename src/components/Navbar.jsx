import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

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
          <p className="text-primary dark:text-white text-[18px] font-bold cursor-pointer flex">
            Matheus &nbsp;{" "}
            <span className="sm:block hidden">|&nbsp; D. Santos</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primary dark:text-white" : "text-gray-600 dark:text-secondary"
              }
                  hover:text-tertiary dark:hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {theme == "dark" ? (
            <button onClick={toggleTheme}>
              <IoIosSunny className="h-8 w-8 cursor-pointer rounded-full text-yellow-300 hover:text-yellow-400" />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <IoIosMoon className="h-8 w-8 cursor-pointer rounded-full text-primary hover:text-red-950" />
            </button>
          )}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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
                  <a href={`#${link.id}`}>{link.title}</a>
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

export default Navbar;
