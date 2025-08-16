"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TitlePages } from "../TitlePages/TitlesPages";

export function AccordionMax() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Duvidas sobre a Max?"
          descriptionTitle="A gente te ajuda! Confira respostas para as perguntas mais comuns sobre séries, filmes, dispositivos e planos."
          align="left"
        />

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é a Max (HBO Max)?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A Max é um serviço de streaming que oferece séries, filmes,
                    documentários e conteúdos exclusivos da HBO, Warner Bros,
                    DC, Cartoon Network e muito mais.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como faço para assinar a HBO Max?
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
                    serviços do nosso plano Paramount+.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Quais séries e filmes estão disponíveis?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Você encontra séries premiadas como Game of Thrones, The
                    Last of Us e Euphoria, filmes da Warner Bros, DC, Harry
                    Potter e conteúdos exclusivos Max.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Qual a qualidade do streaming?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A Max oferece streaming em 4K Ultra HD, com HDR10, Dolby
                    Vision e som Dolby Atmos em títulos compatíveis.
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
