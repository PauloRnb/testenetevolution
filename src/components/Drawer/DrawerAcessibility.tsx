"use client";

import Link from "next/link";
import { EllipsisVertical, FileScan, Headset } from "lucide-react";
import { TbAccessible } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DrawerAcessibility() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menu"
            type="button"
            className="flex items-center justify-center text-white transition-colors duration-200 hover:text-zinc-100 focus:outline-none focus-visible:text-zinc-100 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
          >
            <EllipsisVertical size={20} />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
            <SheetTitle asChild>
              <h2 className="text-white">Menu Acessível</h2>
            </SheetTitle>
          </SheetHeader>
          <main className="mt-9 flex flex-col px-5">
            {/* Suporte */}
            <a
              aria-label="Ir para suporte no WhatsApp"
              href="https://wa.me/5585997362750?text=Olá estou precisando de um suporte, poderia me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full select-none items-center justify-start gap-1 text-base font-medium text-gray-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
            >
              <Headset aria-hidden size={16} className="md:size-5" />
              <span>Suporte 24H</span>
            </a>
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
            {/* Fatura */}
            <a
              aria-label="Ir para a segunda via da fatura"
              href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full select-none items-center justify-start gap-1 text-base font-medium text-gray-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
            >
              <FileScan aria-hidden size={16} className="md:size-5" />
              <span>2ª Via da Fatura</span>
            </a>
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
            {/* Acessibilidade */}
            <Link
              prefetch
              href="/Acessibility"
              className="flex w-full select-none items-center justify-start gap-1 text-base font-medium text-gray-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
            >
              <TbAccessible size={18} className="md:size-6" strokeWidth={1.8} />
              <span>Acessibilidade</span>
            </Link>
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center gap-5 px-5 py-5">
            <ButtonThemeToggle className="group flex w-[9.063rem] items-center justify-center gap-1 rounded-full bg-blue-700 p-1.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500 md:text-lg" />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
