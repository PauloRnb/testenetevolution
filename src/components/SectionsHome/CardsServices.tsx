import { Router, ChevronRight, Combine, Airplay } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const services = [
  {
    icon: <Router size={24} strokeWidth={1.8} />,
    title: "Internet",
    description: "Internet 100% fibra óptica, com ultra velocidade.",
    link: "/Internet",
  },
  {
    icon: <Combine size={24} strokeWidth={1.8} />,
    title: "Combos",
    description: "Monte seu combo rápido, simples e fácil.",
    link: "/Combos",
  },
  {
    icon: <Airplay size={24} strokeWidth={1.8} />,
    title: "Streaming",
    description: "Curta seus filmes, séries e futebol 24h.",
    link: "/Streaming",
  },
];

export function CardsServices() {
  return (
    <section
      id="section-offer-home"
      className="py-24 bg-white dark:bg-zinc-800"
    >
      <div className="container px-5 xl:px-0">
        <header className="flex flex-col gap-y-1 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-700 dark:text-white text-left">
            Confira nossos serviços
          </h2>
          <p className="font-medium text-base md:text-xl lg:text-2xl text-zinc-500 leading-4 dark:text-zinc-300 text-left">
            Oferecemos serviços de internet fibra, apps de streaming e uma
            variedade de serviços, levando qualidade para sua residência.
          </p>
        </header>

        <div className="container pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6">
            {services.map(({ icon, title, description, link }) => (
              <div
                key={title}
                className="shadow-sm border group relative h-[14rem] w-full overflow-hidden rounded-xl transition-all duration-700 dark:border-solid bg-zinc-100 lg:shadow-none lg:hover:shadow-sm dark:bg-zinc-900 dark:border-white"
              >
                <div className="flex flex-col gap-y-4 w-full p-4">
                  <div className="flex flex-col">
                    <div className="w-[2.25rem] h-[2.25rem] flex items-center justify-center bg-blue-700 rounded text-white dark:bg-white dark:text-zinc-800">
                      {icon}
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <h3 className="text-zinc-800 font-semibold text-xl leading-5 dark:text-white">
                        {title}
                      </h3>
                      <Separator className="!w-10 !h-[2px] bg-blue-700 rounded-full dark:bg-white" />
                    </div>
                  </div>
                  <p className="text-zinc-500 font-medium leading-5 h-[50px] dark:text-zinc-200">
                    {description}
                  </p>
                </div>
                <Link
                  href={link}
                  prefetch
                  className="w-full absolute bottom-0 flex items-center justify-center bg-blue-700 rounded-b-xl h-14 text-white font-medium text-base hover:bg-blue-500 gap-2 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 transition-colors duration-200"
                >
                  Saber Mais
                  <ChevronRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
