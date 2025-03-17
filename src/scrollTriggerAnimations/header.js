import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateHeaderOnScroll = (updateLoco, mainItem, isSmallDevice) => {
  const nav = document.querySelector(".navigation");
  const button = nav.querySelector("button");

  const tl = gsap
    .timeline()
    .fromTo(
      nav,
      {
        height: isSmallDevice ? "60px" : "96px",
      },
      {
        height: "60px",
        ease: Power2.easeInOut,
        duration: 0.4,
      },
      "-=0.1"
    )
    .to(
      button,

      {
        padding: "0.6rem 0.8rem",
        ease: Power2.easeInOut,
        duration: 0.4,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: nav,
    start: "top center",
    end: "top+=250 ",
    scroller: mainItem,
    animation: tl,
    toggleActions: "pause play reverse none",
  });

  // update loco
  updateLoco();
};

export default animateHeaderOnScroll;
