import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const projectScrollTrigger = (
  imageWrapper,
  image,
  primaryTextEl,
  secondaryTextEl,
  techStack,
  button,
  el,
  scroller,
  index
) => {
  const st = ScrollTrigger.create({
    trigger: el,
    start: "top-=350 center",
    scroller,
    animation: projectsTimeline(
      imageWrapper,
      image,
      primaryTextEl,
      secondaryTextEl,
      techStack,
      button,
      el,
      index
    ),
    toggleActions: "play none none none",
  });

  return st;
};

export const animateProjectsOnScroll = (projectsRef, scroller) => {
  projectsRef.current.forEach((el, index) => {
    const imageWrapper = el.lastChild.firstChild;
    const image = el.lastChild.lastChild.lastChild;
    const primaryTextEl = el.firstChild.firstChild.firstChild;
    const secondaryTextEl = el.firstChild.children[1].firstChild;
    const techStack = el.firstChild.children[2];
    const button = el.firstChild.lastChild;

    projectScrollTrigger(
      imageWrapper,
      image,
      primaryTextEl,
      secondaryTextEl,
      techStack,
      button,
      el,
      scroller,
      index
    );
  });
};

export const projectsTimeline = (
  imageWrapper,
  image,
  primaryTextEl,
  secondaryTextEl,
  techStack,
  button,
  el,
  index
) => {
  const tl = gsap
    .timeline()
    .to(el, {
      opacity: 1,
      ease: Power3.easeInOut,
      duration: 0.6,
      delay: index === 0 ? 0.4 : 0,
    })
    .from(
      primaryTextEl,
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      secondaryTextEl,
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        duration: 0.9,
      },
      "-=0.4"
    )
    .from(
      techStack,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      button,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .to(imageWrapper, { height: 0, duration: 0.6, delay: 0.4 }, "-=1.4")
    .from(image, { duration: 0.6, opacity: 0, scale: 1.6 }, "<");

  return tl;
};
