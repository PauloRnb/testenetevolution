"use client";

import Link from "next/link";
import { ChevronRight, Globe } from "lucide-react";
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
          <main className="mt-9 flex flex-col px-5"></main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center gap-5 px-5 py-5"></SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
