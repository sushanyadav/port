import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ArrowUpIcon } from "./Icons";

const ScrollToTopButton = ({ showScrollToTopButton }) => {
  const [isLoaded, seIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      seIsLoaded(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{ left: "50%", transform: "translateX(-50%)" }}
      className={`${
        isLoaded && showScrollToTopButton
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }  fixed container z-40 bottom-10 flex items-center justify-end duration-500 transition-opacity`}
    >
      <button
        id="scrollToTop"
        className="flex justify-center items-center p-3 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm transition cursor-pointer focus:outline-none "
      >
        <ArrowUpIcon />{" "}
        <span className="hidden md:block ml-2">Scroll to top</span>
      </button>
    </div>
  );
};

ScrollToTopButton.defaultProps = {};

ScrollToTopButton.propTypes = {
  showScrollToTopButton: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
