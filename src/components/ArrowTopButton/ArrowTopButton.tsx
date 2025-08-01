"use client";

import { ChevronUp } from "lucide-react";

export function ArrowTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden select-none items-center gap-1 text-white transition-colors duration-200 hover:text-zinc-300 focus:outline-none focus-visible:text-zinc-300 dark:focus-visible:text-zinc-300 md:flex"
    >
      <span className="text-lg font-medium">Voltar ao topo</span>
      <ChevronUp size={24} />
    </button>
  );
}
