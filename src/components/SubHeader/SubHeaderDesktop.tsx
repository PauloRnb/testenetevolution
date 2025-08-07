"use client";

import dynamic from "next/dynamic";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

// Carregar ModalCoverage dinamicamente no client (evita bloqueio inicial)
const ModalCoverage = dynamic(() => import("../Modal/ModalCoverage"), {
  ssr: false,
});

// Mesmo para o toggle, se for pesado ou tiver animações/temas
const ButtonThemeToggle = dynamic(
  () => import("../ButtonThemeToggle/ButtonThemeToggle"),
  {
    ssr: false,
  },
);

export default function SubHeaderDesktop() {
  return (
    <div className="container flex items-center justify-between gap-5 px-6 py-4 32lg:px-0">
      <ModalCoverage />

      <ul className="flex items-center gap-5">
        <li>
          <a
            href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-white transition-colors hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none"
          >
            Suporte 24H
          </a>
        </li>

        <li>
          <a
            href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-white transition-colors hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none"
          >
            2ª Via da Fatura
          </a>
        </li>

        <li>
          <Link
            href="/Acessibility"
            prefetch
            className="text-base font-medium text-white transition-colors hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none"
          >
            Acessibilidade
          </Link>
        </li>

        <li aria-hidden>
          <Separator orientation="vertical" className="h-6 w-px bg-white" />
        </li>

        <li>
          <ButtonThemeToggle className="group flex w-[9.063rem] items-center justify-center gap-1 rounded-full bg-white px-3 py-1.5 text-base font-semibold text-blue-700 transition-colors hover:bg-zinc-100 focus-visible:bg-zinc-200 focus-visible:outline-none dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500" />
        </li>
      </ul>
    </div>
  );
}
