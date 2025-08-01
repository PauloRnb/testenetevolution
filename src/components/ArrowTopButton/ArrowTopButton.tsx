"use client";

import { ChevronUp } from "lucide-react";

export function ArrowTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden items-center gap-1 md:flex"
    >
      <span className="text-lg font-medium text-white">Voltar ao topo</span>
      <ChevronUp size={24} className="text-white" />
    </button>
  );
}
