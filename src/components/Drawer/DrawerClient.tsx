"use client";

import { ChevronRight, CircleUser, Download } from "lucide-react";
import { RiGooglePlayFill } from "react-icons/ri";
import { IoLogoAppleAppstore } from "react-icons/io5";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DrawerClientProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLinkClick: () => void;
}

export function DrawerClient({
  open,
  onOpenChange,
  onLinkClick,
}: DrawerClientProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          aria-label="Abrir menu área do cliente"
          type="button"
          className="flex w-full select-none items-center justify-between text-base font-medium text-gray-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 md:text-lg"
        >
          <div className="flex items-center gap-1">
            <CircleUser size={20} />
            <span>Área do Cliente</span>
          </div>
          <ChevronRight size={16} className="md:size-5" />
        </button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="h-16 bg-blue-700 dark:bg-zinc-900">
          <SheetTitle asChild>
            <h2 className="flex items-center gap-1 text-base text-white md:text-lg">
              <CircleUser size={20} />
              <span>Área do Cliente</span>
            </h2>
          </SheetTitle>
        </SheetHeader>

        <main className="flex flex-col px-5 pt-5">
          {/* Seção: Introdução */}
          <div className="mb-6">
            <h2 className="font-semibold text-blue-700 dark:text-white">
              ACESSE NOSSA ÁREA DO CLIENTE:
            </h2>
            <Separator className="my-1 !h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
            <p className="w-[18rem] text-sm font-medium leading-4 text-zinc-500 dark:text-zinc-200">
              Pelo nosso app você tem acesso ao seu consumo, suas faturas e
              muito mais.
            </p>
          </div>

          {/* Seção: App */}
          <section className="mb-6">
            <div className="mb-3 flex items-center gap-1">
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                Instale o App Meu Provedor
              </h3>
              <Download
                size={12}
                strokeWidth={3}
                className="text-zinc-600 dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
              >
                <span className="text-base">Via Google Play</span>
                <RiGooglePlayFill aria-hidden size={16} />
              </a>

              <a
                href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
              >
                <span className="text-base">Via Apple Store</span>
                <IoLogoAppleAppstore aria-hidden size={16} />
              </a>
            </div>
          </section>

          {/* Seção: Central do Assinante */}
          <section className="mb-6">
            <div className="mb-2 flex items-center gap-1">
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                Acesse a Central do Assinante
              </h3>
            </div>
            <a
              href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onLinkClick}
              className="flex h-11 w-[14.5rem] items-center justify-center rounded-md border-2 border-blue-700 text-base font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white focus:outline-none focus-visible:bg-blue-700 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-zinc-800"
            >
              Central do Assinante
            </a>
          </section>
        </main>
        <div className="flex-1"></div>
        {/* Rodapé com Suporte */}
        <SheetFooter className="sticky bottom-0 mt-6 h-28 p-0">
          <div className="flex w-full flex-col items-start gap-3 bg-blue-700 p-5 dark:bg-zinc-900">
            <div className="flex w-fit flex-col gap-1">
              <h3 className="text-sm font-semibold text-white">
                INTERNET FIBRA
              </h3>
              <Separator className="!h-[2px] !w-10 rounded-full bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className="text-sm font-medium text-white transition hover:text-zinc-200 focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500"
              >
                Suporte 24H
              </a>
              <a
                href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className="text-sm font-medium text-white transition hover:text-zinc-200 focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500"
              >
                2ª Via da Fatura
              </a>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
