import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "components/Layout/Header";
import { Cursor } from "components/Icons";
import ScrollToTopButton from "components/ScrollToTopButton";
import Layout from "components/Layout";

import animateFooterOnScroll from "scrollTriggerAnimations/footer";

import { scrollToTop, scrollToNavigationItem } from "utils/scrollTo";
import { setLocoMotiveWithScrollTrigger } from "utils/setLocoMotiveWithScrollTrigger";

// import useMediaQuery from "hooks/useMediaQuery";
// import animateHeaderOnScroll from "scrollTriggerAnimations/header";

import "assets/scss/main.css";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark"
      // ||!("theme" in localStorage)
      // &&
      //   window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const componentRef = useRef();
  const scrollItem = useRef();
  const cursorItem = useRef();
  const footerRef = useRef();

  // const isSmallDevice = useMediaQuery("(max-width: 576px)"); // returns true if a user is using mobile-phone

  useEffect(() => {
    const { current: main } = scrollItem;

    // removes initial flash
    gsap.to(main, 0.6, { opacity: 1 });
  }, []);

  // custom cursor on enter
  const onEnter = () => {
    const { current: cursor } = cursorItem;

    cursor.classList.remove("cursor");
    cursor.classList.add("hidden");
  };

  // custom cursor on leave
  const onLeave = () => {
    const { current: cursor } = cursorItem;

    cursor.classList.remove("hidden");
    cursor.classList.add("cursor");
  };

  useEffect(() => {
    const { current: cursor } = cursorItem;

    gsap.to(cursor, 0, { opacity: 1 });

    function moveCircle(e) {
      gsap.to(cursor, {
        duration: 0.025,
        x: e.clientX,
        y: e.clientY,
        ease: "sine.out",
      });
    }

    if (document) {
      // cursor
      document.addEventListener("mousemove", moveCircle);

      // not showing cursor on touch devices
      if ("ontouchstart" in document.documentElement) {
        setIsTouchDevice(true);
      }

      // reset cursor on button and links
      const aTags = document.querySelectorAll("a");
      const buttonTags = document.querySelectorAll("button");
      const linkIcons = document.querySelectorAll(".link-icon");

      aTags.forEach((a) => {
        a.addEventListener("mouseover", onEnter);
        a.addEventListener("mouseleave", onLeave);
      });

      linkIcons.forEach((linkIcon) => {
        linkIcon.addEventListener("mouseover", onEnter);
        linkIcon.addEventListener("mouseleave", onLeave);
      });

      buttonTags.forEach((button) => {
        button.addEventListener("mouseover", onEnter);
        button.addEventListener("mouseleave", onLeave);
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollBar = document.querySelector(".c-scrollbar_thumb");

      if (scrollBar) {
        scrollBar.addEventListener("mouseover", onEnter);
        scrollBar.addEventListener("mouseleave", onLeave);

        scrollBar.style.backgroundColor = darkMode ? "white" : "black";
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [darkMode]);

  useEffect(() => {
    import("locomotive-scroll").then(({ default: Default }) => {
      const locoScroll = new Default({
        el: scrollItem.current,
        smooth: true,
        smartphone: {
          smooth: false,
        },
        tablet: {
          smooth: false,
        },
        reloadOnContextChange: true,
        firefoxMultiplier: 50,
      });

      //* for scroll to top component visibility state
      // for mobile phones
      window.onscroll = function (e) {
        if (window.scrollY < 20) {
          setShowScrollToTopButton(false);
        } else {
          setShowScrollToTopButton(true);
        }
      };

      // for PC
      locoScroll.on("scroll", (obj) => {
        setScrollYPosition(obj.scroll.y);
        if (obj.scroll.y < 10) {
          setShowScrollToTopButton(false);
        } else {
          setShowScrollToTopButton(true);
        }
      });

      const updateLoco = setLocoMotiveWithScrollTrigger(
        locoScroll,
        scrollItem.current
      );

      //* ANIMATION (BEFORE UPDATING LOCOMOTIVE SCROLL)
      animateFooterOnScroll(footerRef, scrollItem.current);
      //  animateHeaderOnScroll(updateLoco, scrollItem.current, isSmallDevice);

      // scroll trigger for navigation scroll
      const st = ScrollTrigger.create({
        start: "top center",
        scroller: scrollItem.current,
        toggleActions: "play none none none",
      });

      // Navigation Scroll
      scrollToNavigationItem(st);
      // Scroll to top
      scrollToTop(st);

      //* UPDATING LOCOMOTIVE SCROLL AFTER (ANIMATION ABOVE)
      updateLoco();

      if (componentRef.current?.handlePageAnimations) {
        componentRef.current.handlePageAnimations();
        updateLoco();
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`${
          darkMode ? "dark" : ""
        } selection:bg-pink-500 selection:text-white font-custom`}
        style={{ cursor: !isTouchDevice ? "none" : "auto" }}
      >
        {/* smooth scroll component */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          scrollYPosition={scrollYPosition}
        />
        {/* cursor */}
        <div
          className="absolute z-50 opacity-0 pointer-events-none select-none"
          ref={cursorItem}
        >
          <Cursor isTouchDevice={isTouchDevice} />
        </div>
        <div
          ref={scrollItem}
          className="bg-white dark:bg-black opacity-0 transition-colors "
        >
          <Layout footerRef={footerRef}>
            <Component
              scrollItem={scrollItem}
              componentRef={componentRef}
              {...pageProps}
            />
          </Layout>
        </div>
        {/* scroll to top button */}
        <ScrollToTopButton showScrollToTopButton={showScrollToTopButton} />
      </div>
    </>
  );
}

MyApp.defaultProps = {};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
