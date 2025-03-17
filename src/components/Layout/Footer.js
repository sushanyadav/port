import PropTypes from "prop-types";

const Footer = ({ footerRef }) => {
  return (
    <footer
      ref={footerRef}
      className="text-xs lg:text-xl xl:text-1.3xl text-gray-500 border-t border-gray-100 dark:border-gray-800 transition-colors"
    >
      <p className="container py-6 lg:py-10 built-with-text">
        This website was built using NextJS, TailwindCSS & GSAP.
      </p>
    </footer>
  );
};

Footer.propTypes = {
  footerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Footer;
