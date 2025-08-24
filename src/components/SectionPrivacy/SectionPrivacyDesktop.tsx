"use client";

import React, { useEffect, useState } from "react";
import { TitlePages } from "../TitlePages/TitlesPages";
import { Separator } from "../ui/separator";

export function SectionPrivacyDesktop() {
  const sections = [
    "privacy-policy",
    "information-gathering",
    "use-of-cookies",
    "external-links",
    "website-security",
    "change-in-this-policy",
    "our-contact",
  ];

  const [activeId, setActiveId] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // ajuste conforme seu header
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveId(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80; // altura do header sticky
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth",
    });
    setActiveId(id);
  };

  return (
    <>
      <section className="hidden bg-zinc-100 py-24 dark:bg-zinc-900 md:block">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Central de Privacidade"
            descriptionTitle="Nossa Central de Privacidade explica de forma simples e transparente que o site da NetEvolution não coleta informações pessoais, oferecendo segurança e confiança aos visitantes."
            align="left"
          />
          <div className="container pt-16">
            <div className="flex gap-6">
              <div>
                <aside className="sticky top-20 w-72 bg-white dark:bg-zinc-800">
                  <nav>
                    <ul className="flex flex-col">
                      <li
                        className={`group rounded-t-lg transition-colors duration-150 ${
                          activeId === "privacy-policy"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("privacy-policy")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Política de Privacidade
                          <span>1</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group transition-colors duration-150 ${
                          activeId === "information-gathering"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("information-gathering")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Coleta de Informações
                          <span>2</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group transition-colors duration-150 ${
                          activeId === "use-of-cookies"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("use-of-cookies")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Uso de Cookies
                          <span>3</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group transition-colors duration-150 ${
                          activeId === "external-links"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("external-links")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Links Externos
                          <span>4</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group transition-colors duration-150 ${
                          activeId === "website-security"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("website-security")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Segurança do Site
                          <span>5</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group transition-colors duration-150 ${
                          activeId === "change-in-this-policy"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("change-in-this-policy")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Alteração Nesta Política
                          <span>6</span>
                        </a>
                      </li>
                      <Separator className="bg-zinc-200 dark:bg-white" />
                      <li
                        className={`group rounded-b-lg transition-colors duration-150 ${
                          activeId === "our-contact"
                            ? "bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-900"
                            : "bg-white hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-cyan-400"
                        }`}
                      >
                        <a
                          onClick={() => handleClick("our-contact")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium group-hover:text-white dark:group-hover:text-zinc-800"
                        >
                          Nosso Contato
                          <span>7</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
              </div>
              <section className="flex flex-col gap-6 lg:gap-10">
                {/* TODOS OS SEUS ARTICLES ORIGINAIS */}
                <article
                  id="privacy-policy"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    1. Política de Privacidade
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      A sua privacidade é importante para nós. Esta Política de
                      Privacidade explica como coletamos, usamos e protegemos as
                      informações pessoais dos usuários que acessam nosso site e
                      utilizam nossos serviços.
                    </p>
                  </div>
                </article>

                <article
                  id="information-gathering"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    2. Coleta de Informações
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      Nosso site não utiliza formulários e não armazena dados de
                      visitantes. O contato é feito exclusivamente através de
                      links externos, como: WhatsApp | Para atendimento e
                      suporte. SGP | Central do Assinante, para acesso de
                      clientes já cadastrados. Fast.com | Para teste de
                      velocidade da internet. Qualquer dado eventualmente
                      solicitado em plataformas externas segue a Política de
                      Privacidade própria de cada serviço.
                    </p>
                  </div>
                </article>

                <article
                  id="use-of-cookies"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    3. Uso de Cookies
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      Nosso site não utiliza cookies para rastrear ou
                      identificar usuários.
                    </p>
                  </div>
                </article>

                <article
                  id="external-links"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    4. Links Externos
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      Ao clicar em links externos (como WhatsApp, SGP ou
                      Fast.com), você será direcionado para sites de terceiros,
                      que possuem suas próprias políticas de privacidade e
                      segurança. Recomendamos que leia as políticas de cada
                      plataforma para entender como seus dados são tratados.
                    </p>
                  </div>
                </article>

                <article
                  id="website-security"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    5. Segurança do Site
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      Como não coletamos nem armazenamos informações pessoais em
                      nosso site, não existe risco de exposição ou
                      compartilhamento de dados por meio desta página.
                    </p>
                  </div>
                </article>

                <article
                  id="change-in-this-policy"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    6. Alterações nesta Política
                  </h3>
                  <div>
                    <p className="mt-6 text-base text-zinc-600 dark:text-white">
                      Podemos atualizar esta Política de Privacidade para
                      refletir mudanças em nossos serviços. Sempre que isso
                      ocorrer, a nova versão será publicada nesta página.
                    </p>
                  </div>
                </article>

                <article
                  id="our-contact"
                  className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
                >
                  <h3 className="text-2xl font-medium dark:text-white md:mb-8">
                    7. Nosso Contato
                  </h3>
                  <div className="mt-6">
                    <div>
                      <p className="text-base text-zinc-600 dark:text-white">
                        Se tiver dúvidas sobre esta Política de Privacidade,
                        entre em contato pelos nossos canais de atendimento
                        oficiais:
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        <span className="font-medium text-zinc-600 dark:text-white">
                          E-mail:{" "}
                          <a
                            className="font-medium text-zinc-900 dark:text-cyan-400"
                            href="mailto:evolutionnet221@gmail.com"
                          >
                            evolutionnet221@gmail.com
                          </a>
                        </span>
                        <span className="font-medium text-zinc-600 dark:text-white">
                          WhatsApp:{" "}
                          <a
                            className="font-medium text-zinc-900 dark:text-cyan-400"
                            href="https://wa.me/5585997362750?text=Olá, estou com dúvidas sobre a Política de Privacidade."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            (85) 9 9736-2750
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
