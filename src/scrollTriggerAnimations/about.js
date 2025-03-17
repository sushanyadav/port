import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateAboutMeOnScroll = (aboutRef, mainItem) => {
  const headingText = aboutRef.current?.firstChild?.firstChild;
  const paragraphTextOne =
    aboutRef.current?.children[1]?.firstChild?.firstChild;
  const paragraphTextTwo = aboutRef.current?.children[1]?.lastChild?.firstChild;
  const contactText = aboutRef.current?.lastChild?.firstChild;
  const MailIcon = aboutRef.current?.lastChild?.lastChild?.firstChild;
  const TwitterIcon = aboutRef.current?.lastChild?.lastChild?.lastChild;

  const tl = gsap
    .timeline()
    .from(headingText, {
      yPercent: 100,
      ease: Power3.easeInOut,
      duration: 0.6,
    })
    .from(
      paragraphTextOne,
      {
        opacity: 0,

        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      paragraphTextTwo,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      contactText,
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      MailIcon,
      {
        opacity: 0,
        yPercent: 60,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      TwitterIcon,
      {
        opacity: 0,
        yPercent: 60,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
    );

  ScrollTrigger.create({
    trigger: aboutRef.current,
    start: "top-=350 center",
    scroller: mainItem,
    animation: tl,
    toggleActions: "play none none none",
  });
};

export default animateAboutMeOnScroll;
