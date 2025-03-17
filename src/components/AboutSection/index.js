import PropTypes from "prop-types";

import { MailIcon, TwitterIcon } from "components/Icons";

const AboutSection = ({ aboutRef }) => {
  return (
    <section
      id="about"
      className="py-10 lg:py-16 xl:py-20 text-md lg:text-xl xl:text-2.5xl text-gray-700 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 transition-colors"
    >
      <div ref={aboutRef} className="container">
        <div className="overflow-hidden">
          <h1 className="text-1.3xl lg:text-3xl xl:text-4.5xl font-semibold text-gray-900 dark:text-gray-100 ">
            A little about me
          </h1>
        </div>
        <div className="mt-8">
          <div className="overflow-hidden">
            <p>
              Around 2019, I discovered JavaScript and started experimenting
              with React. As I learnt more, I fell in love with all the
              possibilities of things you could create with it. Eventually, that
              led me to drop out and focus all my time mastering this beautiful
              library.
            </p>
          </div>
          <div className="overflow-hidden mt-8">
            <p>
              Fast forward to 2021, I have finally polished and developed
              expertise in a lot of frontend skills and I am ready to take on
              new challenges and opportunities. I enjoy turning designs into
              beautiful, interactive and accessible experiences with attention
              to the smallest of details. I strongly believe in writing clean
              and scalable code. I am constantly learning and keeping myself
              up-to-date with emerging technologies and love challenging myself
              to learn something new every now and then.
            </p>
          </div>
        </div>

        <div id="contact" className="mt-8">
          <p className="inline-block mb-8 font-medium text-gray-800 dark:text-gray-400">
            So, if you like my work and feel like you have a role that could
            fit, feel free to reach out.
          </p>
          <div className="flex space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/sushanyadav99"
            >
              <TwitterIcon />
            </a>
            <a href="mailto:sushanyadav98@gmail.com">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default AboutSection;
