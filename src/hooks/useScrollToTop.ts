import { useEffect } from "react";

/**
 * Custom hook that scrolls to the top of the page on mount
 * No animation - instant scroll to top
 */
export function useScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring scroll position
    window.history.scrollRestoration = "manual";
    // Scroll to top instantly without animation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
}
