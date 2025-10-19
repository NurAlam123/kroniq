import { useEffect, useState } from "react";

export function useMedia(query: string, defaultState = false): boolean {
  const [matches, setMatches] = useState(defaultState);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Update state on mount
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQueryList.addEventListener("change", listener);

    // Cleanup
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
