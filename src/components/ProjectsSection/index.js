import PropTypes from "prop-types";

import StripeImage from "assets/images/projects/stripe.png";
// import DesktopImage from "assets/images/projects/Desktop.png";

import Project from "./Project";

const projects = [
  {
    id: "1",
    primaryText: "Stripe Clone",
    secondaryText:
      "Cloned the famous Stripe website as part of design exercise.",
    wrapperColorClass: "bg-light-pink",
    projectLink: "https://stripe-clone-home.netlify.app/",
    tech: ["HTML", "TailwindCSS", "Javascript"],
    image: StripeImage,
  },
  // {
  //   id: "2",
  //   primaryText: "Stripe Clone",
  //   secondaryText:
  //     "Cloned the famous Stripe website as part of design exercise.",
  //   wrapperColorClass: "bg-light-green",

  //   projectLink: "#",
  //   tech: ["TailwindCSS", "NextJS", "React"],
  //   image: DesktopImage,
  // },
];

const ProjectsSection = ({ addToRefs }) => {
  return (
    <div id="projects">
      {projects.map(
        ({
          id,
          primaryText,
          secondaryText,
          wrapperColorClass,
          projectLink,
          image,
          tech,
        }) => {
          return (
            <div
              key={id}
              className="py-10 sm:py-20 border-b border-gray-100 dark:border-gray-800 transition-colors"
            >
              <Project
                addToRefs={addToRefs}
                primaryText={primaryText}
                secondaryText={secondaryText}
                projectLink={projectLink}
                wrapperColorClass={wrapperColorClass}
                tech={tech}
                image={image}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

ProjectsSection.defaultProps = {
  addToRefs: () => {},
};

ProjectsSection.propTypes = {
  addToRefs: PropTypes.func,
};

export default ProjectsSection;
