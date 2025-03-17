import { useEffect, useState } from "react";

const isClient = typeof window === "object";

const isApiSupported = (api) => api in window;

const isSupported = () => {
  if (!isClient || !isApiSupported("matchMedia")) {
    // eslint-disable-next-line no-console
    console.warn("Media query not available");

    return null;
  }

  return true;
};

const useMediaQuery = (mediaQuery) => {
  const [isVerified, setIsVerified] = useState(
    isClient && window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    if (!isSupported()) return;
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    // mediaQueryList.addListener(documentChangeHandler);
    mediaQueryList.addEventListener("change", () => {
      documentChangeHandler();
    });
    documentChangeHandler();

    return () => {
      // mediaQueryList.removeListener(documentChangeHandler);
      mediaQueryList.removeEventListener("change", () => {
        documentChangeHandler();
      });
    };
  }, [mediaQuery]);
  if (!isSupported) return null;

  return isVerified;
};

export default useMediaQuery;
