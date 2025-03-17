import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import PropTypes from "prop-types";

import Button from "components/Button";
import { DownloadIcon, MoonIcon, SunIcon } from "components/Icons";

const NavItems = ({ activeLink }) => {
  return (
    <nav className="flex-grow">
      <ul className="flex justify-center items-center h-full text-xs md:text-base font-medium leading-8">
        <li>
          <Link href="#projects" legacyBehavior>
            <a
              className={`${
                activeLink === "Projects"
                  ? "text-pink-600 dark:text-pink-500"
                  : "text-gray-900 dark:text-gray-500"
              } py-8 pr-2 pl-4 sm:pr-6 sm:pl-12 md:pr-8 md:pl-16 hover:text-pink-600 transition-colors duration-300 dark:hover:text-pink-500`}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="#about" legacyBehavior>
            <a
              className={`${
                activeLink === "About"
                  ? "text-pink-600 dark:text-pink-500"
                  : "text-gray-900 dark:text-gray-500"
              } py-8 px-4 sm:px-12 md:px-16 hover:text-pink-600 transition-colors duration-300 dark:hover:text-pink-500`}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact" legacyBehavior>
            <a
              className={`${
                activeLink === "Contact"
                  ? "text-pink-600 dark:text-pink-500"
                  : "text-gray-900 dark:text-gray-500"
              } py-8 pl-2 pr-4 sm:pl-6 sm:pr-12 md:pl-8 md:pr-16 hover:text-pink-600 transition-colors duration-300 dark:hover:text-pink-500`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavItems.defaultProps = {};

NavItems.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

const Header = ({ scrollYPosition, darkMode, setDarkMode }) => {
  const header = useRef();

  const [distanceFromTop, setDistanceFromTop] = useState({
    projectsDistance: null,
    contactDistance: null,
    aboutDistance: null,
  });

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // removes initial flash
    gsap.to(".navigation", 0, { opacity: 1 });

    gsap.from(".navigation", 0.8, {
      y: -90,
      autoAlpha: 0,
      ease: Power3.easeInOut,
    });
  }, []);

  useEffect(() => {
    if (document) {
      // projects
      const projectsEl = document.getElementById("projects");
      const projectsDistance = projectsEl?.getBoundingClientRect().top - 40;

      // about
      const aboutEl = document.getElementById("about");
      const aboutDistance = aboutEl?.getBoundingClientRect().top - 100;

      // contact
      const contactEl = document.getElementById("contact");
      const contactDistance = contactEl?.getBoundingClientRect().top - 160;

      setDistanceFromTop({ projectsDistance, aboutDistance, contactDistance });
    }
  }, []);

  useEffect(() => {
    const { projectsDistance, aboutDistance, contactDistance } =
      distanceFromTop;

    const projectPosition =
      scrollYPosition >= projectsDistance - 10 &&
      scrollYPosition < aboutDistance - 200;
    const aboutPosition =
      scrollYPosition >= aboutDistance &&
      scrollYPosition < contactDistance - 200;
    const contactPosition =
      contactDistance && scrollYPosition >= contactDistance - 100;

    if (projectPosition) {
      setActiveLink("Projects");
    } else if (aboutPosition) {
      setActiveLink("About");
    } else if (contactPosition) {
      setActiveLink("Contact");
    } else {
      setActiveLink("");
    }
  }, [scrollYPosition, distanceFromTop]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = "dark";
    }
  };

  return (
    <section
      ref={header}
      className="overflow-y-hidden fixed top-0 left-0 z-10 w-full h-14.5 sm:h-22 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 opacity-0 transition-colors navigation"
    >
      <header className="container flex justify-between items-center h-full">
        <Link href="/" legacyBehavior>
          <a>
            <div
              style={{
                background: "linear-gradient(180deg, #FFA3D0 0%, #FFE1F0 100%)",
              }}
              className="flex-none w-6 md:w-10 h-6 md:h-10 rounded-full"
            ></div>
          </a>
        </Link>
        <NavItems activeLink={activeLink} />
        <div className="flex flex-none justify-center items-center space-x-2 md:space-x-8">
          <button
            onClick={handleDarkMode}
            className="inline-block p-2 focus:outline-none"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="/resume.pdf" download="resume.pdf">
            <Button
              Icon={DownloadIcon}
              text="Resume"
              rounded="rounded-large"
              textColor="text-white dark:text-gray-400"
              background="bg-black dark:bg-gray-800"
              fontSize="md:text-base text-xs"
              padding="sm:py-2 sm:px-5 py-1 px-3"
              hover="hover:bg-pink-600 dark:hover:bg-pink-500 dark:hover:text-white"
            />
          </a>
        </div>
      </header>
    </section>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  scrollYPosition: PropTypes.number.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Header;
