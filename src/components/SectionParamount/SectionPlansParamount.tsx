"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

const plans = [
  {
    label: "INDIVIDUAL",
    speed: "500MEGA",
    download: "500Mbps",
    upload: "250Mbps",
    oldPrice: "114,99",
    newPrice: "109",
    message: "Olá gostaria de assinar o plano: 500Mbps + Paramount | R$109,99.",
  },
  {
    label: "INDIVIDUAL",
    speed: "600MEGA",
    download: "600Mbps",
    upload: "300Mbps",
    oldPrice: "119,99",
    newPrice: "114",
    message: "Olá gostaria de assinar o plano: 600Mbps + Paramount | R$114,99.",
  },
];

export function SectionPlansParamount() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas Paramount+"
          descriptionTitle="Com a melhor internet fibra, curta conteúdo exclusivo com alta qualidade de streaming. Conexão confiável para toda a família."
          align="left"
        />

        <div className="pt-16">
          <div className="flex flex-wrap gap-4 md:flex-row">
            {plans.map((plan) => (
              <Card.Root
                key={plan.speed}
                className="border-blue-700 md:w-[335px]"
              >
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text={plan.label} className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne={plan.speed}
                      textMbTwo={`Download ${plan.download}`}
                      textMbThree={`Upload ${plan.upload}`}
                      textPriceOne={`de ${plan.oldPrice}`}
                      textPriceTwo={plan.newPrice.toString()}
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded">
                              <Image
                                src="/logoapp-paramountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message={plan.message}
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text={plan.speed} />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text={`Download ${plan.download}`}
                      textTwo={`Upload ${plan.upload}`}
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded">
                          <Image
                            src="/logoapp-paramountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text={plan.newPrice.toString()} />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message={plan.message}
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
