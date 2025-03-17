import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Main = () => {
  useEffect(() => {
    gsap
      .timeline()
      .from(
        ".hi-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.3
      )
      .from(
        ".i-am-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.5
      )
      .from(
        ".dot-text",
        {
          yPercent: 100,
          opacity: 0,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.6
      )
      .from(
        ".location-text",
        {
          yPercent: 100,
          opacity: 0,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.7
      )
      .from(
        ".front-end-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.8
      )
      .from(
        ".secondary-text",
        {
          opacity: 0,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1
      )
      .from(
        ".main-section",
        {
          opacity: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.3
      );
  }, []);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800 transition-colors main-section">
      {/* spacer for navbar  start*/}
      <div className="h-14.5 sm:h-22" />
      {/* spacer for navbar end*/}
      <main className="container py-16 md:py-28 lg:py-32 text-gray-900 dark:text-gray-50 transition-colors xl:py-45">
        <h1 className="overflow-hidden text-2xl md:text-4xl lg:text-5xl xl:text-5.5xl font-semibold ">
          <span className="inline-block hi-text">Hi! </span>

          <span className="inline-block ml-2 md:ml-3 i-am-text">
            I am Sushan
          </span>

          <span className="inline-block md:tracking-normal text-pink-600 dark:text-pink-500 dot-text">
            .
          </span>

          <address className="inline-block self-end ml-3 md:ml-5 text-xs md:text-base not-italic font-medium dark:text-gray-500 location-text">
            📍Nepal
          </address>
        </h1>
        <div className="overflow-hidden">
          <h2 className="mt-2 text-base md:text-xl lg:text-2xl xl:text-3.5xl font-normal text-gray-600 dark:text-gray-500 front-end-text">
            I love building interactive web experiences using technologies such
            as{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              React
            </span>{" "}
            &{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              NextJS
            </span>
            .
          </h2>
        </div>
        <div className="inline-block mt-6 md:mt-2 lg:mt-4 xl:mt-6">
          <div className="flex items-center py-2 px-3 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors secondary-text">
            <div className="mr-2 w-2 h-2 bg-active rounded-full"></div>
            <p className="text-sm md:text-base font-medium dark:text-gray-400">
              Currently available for new opportunities
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
