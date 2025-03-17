import Image from "next/image";
import PropTypes from "prop-types";

import Button from "components/Button";

const Project = ({
  primaryText,
  secondaryText,
  wrapperColorClass,
  projectLink,
  image,
  addToRefs,
  tech,
}) => {
  return (
    <div
      ref={addToRefs}
      className={`container sm:flex-row overflow-hidden opacity-0 flex justify-between w-full flex-col items-start space-x-0 space-y-8 sm:space-y-0 sm:space-x-6 lg:space-x-10 xl:space-x-16`}
    >
      <div className="w-full lg:w-8/12 xl:w-auto">
        <div className="overflow-hidden">
          <h3 className="text-1.5xl lg:text-3xl xl:text-4.5xl font-semibold text-gray-900 dark:text-gray-100">
            {primaryText}
          </h3>
        </div>
        <div className="overflow-hidden">
          <p className="mt-0 lg:mt-2 xl:mt-0 text-base lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-500">
            {secondaryText}
          </p>
        </div>

        <div className="flex mt-5 sm:mt-3 lg:mt-4 xl:mt-5 space-x-2 text-sm font-medium dark:text-gray-400">
          {tech.map((techNames) => {
            return (
              <span
                style={{ cursor: "none" }}
                className="inline-block py-2 px-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 rounded-extra-large"
                key={techNames}
              >
                {techNames}
              </span>
            );
          })}
        </div>
        <div className="mt-7 sm:mt-4 xl:mt-7">
          {/* <Link href={projectLink}> */}
          <a
            target="_blank"
            href={projectLink}
            className="inline-block w-full sm:w-auto"
            rel="noreferrer"
          >
            <Button
              text="View Project"
              outline="border-1.5 border-pink-600 dark:border-pink-500"
            />
          </a>
          {/* </Link> */}
        </div>
      </div>
      <div
        className={`${wrapperColorClass} w-full lg:w-8/12 xl:w-full overflow-hidden p-4 md:p-8 relative image-wrapper`}
      >
        <div className={`${wrapperColorClass} absolute inset-0 z-10`}></div>

        <Image
          src={image}
          alt={primaryText}
          layout="responsive"
          quality={100}
        />
      </div>
    </div>
  );
};

Project.defaultProps = {
  addToRefs: () => {},
};

Project.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  wrapperColorClass: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToRefs: PropTypes.func,
};

export default Project;
