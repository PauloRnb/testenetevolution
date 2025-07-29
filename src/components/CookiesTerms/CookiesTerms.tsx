"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function CookiesTerms() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setOpen(true);
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", choice);
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="fixed bottom-0 left-0 right-0 top-[initial] z-50 flex !h-fit min-w-full transform-none !rounded-none border-t-zinc-300 bg-white py-4 transition-none dark:border-zinc-600 dark:bg-zinc-900">
        <div className="2lg:px-0 container flex flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between lg:px-6">
          <div className="2lg:w-[59.375rem] flex flex-col gap-2 md:w-[34rem] lg:w-[38rem]">
            <DialogTitle asChild>
              <h2 className="text-base font-semibold leading-5 text-zinc-800 dark:text-white">
                Nosso site armazena cookies para melhorar sua navegação
              </h2>
            </DialogTitle>
            <p className="text-sm font-medium text-zinc-500 dark:text-white md:pr-10 lg:pr-0">
              Ao aceitar, você concorda com nossa{" "}
              <Link
                href="/Cookies"
                className="font-bold text-zinc-600 hover:text-zinc-700 hover:underline focus:outline-none focus-visible:text-zinc-800 dark:text-cyan-400 dark:focus-visible:text-cyan-500"
              >
                &quot;Politica de Privacidade&quot;
              </Link>{" "}
              , autorizando a coleta e uso de dados conforme a LGPD para uma
              navegação segura e personalizada.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleConsent("rejected")}
              className="transform-colors dark:focus-visible: rounded border border-zinc-300 px-4 py-2 text-sm duration-200 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Rejeitar
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="rounded border border-blue-700 bg-blue-700 px-4 py-2 text-sm text-white transition-colors duration-200 hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus-visible:border-blue-500 focus-visible:bg-blue-500 dark:border-cyan-400 dark:bg-cyan-400 dark:hover:border-cyan-500 dark:hover:bg-cyan-500 dark:focus-visible:border-cyan-500 dark:focus-visible:bg-cyan-500"
            >
              Aceitar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
