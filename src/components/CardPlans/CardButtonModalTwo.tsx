import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { CirclePlus, CircleX } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  CirclePercent,
  Headset,
  Wifi,
  CloudDownload,
  CloudUpload,
  EthernetPort,
} from "lucide-react";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardButtonModalTwoProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  textMbOne: string;
  textMbTwo: string;
  textMbThree: string;
  textPriceOne: string;
  textPriceTwo: string;
  customContent?: ReactNode;
}

export function CardButtonModalTwo({
  children,
  textMbOne,
  textMbTwo,
  textMbThree,
  textPriceOne,
  textPriceTwo,
  customContent,
}: CardButtonModalTwoProps) {
  return (
    <Dialog>
      <DialogTrigger className="text-white focus:scale-105 focus:outline-none">
        <CirclePlus size={16} strokeWidth={2} />
      </DialogTrigger>
      <DialogContent className="flex !min-h-dvh !min-w-full flex-col gap-4 overflow-hidden !rounded-none border bg-white p-6 px-0 pb-[7.5rem] shadow-lg duration-200 md:!min-h-[672px] md:w-full md:!min-w-[672px] md:!rounded-2xl md:pb-[6.5rem]">
        <DialogHeader className="h-8 w-fit pl-5">
          <DialogTitle asChild>
            <h2 className="flex w-fit flex-row text-xl font-medium text-zinc-900 dark:text-white">
              INFORMAÇÕES DA OFERTA
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
        <Separator className="bg-zinc-300" />
        <main className="flex flex-col items-start gap-8 overflow-y-scroll pb-[2rem] pt-2">
          <div className="flex w-full flex-col gap-1 px-5">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold leading-[30px] text-blue-700">
                {textMbOne}
              </h3>
              <p className="text-sm font-medium leading-[14px] text-zinc-600 dark:text-white">
                100% FIBRA ÓPTICA
              </p>
            </div>
            <Separator className="h-[3px] !w-10 rounded-full bg-blue-700" />
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-y-1 px-5">
              <li className="flex items-center gap-1">
                <div className="h-[14px] w-[2px] shrink-0 rounded-full bg-blue-700"></div>
                <div className="flex items-center gap-[2px]">
                  <CirclePercent
                    size={14}
                    strokeWidth={1.8}
                    className="text-zinc-600 dark:text-white"
                  />
                  <span className="text-sm text-zinc-600 dark:text-white">
                    Instalação Grátis
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <div className="h-[14px] w-[2px] shrink-0 rounded-full bg-blue-700"></div>
                <div className="flex items-center gap-[2px]">
                  <Headset
                    size={14}
                    strokeWidth={1.8}
                    className="text-zinc-600 dark:text-white"
                  />
                  <span className="text-sm text-zinc-600 dark:text-white">
                    Suporte Online 24H
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <div className="h-[14px] w-[2px] shrink-0 rounded-full bg-blue-700"></div>
                <div className="flex items-center gap-[2px]">
                  <Wifi
                    size={14}
                    strokeWidth={1.8}
                    className="text-zinc-600 dark:text-white"
                  />
                  <span className="text-sm text-zinc-600 dark:text-white">
                    Wi-Fi de Alta Performance
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <div className="h-[14px] w-[2px] shrink-0 rounded-full bg-blue-700"></div>
                <div className="flex items-center gap-[2px]">
                  <CloudDownload
                    size={14}
                    strokeWidth={1.8}
                    className="text-zinc-600 dark:text-white"
                  />
                  <span className="text-sm text-zinc-600 dark:text-white">
                    {textMbTwo}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <div className="h-[14px] w-[2px] shrink-0 rounded-full bg-blue-700"></div>
                <div className="flex items-center gap-[2px]">
                  <CloudUpload
                    size={14}
                    strokeWidth={1.8}
                    className="text-zinc-600 dark:text-white"
                  />
                  <span className="text-sm text-zinc-600 dark:text-white">
                    {textMbThree}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <Separator className="bg-zinc-300" />
          {customContent ? (
            customContent
          ) : (
            <div className="ml-[15px] flex flex-col gap-1">
              <p className="text-xs font-medium text-zinc-600 dark:text-white">
                INCLUSO NO PLANO:
              </p>
              <div className="mt-1 flex flex-col gap-[2px]">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-700">
                  <EthernetPort size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="mt-[2px] text-base font-semibold leading-4 text-zinc-800 dark:text-white">
                    Infraestrutura de Rede
                  </h3>
                  <p className="mt-1 w-[270px] text-xs leading-[14px] text-zinc-600 dark:text-zinc-200">
                    Cabeamos todos os dispositivos que necessitam de uma conexão
                    cabeada.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2 px-5">
            <div>
              <span className="text fontm text-sm text-blue-700 line-through">
                {textPriceOne}
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium leading-3 text-zinc-600 dark:text-zinc-300">
                  POR
                </span>
                <span className="text-xl font-medium leading-4 text-zinc-600 dark:text-zinc-300">
                  R$
                </span>
              </div>
              <strong className="ml-1 text-6xl leading-[45px] text-zinc-900 dark:text-white">
                {textPriceTwo}
              </strong>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-medium leading-5 text-zinc-900 dark:text-white">
                  ,99*
                </span>
                <span className="text-sm font-medium leading-4 text-zinc-600 dark:text-zinc-300">
                  /MÊS
                </span>
              </div>
            </div>
          </div>
          {children}
        </main>
        <DialogFooter className="fixed bottom-0 h-32 w-full rounded-t-md bg-zinc-300 p-5 dark:bg-zinc-800 md:h-24">
          <p className="text-sm font-medium leading-4 text-zinc-700 dark:text-zinc-300">
            <span className="text-base leading-[14px] text-blue-700">*</span>A
            velocidade da conexão pode sofrer oscilações e pode variar de acordo
            com alguns fatores externos: Distancia, numero de dispositivos
            conectados simultaneamente, sites ou apps acessados e posicionamento
            do roteador na sua residencia.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
