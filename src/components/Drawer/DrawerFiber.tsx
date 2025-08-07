"use client";

import { ChevronRight, Globe } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DrawerFiberProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLinkClick: () => void;
}

const linksCasa = [
  { href: "/Fiber", label: "Fibra Óptica" },
  { href: "/Combos", label: "Combos" },
  { href: "/ConnectedHouse", label: "Casa Conectada" },
];

const linksEmpresa = [
  { href: "/Fiber", label: "Fibra Óptica" },
  { href: "/Dedicated", label: "Link Dedicado" },
];

const linksInfraestrutura = [
  {
    href: "https://wa.me/5585997362750?text=Olá, poderia me informar como funciona essa Rede MESH? Tenho interesse!",
    label: "Rede MESH",
  },
  {
    href: "https://wa.me/5585997362750?text=Olá, como funciona o programa Ultra Cabo? Pode me fornecer informações?",
    label: "Ultra Cabo",
  },
];

export function DrawerFiber({
  open,
  onOpenChange,
  onLinkClick,
}: DrawerFiberProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          aria-label="Abrir menu"
          type="button"
          className="flex w-full items-center justify-between text-base font-medium text-gray-600 hover:text-blue-700 focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
        >
          <span className="flex items-center gap-1">
            <Globe size={20} className="md:size-6" />
            Internet Fibra
          </span>
          <ChevronRight size={16} className="md:size-5" />
        </button>
      </SheetTrigger>

      <SheetContent aria-labelledby="fiber-title">
        <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
          <SheetTitle asChild>
            <h2 id="fiber-title" className="text-base text-white md:text-lg">
              <span className="flex items-center gap-1">
                <Globe size={20} className="md:size-6" />
                Internet Fibra
              </span>
            </h2>
          </SheetTitle>
        </SheetHeader>

        <main className="flex flex-col p-5">
          <section className="mt-4 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-blue-700 dark:text-white">
                INTERNET:
              </h3>
              <Separator className="!h-0.5 !w-10 rounded-full bg-blue-700 dark:bg-white" />
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-700 dark:text-white">
                  PARA SUA CASA
                </h4>
                <div className="mt-2 flex flex-col gap-2">
                  {linksCasa.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={onLinkClick}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Separator className="bg-zinc-200 dark:bg-zinc-700" />

              <div>
                <h4 className="text-lg font-semibold text-blue-700 dark:text-white">
                  PARA SUA EMPRESA
                </h4>
                <div className="mt-2 flex flex-col gap-2">
                  {linksEmpresa.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={onLinkClick}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="flex-1"></div>
        <SheetFooter className="sticky bottom-0 flex h-28 flex-col items-start gap-4 bg-blue-700 p-5 dark:bg-zinc-900">
          <div>
            <h5 className="text-sm font-semibold text-white">
              INFRAESTRUTURA DE REDE
            </h5>
            <Separator className="h-0.5 w-10 rounded-full bg-white" />
          </div>
          <div className="flex flex-col gap-2">
            {linksInfraestrutura.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500"
              >
                {label}
              </a>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
