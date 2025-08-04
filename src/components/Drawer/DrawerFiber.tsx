"use client";

import { ChevronRight, Globe } from "lucide-react";
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

export function DrawerFiber() {
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
              <Globe size={20} className="md:size-6" />
              <span>Intenet Fibra</span>
            </div>
            <ChevronRight size={16} className="md:size-5" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
            <SheetTitle asChild>
              <h2 className="text-base text-white md:text-lg">
                <div className="flex items-center gap-1">
                  <Globe size={20} className="md:size-6" />
                  <span>Intenet Fibra</span>
                </div>
              </h2>
            </SheetTitle>
          </SheetHeader>
          <main className="flex flex-col">
            <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
              <div className="mt-4 flex w-fit flex-col gap-1">
                <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                  INTERNET:
                </h2>
                <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
              </div>
              <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col gap-7">
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-white">
                    PARA SUA CASA
                  </h2>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Fiber"
                      prefetch
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Fibra Óptica
                    </Link>
                    <Link
                      href="/Combos"
                      prefetch
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Combos
                    </Link>
                    <Link
                      href="/ConnectedHouse"
                      prefetch
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Casa Conectada
                    </Link>
                  </div>
                </div>
                <Separator className="bg-zinc-200" />
                <div className="flex flex-col gap-7">
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-white">
                    PARA SUA EMPRESA
                  </h2>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Fiber"
                      prefetch
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Fibra Óptica
                    </Link>
                    <Link
                      href="/Dedicated"
                      prefetch
                      className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Link Dedicado
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-32 flex-col items-start justify-center gap-5 bg-blue-700 p-5 dark:bg-zinc-900">
            <div className="flex w-fit flex-col gap-1">
              <h3 className="text-sm font-semibold text-white">
                INFRAESTRUTURA DE REDE
              </h3>
              <Separator className="!h-[2px] !w-10 rounded-full bg-white" />
            </div>
            <div className="flex w-fit flex-col gap-2">
              <a
                href="https://wa.me/5585997362750?text=Olá, poderia me informar como funciona essa Rede MESH? Tenho interesse!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
              >
                Rede MESH
              </a>
              <a
                href="https://wa.me/5585997362750?text=Olá, como funciona o programa Ultra Cabo? Pode me fornecer informações?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
              >
                Ultra Cabo
              </a>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
