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
    <section id="section-offer-home" className="py-24 bg-white">
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
                className="w-full flex flex-col items-start p-4 justify-between border border-zinc-400 rounded-xl select-none"
              >
                <div className="flex flex-col gap-y-4 w-full">
                  <div className="flex flex-col">
                    <div className="w-[2.25rem] h-[2.25rem] flex items-center justify-center bg-blue-700 rounded text-white">
                      {icon}
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <h3 className="text-zinc-800 font-semibold text-xl leading-5">
                        {title}
                      </h3>
                      <Separator className="!w-10 !h-[2px] bg-blue-700 rounded-full" />
                    </div>
                  </div>
                  <p className="text-zinc-500 font-medium leading-5 h-[50px]">
                    {description}
                  </p>
                  <Link
                    href={link}
                    prefetch
                    className="flex items-center justify-center bg-blue-700 rounded h-8 text-white font-medium text-base hover:bg-blue-500 transition-colors duration-200 gap-2"
                  >
                    Saber Mais
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
