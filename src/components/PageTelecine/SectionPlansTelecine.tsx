"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

const plansTelecine = [
  {
    name: "INDIVIDUAL",
    speed: "500MEGA",
    download: "500Mbps",
    upload: "250Mbps",
    oldPrice: "114,99",
    price: "109",
    logoAlt: "Logo do Telecine",
    message: "Olá gostaria de assinar o plano: 500Mbps + Telecine | R$109,99.",
  },
  {
    name: "PLANO FAMÍLIA",
    speed: "600MEGA",
    download: "600Mbps",
    upload: "300Mbps",
    oldPrice: "119,99",
    price: "114",
    logoAlt: "Logo do Telecine",
    message: "Olá gostaria de assinar o plano: 600Mbps + Telecine | R$114,99.",
  },
];

export function SectionPlansTelecine() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas Telecine"
          descriptionTitle="Com a melhor internet fibra, curta os maiores sucessos do cinema no Telecine com alta qualidade de streaming. Conexão confiável para toda a família."
          align="left"
        />

        <div className="flex flex-wrap gap-4 pt-16 md:flex-row">
          {plansTelecine.map((plan, idx) => (
            <Card.Root key={idx} className="border-blue-700 md:w-[335px]">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text={plan.name} className="text-blue-700" />
                  <Card.ModalTwo
                    textMbOne={plan.speed}
                    textMbTwo={`Download ${plan.download}`}
                    textMbThree={`Upload ${plan.upload}`}
                    textPriceOne={`de ${plan.oldPrice}`}
                    textPriceTwo={plan.price}
                    customContent={
                      <div className="flex flex-col gap-1 px-5">
                        <span className="text-xs font-medium text-zinc-600 dark:text-white">
                          INCLUSO NO PLANO:
                        </span>
                        <Card.Combo>
                          <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                            <Image
                              src="/logotelecine.webp"
                              alt={plan.logoAlt}
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
                      <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                        <Image
                          src="/logotelecine.webp"
                          alt={plan.logoAlt}
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                    </Card.Combo>
                  </Card.Includes>
                  <Card.Price text={plan.price} />
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
