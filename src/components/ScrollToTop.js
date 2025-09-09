import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // delay para mobile Safari/Chrome
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50); // 50ms suele ser suficiente

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
