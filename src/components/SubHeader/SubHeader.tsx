"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/Hooks/useIsMediaQuery";

// Lazy load com suspense opcional
const SubHeaderMobile = dynamic(() => import("./SubHeaderMobile"), {
  ssr: false,
  loading: () => <div className="h-16" />, // ou um Skeleton específico
});

const SubHeaderDesktop = dynamic(() => import("./SubHeaderDesktop"), {
  ssr: false,
  loading: () => <div className="h-20" />, // ou um Skeleton específico
});

export default function SubHeader() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (isMobile === null) {
    return <div className="h-16 bg-blue-700 dark:bg-zinc-800" />; // placeholder fixo
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
