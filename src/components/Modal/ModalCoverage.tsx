"use client";
import Image from "next/image";

import { CirclePlus, CircleX } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ModalCoverage() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Abri modal"
            className="flex select-none items-center justify-center gap-1 text-base font-medium text-white opacity-100 transition-opacity duration-200 hover:opacity-85 focus:outline-none focus-visible:opacity-85 dark:text-cyan-400"
          >
            <span>Áreas de Cobertura</span>
            <CirclePlus size={16} strokeWidth={2.2} />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle asChild>
              <h2 className="w-fit">
                <Image
                  src="/logoblue.svg"
                  alt="Logo Net Evolution"
                  width={170}
                  height={33}
                  priority
                  className="block dark:hidden"
                />
                <Image
                  src="/logowhite.svg"
                  alt="Logo Net Evolution"
                  width={170}
                  height={33}
                  priority
                  className="hidden dark:block"
                />
              </h2>
            </DialogTitle>
            <DialogClose asChild>
              <button
                type="button"
                className="rounded-xs absolute right-4 top-4 text-zinc-600 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:text-zinc-800 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:text-white dark:focus-visible:text-cyan-400 [&_svg:not([class*='size-'])]:size-7 [&_svg]:pointer-events-none [&_svg]:shrink-0"
              >
                <CircleX size={28} />
              </button>
            </DialogClose>
          </DialogHeader>
          <main className="flex flex-col items-start justify-between">
            <div className="flex w-full flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Áreas de Cobertura:
              </h3>
              <ul className="grid list-inside list-disc grid-cols-2 gap-y-2">
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Cigana
                </li>
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Vila Cazé
                </li>
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Nova Cigana
                </li>
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Paumirim
                </li>
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Planalto Caucaia
                </li>
                <li className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Padre J. Maria I e II
                </li>
              </ul>
            </div>
          </main>
          <DialogFooter>
            <p className="text-xs font-medium tracking-[0.01rem] text-gray-700 dark:text-gray-200">
              <span className="text-sm font-semibold text-orange-600">*</span>
              Consulte viabilidade para sua região.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
