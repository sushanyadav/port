import PropTypes from "prop-types";

const skillsets = [
  { name: "Languages", skills: ["JavaScript(ES6)"] },
  {
    name: "Libraries / Frameworks",
    skills: [
      "React",
      "NextJS",
      "Rest API",
      "Redux",
      "Redux Saga",
      "Redux Thunk",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  { name: "Others", skills: ["SCSS", "Git"] },
  { name: "Learning", skills: ["Gatsby", "TypeScript", "GSAP", "Strapi"] },
];

const SkillsetSection = ({ skillsetRef }) => {
  return (
    <section ref={skillsetRef} className="container py-10 lg:py-16 xl:py-20">
      <div className="overflow-hidden mb-8">
        <h1 className="text-1.3xl lg:text-3xl xl:text-4.5xl font-semibold text-gray-900 dark:text-gray-100">
          Skillset
        </h1>
      </div>
      <div className="space-y-8 text-gray-800 dark:text-gray-500">
        {skillsets.map((skillset) => {
          return (
            <div
              key={skillset.name}
              className="text-base lg:text-xl xl:text-2.5xl"
            >
              <div className="overflow-hidden">
                <h2 className="mb-2 font-medium">{skillset.name}</h2>
              </div>
              <h3 className="text-pink-600 dark:text-pink-500">
                {skillset.skills.map((skill, i) => {
                  return (
                    <span key={skill}>
                      {skill}
                      {i + 1 !== skillset.skills.length && ", "}
                    </span>
                  );
                })}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

SkillsetSection.propTypes = {
  skillsetRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default SkillsetSection;
