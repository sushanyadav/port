import PropTypes from "prop-types";

export const ArrowUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 stroke-current"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 12.667V3.333M3.333 8L8 3.333 12.666 8"
      ></path>
    </svg>
  );
};

export const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 stroke-current"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 10v2.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V10M4.666 6.667L7.999 10l3.334-3.333M8 10V2"
      ></path>
    </svg>
  );
};

export const MoonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 md:w-5 h-4 md:h-5 text-gray-600 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 stroke-current"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.5 10.658A7.5 7.5 0 119.342 2.5a5.833 5.833 0 008.158 8.158v0z"
      ></path>
    </svg>
  );
};
export const SunIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 md:w-5 h-4 md:h-5 text-gray-500 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 stroke-current"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 17.5v1.667M15.3 15.3l1.184 1.183M3.518 16.483L4.7 15.3M17.5 10h1.667M.834 10h1.667M10 14.167a4.167 4.167 0 100-8.334 4.167 4.167 0 000 8.334zM15.3 4.7l1.184-1.183M3.518 3.517L4.7 4.7M10 .833V2.5"
      ></path>
    </svg>
  );
};

export const GoToIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 transition-transform group-hover:rotate-45 stroke-current"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 17L17 7M7 7h10v10"
      ></path>
    </svg>
  );
};

export const Cursor = ({ isTouchDevice }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      style={{ display: isTouchDevice ? "none" : "block" }}
      viewBox="0 0 31 31"
    >
      <path
        fill="url(#paint0_linear)"
        d="M28.392 17.95c1.968-.355 2.253-3.06.402-3.819L11.682 7.12c-1.417-.58-2.934.582-2.742 2.102l2.319 18.347c.25 1.984 2.936 2.412 3.792.604l3.602-7.611a2 2 0 011.452-1.113l8.287-1.498z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8.51"
          x2="23.628"
          y1="5.819"
          y2="25.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8730"></stop>
          <stop offset="1" stopColor="#FFB178"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Cursor.defaultProps = {
  isTouchDevice: false,
};

Cursor.propTypes = {
  isTouchDevice: PropTypes.bool,
};

export const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 md:w-8 h-6 md:h-8 text-pink-600 dark:text-pink-500 cursor-pointer stroke-current link-icon"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.334 5.333h21.333c1.467 0 2.667 1.2 2.667 2.667v16c0 1.467-1.2 2.667-2.667 2.667H5.334A2.674 2.674 0 012.667 24V8c0-1.467 1.2-2.667 2.667-2.667z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M29.334 8L16 17.333 2.667 8"
      ></path>
    </svg>
  );
};

export const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 md:w-8 h-6 md:h-8 text-pink-600 dark:text-pink-500 cursor-pointer stroke-current link-icon"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M30.666 4c-1.276.9-2.69 1.59-4.186 2.04a5.973 5.973 0 00-10.48 4v1.333a14.214 14.214 0 01-12-6.04s-5.334 12 6.666 17.334a15.52 15.52 0 01-9.333 2.666C13.333 32 28 25.333 28 10a6.009 6.009 0 00-.107-1.107A10.293 10.293 0 0030.666 4v0z"
      ></path>
    </svg>
  );
};
