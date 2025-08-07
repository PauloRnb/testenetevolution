import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1">
          <h2 className="text-left text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="text-left text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Dúvidas rápidas? A gente responde aqui. Confira abaixo as perguntas
            mais comuns sobre nossos planos, instalação e suporte.
          </p>
        </header>

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  A instalação tem algum custo?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Não, a instalação é 100% gratuita, sem nenhum custo
                    adicional. Você não paga nada a mais para ter nossa internet
                    funcionando na sua casa ou empresa — é simples, rápido e sem
                    surpresas na fatura.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Tem fidelidade?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim, nosso contrato possui fidelidade de 12 meses. Isso nos
                    permite oferecer mais benefícios, como instalação grátis e
                    suporte completo.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como Funciona o Pagamento?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    O pagamento é feito por meio de carnê, que pode ser impresso
                    ou enviado em PDF. O carnê contém 12 boletos,
                    correspondentes aos meses do contrato. Cada boleto pode ser
                    pago via PIX{" "}
                    <strong className="font-semibold text-zinc-800 dark:text-white">
                      (através do QR Code impresso no carnê)
                    </strong>{" "}
                    ou usando o código de barras.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  É possível mudar de plano depois?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim! Você pode solicitar o upgrade para um plano superior a
                    qualquer momento, sem burocracia.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Quanto tempo demora para instalar a internet após contratar?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A instalação geralmente acontece em até 48 horas úteis após
                    a confirmação do cadastro. Em algumas regiões, o prazo pode
                    ser ainda menor.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como entro em contato com o suporte?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Você pode falar com a gente pelo WhatsApp, telefone ou redes
                    sociais. Nossa equipe está pronta para te atender!
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
