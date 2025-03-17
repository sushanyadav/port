import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateFooterOnScroll = (footerRef, mainItem) => {
  const tl = gsap.from(".built-with-text", {
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 0.4,
  });

  ScrollTrigger.create({
    trigger: footerRef.current,
    start: "top-=600 center",
    scroller: mainItem,
    animation: tl,
    toggleActions: "play none none none",
  });
};

export default animateFooterOnScroll;
