"use client";

import Image from "next/image";
import { CirclePlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ModalCoverage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Abrir modal de áreas de cobertura"
          className="flex items-center gap-1 text-base font-medium text-white transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white dark:text-cyan-400"
        >
          <span>Áreas de Cobertura</span>
          <CirclePlus size={16} strokeWidth={2.2} />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <div className="w-fit">
              <Image
                src="/logoblue.svg"
                alt="Logo Net Evolution - tema claro"
                width={170}
                height={33}
                priority
                className="block dark:hidden"
              />
              <Image
                src="/logowhite.svg"
                alt="Logo Net Evolution - tema escuro"
                width={170}
                height={33}
                priority
                className="hidden dark:block"
              />
            </div>
          </DialogTitle>
        </DialogHeader>

        <main className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Áreas de Cobertura:
          </h3>
          <ul className="grid list-inside list-disc grid-cols-2 gap-y-2">
            {[
              "Cigana",
              "Vila Cazé",
              "Nova Cigana",
              "Paumirim",
              "Planalto Caucaia",
              "Padre J. Maria I e II",
            ].map((area) => (
              <li
                key={area}
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {area}
              </li>
            ))}
          </ul>
        </main>

        <DialogFooter>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
            <span className="text-sm font-semibold text-orange-600">*</span>{" "}
            Consulte viabilidade para sua região.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
