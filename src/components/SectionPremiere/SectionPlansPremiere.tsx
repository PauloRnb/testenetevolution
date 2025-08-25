"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

const plansPremiere = [
  {
    title: "INDIVIDUAL",
    speed: "500MEGA",
    download: "Download 500Mbps",
    upload: "Upload 250Mbps",
    oldPrice: "114,99",
    price: "109,99",
    message: "Olá gostaria de assinar o plano: 500Mbps + Paramount | R$109,99.",
  },
  {
    title: "PLANO FAMÍLIA",
    speed: "600MEGA",
    download: "Download 600Mbps",
    upload: "Upload 300Mbps",
    oldPrice: "119,99",
    price: "114",
    message: "Olá gostaria de assinar o plano: 600Mbps + Paramount | R$114,99.",
  },
];

export function SectionPlansPremiere() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas Premiere"
          descriptionTitle="Com a melhor internet fibra, assista aos jogos ao vivo e aos maiores clássicos do futebol no Premiere."
          align="left"
        />

        <div className="flex flex-wrap gap-4 pt-16 md:flex-row">
          {plansPremiere.map((plan, index) => (
            <Card.Root key={index} className="border-blue-700 md:w-[335px]">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text={plan.title} className="text-blue-700" />
                  <Card.ModalTwo
                    textMbOne={plan.speed}
                    textMbTwo={plan.download}
                    textMbThree={plan.upload}
                    textPriceOne={`de ${plan.oldPrice}`}
                    textPriceTwo={plan.price}
                    customContent={
                      <div className="flex flex-col gap-1 px-5">
                        <span className="text-xs font-medium text-zinc-600 dark:text-white">
                          INCLUSO NO PLANO:
                        </span>
                        <Card.Combo>
                          <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded">
                            <Image
                              src="/logoapp-premiere.webp"
                              alt="Logo do Premiere"
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
                    text={plan.download}
                    textTwo={plan.upload}
                  />
                  <Separator className="h-[2px] rounded-full bg-zinc-300" />
                  <Card.Includes>
                    <Card.Combo>
                      <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded">
                        <Image
                          src="/logoapp-premiere.webp"
                          alt="Logo do Premiere"
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                    </Card.Combo>
                  </Card.Includes>
                  <Card.Price text={plan.price.split(".")[0]} />
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
