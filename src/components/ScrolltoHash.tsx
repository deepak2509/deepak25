import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Delay ensures it scrolls after content renders
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return null;
};

export default ScrolltoHash;
