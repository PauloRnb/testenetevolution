"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { Card } from "@/components/CardPlans";

export function SectionParamount() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <Image
                  src="/logoparamountwhite.svg"
                  alt="Logo do Paramount+"
                  width={208}
                  height={48}
                  priority={true}
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Assista ao melhor do cinema, séries e esportes com o
                  Paramount+ incluso no seu plano. Conteúdo exclusivo, onde e
                  quando quiser.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo da Net Evolution"
                  width={176}
                  height={34}
                  priority={true}
                />
              </div>
            </div>
            <Image
              src="/paramountpagesmobilessmall.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/paramountpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/paramountpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
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
              Ofertas Paramount+
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Com a melhor internet fibra, curta filmes, séries, esportes e
              conteúdo exclusivo com alta qualidade de streaming. Conexão
              confiável para toda a família.
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
    </>
  );
}
