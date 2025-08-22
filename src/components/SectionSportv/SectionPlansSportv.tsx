"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

const plansSportv = [
  {
    type: "INDIVIDUAL",
    speed: "500MEGA",
    download: "500Mbps",
    upload: "250Mbps",
    priceFrom: "114,99",
    priceTo: "109,99",
    message: "Olá gostaria de assinar o plano: 500Mbps + Paramount | R$109,99.",
  },
  {
    type: "PLANO FAMÍLIA",
    speed: "600MEGA",
    download: "600Mbps",
    upload: "300Mbps",
    priceFrom: "119,99",
    priceTo: "114,99",
    message: "Olá gostaria de assinar o plano: 600Mbps + Paramount | R$114,99.",
  },
];

export function SectionPlansSportv() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas SporTV"
          descriptionTitle="Aproveite transmissões exclusivas, programas ao vivo e cobertura completa de diversos esportes no SporTV, com qualidade e emoção em cada detalhe."
          align="left"
        />

        <div className="flex flex-wrap gap-4 pt-16 md:flex-row">
          {plansSportv.map((plan) => (
            <Card.Root
              key={plan.speed}
              className="border-blue-700 md:w-[335px]"
            >
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text={plan.type} className="text-blue-700" />
                  <Card.ModalTwo
                    textMbOne={plan.speed}
                    textMbTwo={`Download ${plan.download}`}
                    textMbThree={`Upload ${plan.upload}`}
                    textPriceOne={`de ${plan.priceFrom}`}
                    textPriceTwo={plan.priceTo}
                    customContent={
                      <div className="flex flex-col gap-1 px-5">
                        <span className="text-xs font-medium text-zinc-600 dark:text-white">
                          INCLUSO NO PLANO:
                        </span>
                        <Card.Combo>
                          <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                            <Image
                              src="/logosportv.webp"
                              alt="Logo do SporTV"
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
                      <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                        <Image
                          src="/logosportv.webp"
                          alt="Logo do SporTV"
                          width={30}
                          height={30}
                          priority
                        />
                      </div>
                    </Card.Combo>
                  </Card.Includes>
                  <Card.Price text={plan.priceTo.replace(",", ".")} />
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
    </section>
  );
}
