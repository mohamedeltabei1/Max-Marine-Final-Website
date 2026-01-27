import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component handles scroll restoration on route changes
 * and smooth scrolling to hash targets (e.g., /page#section)
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return;
    }
    
    // Otherwise, scroll to top of page instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
