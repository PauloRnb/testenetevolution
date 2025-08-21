import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false; // fallback SSR
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const listener = () => {
      if (media.matches !== matches) setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    // Atualiza inicial caso tenha diferença
    if (media.matches !== matches) setMatches(media.matches);

    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}
