import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateSkillSetOnScroll = (skillsetRef, mainItem) => {
  const headingText = skillsetRef.current?.firstChild?.firstChild;
  const languages =
    skillsetRef.current?.lastChild?.children[0]?.firstChild?.firstChild;
  const languagesList = skillsetRef.current?.lastChild?.children[0]?.lastChild;
  const libraries =
    skillsetRef.current?.lastChild?.children[1]?.firstChild?.firstChild;
  const librariesList = skillsetRef.current?.lastChild?.children[1]?.lastChild;
  const others =
    skillsetRef.current?.lastChild?.children[2]?.firstChild?.firstChild;
  const othersList = skillsetRef.current?.lastChild?.children[2]?.lastChild;
  const learning =
    skillsetRef.current?.lastChild?.children[3]?.firstChild?.firstChild;
  const learningList = skillsetRef.current?.lastChild?.children[3]?.lastChild;

  const tl = gsap
    .timeline()
    .from(headingText, {
      yPercent: 100,
      ease: Power3.easeInOut,
      duration: 0.4,
    })
    .from(
      languages,
      {
        opacity: 0,
        yPercent: 100,
        ease: Power3.easeInOut,
        duration: 0.4,
      },
      "-=0.4"
    )
    .from(
      languagesList,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      libraries,
      {
        opacity: 0,
        yPercent: 100,
        ease: Power3.easeInOut,
        duration: 0.4,
      },
      "-=0.4"
    )
    .from(
      librariesList,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      others,
      {
        opacity: 0,
        yPercent: 100,
        ease: Power3.easeInOut,
        duration: 0.4,
      },
      "-=0.4"
    )
    .from(
      othersList,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      learning,
      {
        opacity: 0,
        yPercent: 100,
        ease: Power3.easeInOut,
        duration: 0.4,
      },
      "-=0.4"
    )
    .from(
      learningList,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.4"
    );

  ScrollTrigger.create({
    trigger: skillsetRef.current,
    start: "top-=350 center",
    scroller: mainItem,
    animation: tl,
    toggleActions: "play none none none",
  });
};

export default animateSkillSetOnScroll;
