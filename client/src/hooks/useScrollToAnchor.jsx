import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const scrollToAnchor = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ block: "start" });
      }
    };

    if (location.hash) {
      const anchorId = location.hash.slice(1);
      scrollToAnchor(anchorId);
    }
  }, [location]);

  return null;
}

export default useScrollToAnchor;
