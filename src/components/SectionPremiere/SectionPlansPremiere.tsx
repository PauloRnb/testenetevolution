"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

export function SectionPlansPremiere() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas Premiere"
          descriptionTitle="Com a melhor internet fibra, assista aos jogos ao vivo e aos maiores clássicos do futebol no Premiere com transmissão em alta definição. Conexão estável para não perder nenhum lance."
          align="left"
        />

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
                              src="/logopremiere.webp"
                              alt="Logo do Premiere"
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
                          src="/logopremiere.webp"
                          alt="Logo do Premiere"
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
                  <Card.Items text="PLANO FAMÍLIA" className="text-blue-700" />
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
                              src="/logopremiere.webp"
                              alt="Logo do Premiere"
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
                          src="/logopremiere.webp"
                          alt="Logo do Premiere"
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
  );
}
