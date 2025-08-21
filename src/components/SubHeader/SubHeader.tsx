"use client";

import { useState, useEffect } from "react";
import SubHeaderMobile from "./SubHeaderMobile";
import SubHeaderDesktop from "./SubHeaderDesktop";

export default function SubHeader() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Inicializa no client
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    // Set inicial
    handleChange();

    // Listener
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Renderiza um placeholder enquanto decide mobile ou desktop
  if (isMobile === null) {
    return (
      <nav
        id="top"
        className="sticky top-0 z-20 w-full min-w-[375px] bg-blue-700 dark:bg-zinc-800"
      >
        {/* Placeholder mínimo para LCP */}
        <div className="h-16 w-full" />
      </nav>
    );
  }

  return (
    <nav
      id="top"
      className="sticky top-0 z-20 w-full min-w-[375px] bg-blue-700 dark:bg-zinc-800"
    >
      {isMobile ? <SubHeaderMobile /> : <SubHeaderDesktop />}
    </nav>
  );
}
