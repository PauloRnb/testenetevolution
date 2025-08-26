"use client";

import React from "react";

interface CardGradientBgProps {
  bgImageUrl: string;
  titleMain: string;
  descriptionTitle: string;
  linkText?: string;
  linkHref: string;
}

export function CardProducts({
  bgImageUrl,
  titleMain,
  descriptionTitle,
  linkText = "ASSINE AGORA",
  linkHref,
}: CardGradientBgProps) {
  return (
    <div className="h-[21.25rem] w-full select-none rounded-xl bg-zinc-100 p-3 shadow-sm dark:bg-zinc-900">
      <div className="relative h-full w-full overflow-hidden rounded-[0.375rem] bg-[#121418]">
        {/* Gradiente com blur por baixo */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(67,70,72,0.4)_0%,rgba(15,15,15,0.9)_70%,rgba(18,20,24,1)_100%)] blur-sm"></div>

        {/* Imagem de fundo */}
        <div
          className="relative z-10 h-full w-full bg-cover bg-center duration-500"
          style={{
            backgroundImage: `linear-gradient(
              rgba(67,70,72,0) 0%,
              rgba(15,15,15,1) 75%,
              rgba(18,20,24,1) 100%
            ), url('${bgImageUrl}')`,
          }}
        ></div>

        {/* Textos */}
        <div className="absolute top-[12.5rem] z-20 -translate-y-1/2 p-6 px-3 pb-0 pt-0 duration-500">
          <h2 className="mb-1 text-left text-xl font-semibold text-white">
            {titleMain}
          </h2>
          <p className="text-left text-sm font-medium text-white">
            {descriptionTitle}
          </p>
        </div>

        {/* Botão */}
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[16.5rem] z-20 ml-3 flex items-center justify-center rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
