"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Carrega o Dialog só quando necessário (melhora INP/LCP)
const Dialog = dynamic(() =>
  import("@/components/ui/dialog").then((m) => m.Dialog),
);
const DialogContent = dynamic(() =>
  import("@/components/ui/dialog").then((m) => m.DialogContent),
);
const DialogTitle = dynamic(() =>
  import("@/components/ui/dialog").then((m) => m.DialogTitle),
);

export function CookiesTerms() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Evita leitura de localStorage no servidor
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("cookie_consent")) {
        setOpen(true);
      }
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setOpen(false);
  };

  // Evita renderizar se já aceitou
  if (!open) return null;

  return (
    <Dialog open={open}>
      <DialogContent className="fixed bottom-0 left-0 right-0 z-50 flex !h-fit min-w-full transform-none !rounded-none border-t border-zinc-300 bg-white py-4 transition-none dark:border-zinc-600 dark:bg-zinc-900">
        <div className="container flex flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between lg:px-6">
          <div className="flex flex-col gap-2 md:w-[34rem] lg:w-[38rem]">
            <DialogTitle asChild>
              <h2 className="text-base font-semibold leading-5 text-zinc-800 dark:text-white">
                Nosso site armazena cookies para melhorar sua navegação
              </h2>
            </DialogTitle>
            <p className="text-sm font-medium text-zinc-500 dark:text-white md:pr-10">
              Ao aceitar, você concorda com nossa{" "}
              <Link
                href="/Cookies"
                className="font-bold text-zinc-600 hover:underline focus:outline-none dark:text-cyan-400"
              >
                &quot;Política de Privacidade&quot;
              </Link>{" "}
              e autoriza o uso de dados conforme a LGPD para uma navegação
              segura e personalizada.
            </p>
          </div>
          <button
            onClick={handleConsent}
            className="rounded border border-blue-700 bg-blue-700 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500 focus:outline-none dark:border-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-500"
          >
            Aceitar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
