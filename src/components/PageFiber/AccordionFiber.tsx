"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFiber() {
  return (
    <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1">
          <h2 className="text-left text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Duvidas frequentes
          </h2>
          <p className="text-left text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Ficou com alguma dúvida? A gente responde, confira algumas das
            dúvidas mais frequentes.
          </p>
        </header>

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é fibra óptica?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Fibra óptica é um tipo de cabo usado para transmitir dados
                    (internet, TV, telefone) por meio de fios muito finos de
                    vidro ou plástico, que conduzem a luz. Em vez de enviar
                    sinais elétricos, como nos cabos de cobre, a fibra óptica
                    usa pulsos de luz (emitidos por lasers ou LEDs) para
                    transportar as informações.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Oque é FTTH? Fiber To The Home — em português, (Fibra até a
                  casa.)
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    É um tipo de tecnologia de internet onde o cabo de fibra
                    óptica vai direto do provedor até dentro da sua casa ou
                    empresa, sem mudar para outros tipos de cabos no caminho.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que faz a fibra óptica ser diferente de outras tecnologias?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A fibra óptica se diferencia das outras tecnologias de
                    internet, como cabo coaxial, ADSL ou rádio, por transmitir
                    dados através de pulsos de luz em fios de vidro ou plástico,
                    garantindo altíssima velocidade, estabilidade e baixa
                    latência. Enquanto cabos de cobre e conexões via rádio
                    sofrem com perda de sinal, interferências e quedas de
                    desempenho conforme a distância, a fibra mantém a velocidade
                    contratada mesmo a quilômetros da central, oferecendo uma
                    conexão mais confiável, ideal para streaming, jogos online e
                    videoconferências sem travamentos.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é download e upload?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Download é o processo de receber dados da internet para o
                    seu dispositivo, como ao assistir vídeos, baixar aplicativos
                    ou abrir páginas. Upload é o envio de dados do seu
                    dispositivo para a internet, como postar fotos, enviar
                    arquivos ou participar de videochamadas. Ambos são medidos
                    em Megabits por segundo (Mbps) e determinam a rapidez com
                    que você recebe e envia informações. Em conexões de fibra
                    óptica FTTH, é comum que as velocidades de download e upload
                    sejam iguais, garantindo desempenho estável e eficiente.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Qual a diferência entre download e upload?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A diferença entre download e upload está na direção em que
                    os dados trafegam: o download é quando as informações vêm da
                    internet para o seu dispositivo, como ao assistir a filmes,
                    baixar arquivos ou abrir sites, enquanto o upload é quando
                    os dados saem do seu dispositivo para a internet, como ao
                    enviar fotos, vídeos ou participar de videochamadas. Em
                    muitos tipos de conexão, o download é mais rápido que o
                    upload, mas na fibra óptica FTTH as velocidades costumam ser
                    iguais, oferecendo mais equilíbrio e desempenho.
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
