"use client";

import { Airplay, ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DrawerStreamingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLinkClick: () => void;
}

const streamingSections = [
  {
    title: "FILMES E SÉRIES",
    links: [
      { href: "/Paramount", label: "Paramount +" },
      { href: "/Telecine", label: "Telecine" },
      { href: "/Max", label: "HBO Max" },
    ],
  },
  {
    title: "ESPORTES",
    links: [
      { href: "/Premiere", label: "Premiere" },
      { href: "/Espn", label: "ESPN" },
      { href: "/Sportv", label: "SporTV" },
    ],
  },
];

export function DrawerStreaming({
  open,
  onOpenChange,
  onLinkClick,
}: DrawerStreamingProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          aria-label="Abrir menu"
          type="button"
          className="flex w-full select-none items-center justify-between text-base font-medium text-gray-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
        >
          <div className="flex items-center gap-1">
            <Airplay size={20} className="md:size-6" />
            <span>Streaming</span>
          </div>
          <ChevronRight size={16} className="md:size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
          <SheetTitle asChild>
            <h2 className="text-base text-white md:text-lg">
              <div className="flex items-center gap-1">
                <Airplay size={20} className="md:size-6" />
                <span>Streaming</span>
              </div>
            </h2>
          </SheetTitle>
        </SheetHeader>

        <main className="flex flex-col px-5 pt-5">
          <div className="flex w-fit flex-col gap-1">
            <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
              STREAMING:
            </h2>
            <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
          </div>

          <div className="mt-5 flex flex-col gap-8">
            {streamingSections.map(({ title, links }, i) => (
              <section key={title} className="flex flex-col gap-7">
                <h2 className="text-lg font-semibold text-blue-700 dark:text-white">
                  {title}
                </h2>
                <div className="flex flex-col gap-3">
                  {links.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={onLinkClick}>
                      {label}
                    </Link>
                  ))}
                </div>
                {i !== streamingSections.length - 1 && (
                  <Separator className="bg-zinc-200" />
                )}
              </section>
            ))}
          </div>
        </main>

        <div className="flex-1" />

        <SheetFooter className="sticky bottom-0 flex h-32 flex-col items-start justify-center gap-5 bg-blue-700 px-5 py-5 dark:bg-zinc-900">
          <div className="flex w-fit flex-col gap-1">
            <h3 className="text-sm font-semibold text-white">STREAMING</h3>
            <Separator className="!h-[2px] !w-10 rounded-full bg-white" />
          </div>
          <div className="flex w-fit flex-col gap-2">
            <Link
              href="/Combos"
              prefetch
              onClick={onLinkClick}
              className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
            >
              Nossos Combos
            </Link>
            <a
              href="https://wa.me/5585997362750?text=Olá, poderia me enviar os combos para eu montar o meu?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
            >
              Monte Seu Combo
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
