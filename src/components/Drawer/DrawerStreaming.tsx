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

export function DrawerStreaming() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abri menu"
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
        <SheetContent>
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
          <main className="flex flex-col">
            <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
              <div className="mt-4 flex w-fit flex-col gap-1">
                <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                  STREAMING:
                </h2>
                <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
              </div>
              <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col gap-7">
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-white">
                    FILMES E SÉRIES
                  </h2>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Paramount"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Paramount +
                    </Link>
                    <Link
                      href="/Telecine"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Telecine
                    </Link>
                    <Link
                      href="/Max"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      HBO Max
                    </Link>
                  </div>
                </div>
                <Separator className="bg-zinc-200" />
                <div className="flex flex-col gap-7">
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-white">
                    ESPORTES
                  </h2>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Premiere"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Premiere
                    </Link>
                    <Link
                      href="/Espn"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      ESPN
                    </Link>
                    <Link
                      href="/Sportv"
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      SporTV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-32 flex-col items-start justify-center gap-5 bg-blue-700 px-5 py-5 dark:bg-zinc-900">
            {" "}
            <div className="flex w-fit flex-col gap-1">
              <h3 className="text-sm font-semibold text-white">STREAMING</h3>
              <Separator className="!h-[2px] !w-10 rounded-full bg-white" />
            </div>
            <div className="flex w-fit flex-col gap-2">
              <Link
                href="/Combos"
                prefetch
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
    </>
  );
}
