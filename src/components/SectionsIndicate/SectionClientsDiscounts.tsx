import { TitlePages } from "../TitlePages/TitlesPages";

export function SectionClientsDiscounts() {
  return (
    <>
      <section className="bg-white pb-12 pt-24 dark:bg-zinc-800">
        <div className="container flex flex-col px-5 md:flex-row md:items-center xl:px-0">
          <TitlePages
            titleMain="Indicou? Instalou, ganhou 50% de desconto"
            descriptionTitle="Indique um amigo! Chame seu vizinho para ser nosso cliente e aproveite: quanto mais amigos você indicar, maior será o seu desconto."
            align="left"
          />

          <div className="container pt-16 md:pt-0">
            
          </div>
        </div>
      </section>
    </>
  );
}
