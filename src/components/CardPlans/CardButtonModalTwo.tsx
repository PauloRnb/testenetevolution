import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CirclePlus } from "lucide-react";
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
      <DialogTrigger asChild>
        <button type="button" className="text-white">
          <CirclePlus size={16} strokeWidth={2} />
        </button>
      </DialogTrigger>
      <DialogContent className="!min-w-full gap-4 border p-6 shadow-lg duration-200 !rounded-none md:w-full flex !min-h-dvh flex-col bg-white px-0 pb-[7.5rem] md:pb-[6.5rem] md:!min-h-[672px] md:!min-w-[672px] md:!rounded-2xl">
        <DialogHeader className="h-8 w-fit pl-5">
          <DialogTitle asChild>
            <h2 className="text-xl font-medium flex text-zinc-900 w-fit flex-row">
              INFORMAÇÕES DA OFERTA
            </h2>
          </DialogTitle>
        </DialogHeader>
        <Separator className="bg-zinc-300" />
        <main className="flex flex-col items-start pt-2 gap-8 md:overflow-y-scroll pb-[2rem]">
          <div className="flex flex-col gap-1 w-full px-5">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-blue-700 leading-[30px]">
                {textMbOne}
              </h3>
              <p className="text-sm font-medium text-zinc-600 leading-[14px] dark:text-white">
                100% FIBRA ÓPTICA
              </p>
            </div>
            <Separator className="!w-10 h-[3px] bg-blue-700 rounded-full" />
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-y-1 px-5">
              <li className="flex items-center gap-1">
                <div className="w-[2px] h-[14px] bg-blue-700 rounded-full shrink-0"></div>
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
                <div className="w-[2px] h-[14px] bg-blue-700 rounded-full shrink-0"></div>
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
                <div className="w-[2px] h-[14px] bg-blue-700 rounded-full shrink-0"></div>
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
                <div className="w-[2px] h-[14px] bg-blue-700 rounded-full shrink-0"></div>
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
                <div className="w-[2px] h-[14px] bg-blue-700 rounded-full shrink-0"></div>
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
            <div className="flex flex-col gap-1 ml-[15px]">
              <p className="text-xs text-zinc-600 font-medium dark:text-white">
                INCLUSO NO PLANO:
              </p>
              <div className="flex flex-col gap-[2px] mt-1">
                <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                  <EthernetPort size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-zinc-800 font-semibold text-base leading-4 mt-[2px] dark:text-white">
                    Infraestrutura de Rede
                  </h3>
                  <p className="text-xs w-[270px] leading-[14px] mt-1 text-zinc-600 dark:text-zinc-200">
                    Cabeamos todos os dispositivos que necessitam de uma conexão
                    cabeada.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col px-5 gap-2">
            <div>
              <span className="line-through text-sm text text-blue-700 fontm">
                {textPriceOne}
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-1">
                <span className="text-xs leading-3 text-zinc-600 font-medium dark:text-zinc-300">
                  POR
                </span>
                <span className="text-xl leading-4 text-zinc-600 font-medium dark:text-zinc-300">
                  R$
                </span>
              </div>
              <strong className="text-zinc-900 text-6xl leading-[45px] ml-1 dark:text-white">
                {textPriceTwo}
              </strong>
              <div className="flex flex-col gap-1">
                <span className="text-2xl leading-5 text-zinc-900 font-medium dark:text-white">
                  ,99*
                </span>
                <span className="text-sm leading-4 text-zinc-600 font-medium dark:text-zinc-300">
                  /MÊS
                </span>
              </div>
            </div>
          </div>
          {children}
        </main>
        <DialogFooter className="bg-zinc-300 fixed bottom-0 w-full h-32 p-5 md:h-24 rounded-t-md dark:bg-zinc-800">
          <p className="text-sm leading-4 text-zinc-700 font-medium dark:text-zinc-300">
            <span className="text-base text-blue-700">*</span>A velocidade da
            conexão pode sofrer oscilações e pode variar de acordo com alguns
            fatores externos: Distancia, numero de dispositivos conectados
            simultaneamente, sites ou apps acessados e posicionamento do
            roteador na sua residencia.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
