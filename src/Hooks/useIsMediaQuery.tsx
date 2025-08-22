"use client";
import { useState, useLayoutEffect } from "react";

export function useMediaQuery(query: string): boolean {
  // Aqui já inicializa com o valor atual, no client
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false; // fallback SSR
    return window.matchMedia(query).matches;
  });

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    // Atualiza imediatamente caso tenha mudado
    setMatches(media.matches);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
