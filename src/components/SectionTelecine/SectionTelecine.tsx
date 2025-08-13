"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { Card } from "@/components/CardPlans";
import { Popcorn, FastForward, Film } from "lucide-react";

export function SectionTelecine() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logotelecinefull.webp"
                  alt="Logo do Paramount+"
                  width={208}
                  height={48}
                  priority={true}
                  className="select-none"
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Assista aos maiores sucessos do cinema com o Telecine incluso
                  no seu plano. Filmes para todos os gostos, onde e quando
                  quiser.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo da Net Evolution"
                  width={176}
                  height={34}
                  priority={true}
                  className="select-none"
                />
              </div>
            </div>
            <Image
              src="/telecinepagesmobilessmall.webp"
              alt="Banner Filme Emilia Pérez | Telecine"
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/telecinepagestablet.webp"
              alt="Banner Filme Emilia Pérez | Telecine"
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/telecinepagestablet.webp"
              alt="Banner Filme Emilia Pérez | Telecine"
              width={401}
              height={315}
              loading="lazy"
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Ofertas Telecine
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Com a melhor internet fibra, curta os maiores sucessos do cinema
              no Telecine com alta qualidade de streaming. Conexão confiável
              para toda a família.
            </p>
          </header>

          <div className="pt-16">
            <div className="flex flex-wrap gap-4 md:flex-row">
              <Card.Root className="border-blue-700 md:w-[335px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="INDIVIDUAL" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="500MEGA"
                      textMbTwo="Download 500Mbps"
                      textMbThree="Upload 250Mbps"
                      textPriceOne="de 114,99"
                      textPriceTwo="109,99"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoparamountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                priority
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 500Mbps + Paramount | R$109,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="500MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 500Mbps"
                      textTwo="Upload 250Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoparamountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="109" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 500Mbps + Paramount | R$109,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
              <Card.Root className="border-blue-700 md:w-[335px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items
                      text="PLANO FAMÍLIA"
                      className="text-blue-700"
                    />
                    <Card.ModalTwo
                      textMbOne="600MEGA"
                      textMbTwo="Download 600Mbps"
                      textMbThree="Upload 300Mbps"
                      textPriceOne="de 119,99"
                      textPriceTwo="114"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoparamountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                priority
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 600Mbps + Paramount | R$114,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="600MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 600Mbps"
                      textTwo="Upload 300Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoparamountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="114" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 600Mbps + Paramount | R$114,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-zinc-800">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Vantagens Telecine
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Curta os maiores sucessos do cinema com o Telecine incluso no seu
              plano. Estreias, clássicos e canais ao vivo para toda a família,
              onde e quando quiser.
            </p>
          </header>

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Card 1 */}
              <div className="relative flex h-[215px] w-full flex-col items-center gap-y-6 rounded-xl bg-zinc-100 p-4 shadow-sm dark:border dark:border-white dark:bg-zinc-900">
                <div className="absolute top-0 flex w-56 items-center justify-center rounded-b-2xl bg-blue-700 px-4 py-1 dark:bg-white">
                  <span className="select-none text-lg font-semibold text-white dark:text-zinc-900">
                    CATÁLAGO TELECINE
                  </span>
                </div>
                <div className="mt-14 flex flex-col gap-y-5 md:mt-9">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <Popcorn
                      size={44}
                      strokeWidth={1.4}
                      className="text-zinc-600 dark:text-white"
                    />
                    <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
                  </div>
                  <p className="text-center text-base font-medium text-zinc-600 dark:text-white">
                    Catálago 100% focado em cinema com mais de 2.000 filmes.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative flex h-[215px] w-full flex-col items-center gap-y-6 rounded-xl bg-zinc-100 p-4 shadow-sm dark:border dark:border-white dark:bg-zinc-900">
                <div className="absolute top-0 flex w-56 items-center justify-center rounded-b-2xl bg-blue-700 px-4 py-1 dark:bg-white">
                  <span className="select-none text-lg font-semibold text-white dark:text-zinc-900">
                    ESTREIAS RÁPIDAS
                  </span>
                </div>
                <div className="mt-9 flex flex-col gap-y-5">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <FastForward
                      size={44}
                      strokeWidth={1.4}
                      className="text-zinc-600 dark:text-white"
                    />
                    <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
                  </div>
                  <p className="text-center text-base font-medium text-zinc-600 dark:text-white">
                    Muitos títulos chegam primeiro no Telecine antes de outras
                    plataformas.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative flex h-[215px] w-full flex-col items-center gap-y-6 overflow-hidden rounded-xl bg-zinc-100 p-4 shadow-sm dark:border dark:border-white dark:bg-zinc-900">
                <div className="absolute top-0 flex w-56 items-center justify-center rounded-b-2xl bg-blue-700 px-4 py-1 dark:bg-white">
                  <span className="select-none text-lg font-semibold text-white dark:text-zinc-900">
                    LISTAS E COLEÇÕES
                  </span>
                </div>
                <div className="mt-14 flex flex-col gap-y-5 md:mt-9">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <Film
                      size={44}
                      strokeWidth={1.4}
                      className="text-zinc-600 dark:text-white"
                    />
                    <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
                  </div>
                  <p className="text-center text-base font-medium text-zinc-600 dark:text-white">
                    Curadoria feita por especialistas para todos os gostos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-zinc-800">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Alguns destaques no Telecine
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Com a melhor internet fibra, curta os maiores sucessos do cinema
              no Telecine com alta qualidade de streaming. Conexão confiável
              para toda a família.
            </p>
          </header>

          <div className="pt-16"></div>
        </div>
      </section>
    </>
  );
}
