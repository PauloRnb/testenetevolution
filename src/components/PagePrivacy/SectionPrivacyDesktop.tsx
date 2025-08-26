"use client";

import React, { useEffect, useState } from "react";
import { TitlePages } from "../TitlePages/TitlesPages";
import { Separator } from "../ui/separator";
import { CardContentInforPrivacy } from "./PrivacyPageComponents/CardContentInforPrivacy";

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
                          href="#privacy-policy"
                          onClick={() => handleClick("privacy-policy")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#information-gathering"
                          onClick={() => handleClick("information-gathering")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#use-of-cookies"
                          onClick={() => handleClick("use-of-cookies")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#external-links"
                          onClick={() => handleClick("external-links")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#website-security"
                          onClick={() => handleClick("website-security")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#change-in-this-policy"
                          onClick={() => handleClick("change-in-this-policy")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                          href="#our-contact"
                          onClick={() => handleClick("our-contact")}
                          className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:text-white dark:focus-visible:ring-cyan-400 dark:group-hover:text-zinc-800"
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
                <CardContentInforPrivacy
                  textId="privacy-policy"
                  textMainCard="1. Política de Privacidade"
                  textDescriptionCard="A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações pessoais dos usuários que acessam nosso site e utilizam nossos serviços."
                />

                <CardContentInforPrivacy
                  textId="information-gathering"
                  textMainCard="2. Coleta de Informações"
                  textDescriptionCard="Nosso site não utiliza formulários e não armazena dados de visitantes. O contato é feito exclusivamente através de links externos, como: WhatsApp | Para atendimento e suporte. SGP | Central do Assinante, para acesso de clientes já cadastrados. Fast.com | Para teste de velocidade da internet. Qualquer dado eventualmente solicitado em plataformas externas segue a Política de Privacidade própria de cada serviço."
                />

                <CardContentInforPrivacy
                  textId="use-of-cookies"
                  textMainCard="3. Uso de Cookies"
                  textDescriptionCard="Nosso site não utiliza cookies para rastrear ou identificar usuários."
                />

                <CardContentInforPrivacy
                  textId="external-links"
                  textMainCard="4. Links Externos"
                  textDescriptionCard="Ao clicar em links externos como:(WhatsApp, SGP ou Fast.com), você será direcionado para sites de terceiros, que possuem suas próprias políticas de privacidade e segurança. Recomendamos que leia as políticas de cada plataforma para entender como seus dados são tratados."
                />

                <CardContentInforPrivacy
                  textId="website-security"
                  textMainCard="5. Segurança do Site"
                  textDescriptionCard="Como não coletamos nem armazenamos informações pessoais em nosso site, não existe risco de exposição ou compartilhamento de dados por meio desta página."
                />

                <CardContentInforPrivacy
                  textId="change-in-this-policy"
                  textMainCard="6. Alterações nesta Política"
                  textDescriptionCard="Podemos atualizar esta Política de Privacidade para refletir mudanças em nossos serviços. Sempre que isso ocorrer, a nova versão será publicada nesta página."
                />

                <CardContentInforPrivacy
                  textId="our-contact"
                  textMainCard="7. Nosso Contato"
                  textDescriptionCard="Se tiver dúvidas sobre esta Política de Privacidade, entre em contato pelos nossos canais de atendimento oficiais:"
                  emailText="E-mail: "
                  emailLink="mailto:evolutionnet221@gmail.com"
                  emailAdress="evolutionnet221@gmail.com"
                  whatsAppText="WhatsApp: "
                  whatsAppLink="https://wa.me/5585997362750?text=Olá, estou com dúvidas sobre a Política de Privacidade."
                  whatsAppNumber="(85) 9 9736-2750"
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
