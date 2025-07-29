"use client";

import Link from "next/link";
import { ChevronRight, CircleUser } from "lucide-react";
import { BiSolidCheckShield } from "react-icons/bi";
import { Separator } from "@/components/ui/separator";

import { Download } from "lucide-react";
import { RiGooglePlayFill } from "react-icons/ri";
import { IoLogoAppleAppstore } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DrawerClient() {
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
              <CircleUser size={20} />
              <span>Área do Cliente</span>
            </div>
            <ChevronRight size={16} className="md:size-5" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-16 items-center bg-blue-700 dark:bg-zinc-900">
            <SheetTitle asChild>
              <h2 className="text-base text-white md:text-lg">
                <div className="flex items-center gap-1">
                  <CircleUser size={20} />
                  <span>Área do Cliente</span>
                </div>
              </h2>
            </SheetTitle>
          </SheetHeader>
          <main className="flex flex-col justify-between">
            <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
              <div className="mt-4 flex w-fit flex-col gap-1">
                <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                  ACESSE NOSSA ÁREA DO CLIENTE:
                </h2>
                <div className="relative flex flex-col">
                  <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
                </div>
              </div>
              <p className="w-[18rem] text-sm font-medium leading-4 text-zinc-500 dark:text-zinc-200">
                Pelo nosso app você tem acesso ao seu consumo, acesso a suas
                faturas e muito mais.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                    Instale o App Meu Provedor
                  </h3>
                  <span className="sr-only">Ícone de download</span>
                  <Download
                    aria-hidden
                    size={12}
                    strokeWidth={3}
                    className="text-zinc-600 dark:text-white"
                  />
                </div>
                <div className="flex flex-col items-start justify-between gap-y-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
                  >
                    <span className="text-base">Download Via Google Play</span>
                    <span className="sr-only">Ícone google play store</span>
                    <RiGooglePlayFill aria-hidden size={16} />
                  </a>
                  <a
                    href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
                  >
                    <span className="text-base">Download Via Apple Store</span>
                    <span className="sr-only">Ícone app store</span>
                    <IoLogoAppleAppstore aria-hidden size={16} />
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                    Acesse a Central do Assinante
                  </h3>
                </div>
                <a
                  href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-[14.5rem] items-center justify-center rounded-md border-2 border-blue-700 bg-transparent px-2 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-700 hover:text-white focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-zinc-800 dark:focus-visible:bg-cyan-400 dark:focus-visible:text-zinc-800"
                >
                  Central do Assinante
                </a>
              </div>
            </div>
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-28 items-center p-0">
            <div className="flex h-28 w-full flex-col gap-3 bg-blue-700 p-5 dark:bg-zinc-900">
              <div className="flex w-fit flex-col gap-1">
                <h3 className="text-sm font-semibold text-white">
                  INTERNET FIBRA
                </h3>
                <Separator className="!h-[2px] !w-10 rounded-full bg-white" />
              </div>
              <div className="flex w-fit flex-col gap-2">
                <a
                  href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                >
                  Suporte 24H
                </a>
                <a
                  href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-[14px] text-white transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:text-zinc-200 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                >
                  2ª Via da Fatura
                </a>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
