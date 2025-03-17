import { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";
import AboutSection from "components/AboutSection";
import SkillsetSection from "components/SkillsetSection";
import SiteMetaData from "components/SEO/SiteMetaData";

import animateSkillSetOnScroll from "scrollTriggerAnimations/skillset";
import animateAboutMeOnScroll from "scrollTriggerAnimations/about";
import { animateProjectsOnScroll } from "scrollTriggerAnimations/projects";

const HomePage = (props) => {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const skillsetRef = useRef();

  const { scrollItem, componentRef } = props;

  projectsRef.current = [];

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useImperativeHandle(componentRef, () => ({
    handlePageAnimations() {
      animateProjectsOnScroll(projectsRef, scrollItem.current);
      animateAboutMeOnScroll(aboutRef, scrollItem.current);
      animateSkillSetOnScroll(skillsetRef, scrollItem.current);
    },
  }));

  return (
    <>
      <SiteMetaData />
      <Main />
      <ProjectsSection addToRefs={addToRefs} />
      <AboutSection aboutRef={aboutRef} />
      <SkillsetSection skillsetRef={skillsetRef} />
    </>
  );
};

export default HomePage;
