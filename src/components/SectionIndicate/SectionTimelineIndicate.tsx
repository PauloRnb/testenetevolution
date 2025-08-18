import { TitlePages } from "../TitlePages/TitlesPages";
import { CardContentTimeline } from "./IndicatePageComponents/CardContentTimeline";

export function SectionTimelineIndicate() {
  return (
    <section className="bg-white pb-24 pt-12 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Como ganhar o desconto"
          descriptionTitle="Siga o passo a passo para garantir seu desconto: indique seus amigos, aguarde a aprovação da indicação e aproveite os benefícios exclusivos em seu plano de internet. É rápido, simples e vantajoso!"
          align="left"
        />

        <div className="container pt-16">
          <div className="sticky top-0 z-10">
            <h2 className="text-3xl font-bold tracking-widest text-zinc-900 dark:text-white md:text-4xl">
              PASSO A PASSO
            </h2>
          </div>
          {/* Timeline */}
          <div className="mt-5 space-y-14 border-l-4 border-zinc-200 py-16">
            {/* 01 */}
            <CardContentTimeline
              subTitle="ENTRE EM CONTATO"
              titleMain="PASSO 01"
              descriptionTitle="Entre em contato conosco através do nosso canal oficial no
                  WhatsApp e nos informe, de forma simples e rápida, que você
                  deseja participar do programa de indicações, para que possamos
                  registrar sua participação corretamente."
            />
            {/* 02 */}
            <CardContentTimeline
              subTitle="FORNEÇA SEUS DADOS"
              titleMain="PASSO 02"
              descriptionTitle="Em poucos instantes, vamos solicitar alguns dados simples seus
                  e do amigo que você indicou, de forma rápida e prática, para
                  que possamos registrar a indicação e garantir que você
                  aproveite todos os benefícios do programa."
            />
            {/* 03 */}
            <CardContentTimeline
              subTitle="CONFIRMAÇÃO"
              titleMain="PASSO 03"
              descriptionTitle="Após o seu amigo assinar um de nossos planos, tanto
                  você quanto ele receberão um bônus de 50% de desconto na
                  próxima mensalidade, tornando sua experiência ainda mais
                  vantajosa e recompensadora."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
