"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";
import { ModalCoverage } from "../Modal/ModalCoverage";

export default function SubHeaderDesktop() {
  return (
    <div className="container flex items-center justify-between gap-5 px-6 py-4 32lg:px-0">
      <ModalCoverage />
      <ul className="flex items-center justify-end gap-5">
        <li>
          <a
            href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
            target="_blank"
            rel="noopener noreferrer"
            className="select-none text-base font-medium text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200"
          >
            Suporte 24H
          </a>
        </li>
        <li>
          <a
            href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="select-none text-base font-medium text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200"
          >
            2ª Via da Fatura
          </a>
        </li>
        <li>
          <Link
            prefetch
            href="/Acessibility"
            className="select-none text-base font-medium text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200"
          >
            Acessibilidade
          </Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-6 w-[1px] bg-white" />
        </li>
        <li>
          <ButtonThemeToggle className="group flex w-[9.063rem] select-none items-center justify-center gap-1 rounded-full bg-white p-1.5 py-[2px] text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-200 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500" />
        </li>
      </ul>
    </div>
  );
}
