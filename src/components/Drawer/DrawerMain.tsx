"use client";

import Link from "next/link";
import Image from "next/image";
import { AlignJustify, Combine } from "lucide-react";
import { BiSolidCheckShield } from "react-icons/bi";
import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DrawerFiber } from "./DrawerFiber";
import { DrawerClient } from "./DrawerClient";
import { DrawerStreaming } from "./DrawerStreaming";

export function DrawerMain() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menu"
            type="button"
            className="flex items-center justify-center text-zinc-600 focus:outline-none focus-visible:text-zinc-500 dark:text-cyan-400 dark:focus-visible:text-cyan-500"
          >
            <AlignJustify size={20} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
            <SheetTitle asChild>
              <h2 className="text-base text-white md:text-lg">
                <Image
                  src="/logowhite.svg"
                  alt="Logo Net Evolution"
                  width={150}
                  height={29}
                  priority
                />
              </h2>
            </SheetTitle>
          </SheetHeader>
          <main className="mt-9 flex flex-col px-5">
            {/* Fibra */}
            <DrawerFiber />
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
            {/* Combos */}
            <Link
              href="/Combos"
              className="flex w-full select-none items-center gap-1 text-base font-medium text-gray-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
            >
              <div className="flex items-center gap-1">
                <Combine size={20} className="md:size-6" />
                <span>Nossos Combos</span>
              </div>
            </Link>
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
            {/* Streaming */}
            <DrawerStreaming />
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
            {/* Cliente */}
            <DrawerClient />
            <Separator className="my-7 bg-zinc-200 dark:bg-zinc-500" />
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center gap-5 px-5 py-5">
            <Link
              href="/Security"
              className="group flex w-[9.063rem] items-center justify-center gap-1 rounded-full bg-blue-700 p-1.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500 md:text-lg"
            >
              <BiSolidCheckShield />
              <span>Segurança</span>
            </Link>
            <Separator
              orientation="vertical"
              className="my-7 bg-zinc-200 dark:bg-zinc-500"
            />
            <Link
              prefetch
              href="/Indicate"
              className="text-base font-medium text-zinc-600 dark:text-cyan-400"
            >
              Indicação
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
