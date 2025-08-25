"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import Image from "next/image";

const planos = [
  {
    tipo: "INDIVIDUAL",
    mega: "500MEGA",
    download: "500Mbps",
    upload: "250Mbps",
    precoDe: "114,99",
    precoPor: "109,99",
    logo: "/logoapp-espn.webp",
    mensagem: "Olá gostaria de assinar o plano: 500Mbps + ESPN | R$109,99.",
  },
  {
    tipo: "PLANO FAMÍLIA",
    mega: "600MEGA",
    download: "600Mbps",
    upload: "300Mbps",
    precoDe: "119,99",
    precoPor: "114",
    logo: "/logoapp-espn.webp",
    mensagem: "Olá gostaria de assinar o plano: 600Mbps + ESPN | R$114,99.",
  },
];

export function SectionPlansEspn() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Ofertas ESPN"
          descriptionTitle="Com a melhor internet fibra, assista aos grandes duelos do futebol e outros esportes ao vivo na ESPN, com qualidade e sem interrupções."
          align="left"
        />
        <div className="flex flex-wrap gap-4 pt-16 md:flex-row">
          {planos.map((plano) => (
            <Card.Root
              key={plano.mega}
              className="border-blue-700 md:w-[335px]"
            >
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text={plano.tipo} className="text-blue-700" />
                  <Card.ModalTwo
                    textMbOne={plano.mega}
                    textMbTwo={`Download ${plano.download}`}
                    textMbThree={`Upload ${plano.upload}`}
                    textPriceOne={`de ${plano.precoDe}`}
                    textPriceTwo={plano.precoPor}
                    customContent={
                      <div className="flex flex-col gap-1 px-5">
                        <span className="text-xs font-medium text-zinc-600 dark:text-white">
                          INCLUSO NO PLANO:
                        </span>
                        <Card.Combo>
                          <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                            <Image
                              src={plano.logo}
                              alt={`Logo da ESPN`}
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
                        message={plano.mensagem}
                        className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500"
                      />
                    </Card.ModalBox>
                  </Card.ModalTwo>
                </Card.Mtop>
                <Card.Item text={plano.mega} />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="ml-[15px] bg-blue-700"
                    text={`Download ${plano.download}`}
                    textTwo={`Upload ${plano.upload}`}
                  />
                  <Separator className="h-[2px] rounded-full bg-zinc-300" />
                  <Card.Includes>
                    <Card.Combo>
                      <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                        <Image
                          src={plano.logo}
                          alt={`Logo da ESPN`}
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                    </Card.Combo>
                  </Card.Includes>
                  <Card.Price text={plano.precoPor} />
                </Card.Infor>
              </Card.Content>
              <Card.BtnCombos
                text="ASSINE AGORA"
                message={plano.mensagem}
                className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
              />
            </Card.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
