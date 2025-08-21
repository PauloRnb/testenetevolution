"use client";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Separator } from "../ui/separator";

import { ShieldCheck, ChevronDown, Download } from "lucide-react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { RiGooglePlayFill } from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeaderDesktop() {
  return (
    <div className="container flex h-full items-center justify-between gap-2 px-6 32lg:px-0">
      <div className="flex h-full items-center justify-start gap-9">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/" className="select-none focus:outline-none">
              <Image
                src="/logoblue.svg"
                alt="Logo Net Evolution"
                width={180}
                height={35}
                priority
                className="block dark:hidden"
              />
              <Image
                src="/logowhite.svg"
                alt="Logo Net Evolution"
                width={180}
                height={35}
                priority
                className="hidden dark:block"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-semibold text-white">
              Logo da Empresa Net Evolution
            </p>
          </TooltipContent>
        </Tooltip>
        {/* Menu DropDown Left */}
        <NavigationMenu.Root className="relative z-10 flex items-center justify-center">
          <NavigationMenu.List className="flex list-none items-center gap-5">
            {/* Item 1 */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group select-none text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 data-[state=open]:text-blue-700 data-[state=open]:focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
                <div className="flex items-center gap-0.5">
                  Internet Fibra
                  <span className="sr-only">
                    Ícone de seta apontada pra baixo
                  </span>
                  <ChevronDown
                    aria-hidden
                    size={20}
                    className="duration-\[250\] relative transition-transform ease-in group-data-[state=open]:-rotate-180"
                  />
                </div>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full select-none data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <main className="flex h-[24.125rem] w-[33.125rem] flex-col justify-between">
                  <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
                    <div className="mt-4 flex w-fit flex-col gap-1">
                      <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                        INTERNET:
                      </h2>
                      <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
                    </div>
                    <div className="flex items-start gap-14">
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
                            className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                          >
                            Casa Conectada
                          </Link>
                        </div>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="bg-zinc-200"
                      />
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
                            href="/Companies"
                            prefetch
                            className="text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                          >
                            Empresas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-28 w-full flex-col gap-3 bg-blue-700 p-5 dark:bg-zinc-900">
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
                  </div>
                </main>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {/* Item 2 */}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  prefetch
                  href="/Combos"
                  className="select-none text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                >
                  Nossos Combos
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            {/* Item 3 */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex select-none items-center gap-0.5 text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 data-[state=open]:text-blue-700 data-[state=open]:focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
                Streaming
                <span className="sr-only">
                  Ícone de seta apontada pra baixo
                </span>
                <ChevronDown
                  aria-hidden
                  size={20}
                  className="duration-\[250\] relative transition-transform ease-in group-data-[state=open]:-rotate-180"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <main className="flex h-[24.125rem] w-[33.125rem] flex-col justify-between">
                  <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
                    <div className="mt-4 flex w-fit flex-col gap-1">
                      <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                        STREAMING:
                      </h2>
                      <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
                    </div>
                    <div className="flex items-start gap-14">
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
                      <Separator
                        orientation="vertical"
                        className="bg-zinc-200"
                      />
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
                  <div className="flex h-28 w-full flex-col gap-3 bg-blue-700 p-5 dark:bg-zinc-900">
                    <div className="flex w-fit flex-col gap-1">
                      <h3 className="text-sm font-semibold text-white">
                        STREAMING
                      </h3>
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
                  </div>
                </main>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
              <div className="relative top-full h-[24px] w-[24px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="absolute left-0 top-full flex items-center justify-center perspective-[2000px]">
            <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn dark:bg-zinc-800 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </div>
      {/* Menu DropDown Right */}
      <NavigationMenu.Root className="relative z-10 flex items-center justify-center">
        <NavigationMenu.List className="flex list-none items-center gap-5">
          {/* Item 1 */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center gap-0.5 text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 data-[state=open]:text-blue-700 data-[state=open]:focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
              Clientes
              <span className="sr-only">Ícone de seta apontada pra baixo</span>
              <ChevronDown
                aria-hidden
                size={20}
                className="duration-\[250\] relative transition-transform ease-in group-data-[state=open]:-rotate-180"
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <main className="flex h-[28.125rem] w-[33.125rem] flex-col justify-between">
                <div className="flex flex-col gap-5 pb-0 pl-5 pr-5 pt-5">
                  <div className="mt-4 flex w-fit flex-col gap-1">
                    <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                      ACESSE NOSSA ÁREA DO CLIENTE:
                    </h2>
                    <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
                  </div>
                  <p className="w-[18rem] text-sm leading-4 text-zinc-400 dark:text-zinc-200">
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
                    <div className="flex items-center justify-between">
                      <a
                        href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
                      >
                        <span className="text-base">
                          Download Via Google Play
                        </span>
                        <span className="sr-only">Ícone google play store</span>
                        <RiGooglePlayFill aria-hidden size={16} />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-[14.5rem] items-center justify-center gap-1 rounded-md bg-blue-700 px-2 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
                      >
                        <span className="text-base">
                          Download Via App Store
                        </span>
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
                      className="dark: flex h-11 w-[14.5rem] items-center justify-center rounded-md border-2 border-blue-700 bg-transparent px-2 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-700 hover:text-white focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-zinc-800 dark:focus-visible:bg-cyan-400 dark:focus-visible:text-zinc-800"
                    >
                      Central do Assinante
                    </a>
                  </div>
                </div>
                <div className="flex h-28 w-full flex-col gap-3 bg-blue-700 p-5 dark:bg-zinc-900">
                  <div className="flex w-fit flex-col gap-1">
                    <h2 className="text-sm font-semibold text-white">
                      INTERNET FIBRA
                    </h2>
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
              </main>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* Item 2*/}
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                prefetch
                href="/Indicate"
                className="select-none text-base font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
              >
                Indicação
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {/* Item 3 */}
          <NavigationMenu.Item aria-hidden>
            <Separator
              orientation="vertical"
              className="h-6 w-[1px] rounded-full bg-gray-600 dark:bg-white"
            />
          </NavigationMenu.Item>
          {/* Item 4 */}
          <NavigationMenu.Item>
            <Link
              href="/Security"
              className="group flex w-[9.063rem] select-none items-center justify-center gap-1 rounded-full bg-blue-700 p-1.5 py-[2px] text-base text-blue-700 opacity-100 transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
            >
              <span className="text-base font-medium text-white dark:font-semibold dark:text-zinc-900">
                Segurança
              </span>
              <span className="sr-only">Ícone de escudo</span>
              <ShieldCheck
                aria-hidden
                size={20}
                className="fill-white text-blue-700 group-hover:text-blue-500 group-focus-visible:text-blue-500 dark:fill-zinc-900 dark:text-cyan-400 dark:group-hover:text-cyan-500 dark:group-focus-visible:text-cyan-500"
              />
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
            <div className="relative top-full h-[24px] w-[24px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute right-0 top-full flex items-center justify-center perspective-[2000px]">
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn dark:bg-zinc-800 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
