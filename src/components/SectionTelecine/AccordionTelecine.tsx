"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TitlePages } from "../TitlePages/TitlesPages";

export function AccordionTelecine() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Duvidas sobre o Telecine"
          descriptionTitle="Ficou com alguma dúvida? A gente responde, confira algumas das dúvidas mais frequentes."
          align="left"
        />

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é o Telecine e quais conteúdos estão disponíveis?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    O Telecine é um serviço de streaming de filmes que oferece
                    lançamentos, clássicos e conteúdos exclusivos em diversos
                    gêneros.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como faço para assinar o Telecine?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Basta entrar em contato conosco pelo WhatsApp. Lá, tiramos
                    suas dúvidas e, após a assinatura, o técnico vai até você
                    para realizar o primeiro login na plataforma.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Posso cancelar a assinatura a qualquer momento?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Não, nosso contrato é de 12 meses, você permanece com a
                    assinatura durante o periodo, após, você pode cancelar os
                    serviços do nosso plano Telecine.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O Telecine oferece filmes em alta definição?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim, todo o conteúdo está disponível em HD e, quando
                    suportado, em 4K Ultra HD.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O conteúdo do Telecine está disponível offline?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim, é possível baixar filmes no aplicativo móvel para
                    assistir offline quando quiser.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
