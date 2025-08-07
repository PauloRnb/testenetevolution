"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { EllipsisVertical } from "lucide-react";
import { TbAccessible } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";

// Lazy load do toggle para reduzir JS inicial
const ButtonThemeToggle = dynamic(
  () => import("../ButtonThemeToggle/ButtonThemeToggle"),
  {
    ssr: false,
  },
);

// Lazy load do Sheet
const Sheet = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.Sheet),
  {
    ssr: false,
  },
);
const SheetTrigger = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger),
  {
    ssr: false,
  },
);
const SheetContent = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetContent),
  {
    ssr: false,
  },
);
const SheetFooter = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetFooter),
  {
    ssr: false,
  },
);
const SheetHeader = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetHeader),
  {
    ssr: false,
  },
);
const SheetTitle = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetTitle),
  {
    ssr: false,
  },
);

const Headset = dynamic(
  () => import("lucide-react").then((mod) => mod.Headset),
  { ssr: false },
);
const FileScan = dynamic(
  () => import("lucide-react").then((mod) => mod.FileScan),
  { ssr: false },
);

export default function DrawerAcessibility() {
  return (
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
            className="flex w-full items-center gap-1 text-base font-medium text-gray-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
          >
            <Headset size={16} className="md:size-5" />
            <span>Suporte 24H</span>
          </a>

          <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />

          {/* Fatura */}
          <a
            aria-label="Ir para a segunda via da fatura"
            href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-1 text-base font-medium text-gray-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
          >
            <FileScan size={16} className="md:size-5" />
            <span>2ª Via da Fatura</span>
          </a>

          <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />

          {/* Acessibilidade */}
          <Link
            href="/Acessibility"
            prefetch
            className="flex w-full items-center gap-1 text-base font-medium text-gray-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
          >
            <TbAccessible size={18} className="md:size-6" strokeWidth={1.8} />
            <span>Acessibilidade</span>
          </Link>

          <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
        </main>

        <div className="flex-1" />

        <SheetFooter className="sticky bottom-0 flex h-20 items-center gap-5 px-5 py-5">
          <ButtonThemeToggle className="group flex w-[9.063rem] items-center justify-center gap-1 rounded-full bg-blue-700 p-1.5 text-base font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500 md:text-lg" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
