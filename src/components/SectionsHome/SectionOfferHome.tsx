import { Tabs } from "@ark-ui/react/tabs";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";

export function SectionOfferHome() {
  return (
    <section id="section-offer-home" className="py-24">
      <div className="container px-5 32lg:px-0">
        <div className="flex flex-col gap-y-1">
          <h2
            className="text-3xl sm:text-4xl
             lg:text-5xl font-semibold text-blue-700 dark:text-white text-left"
          >
            Confira nossas ofertas
          </h2>
          <p className="font-medium text-base md:text-xl lg:text-2xl text-zinc-500 leading-4 text-left dark:text-zinc-300">
            Nois te conectamos aos melhores conteúdos, com as melhores ofertas.
          </p>
        </div>
        <div className="container pb-10 pt-8">
          <Tabs.Root defaultValue="combos">
            <Tabs.List className="relative border-b-[8px] border-zinc-200 dark:border-zinc-700">
              <Tabs.Trigger
                value="combos"
                className="px-5 py-2 text-base font-medium text-zinc-700 hover:text-blue-500 data-[selected]:text-blue-700 w-[160px] dark:text-white dark:hover:text-cyan-500 dark:data-[selected]:text-cyan-400"
              >
                Combos
              </Tabs.Trigger>
              <Tabs.Trigger
                value="internet"
                className="px-5 py-2 text-base font-medium text-zinc-700 hover:text-blue-500 data-[selected]:text-blue-700 w-[160px] dark:text-white dark:hover:text-cyan-500 dark:data-[selected]:text-cyan-400"
              >
                Internet
              </Tabs.Trigger>
              {/* Estilo do indicador */}
              <Tabs.Indicator className="absolute ml-1 bottom-[-6px] h-[4px] w-[160px] translate-x-[0px] bg-blue-700 transition-all duration-300 rounded-full dark:bg-cyan-400" />
            </Tabs.List>

            <Tabs.Content value="combos" className="py-4">
              {/* CARD MAIN */}
              <Card.Root>
                <Card.Top>
                  <Card.Mtop>
                    <Card.Items text="MAIS VENDIDO" />
                    <Card.Modal />
                  </Card.Mtop>
                  <Card.Item text="300MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List />
                    <Separator className="h-[2px] bg-zinc-300 rounded-full" />
                    <Card.Includes />
                    <Card.Price text="69" />
                  </Card.Infor>
                </Card.Content>
                <Card.Trigger text="ASSINE AGORA" />
              </Card.Root>
            </Tabs.Content>
            <Tabs.Content value="internet" className="p-4">
              Vue Content
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}
