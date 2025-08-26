"use client";

import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { CircleArrowRight } from "lucide-react";

interface CardSelfServiceProps {
  icon: ReactNode;
  titleMain: string;
  descriptionTitle: string;
  link: string;
}

export function CardSelfService({
  icon,
  titleMain,
  descriptionTitle,
  link,
}: CardSelfServiceProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[14.063rem] w-full select-none flex-col justify-between rounded-xl bg-zinc-100 p-4 shadow-sm hover:bg-blue-700 dark:bg-zinc-900 dark:hover:bg-zinc-900 dark:hover:ring-2 dark:hover:ring-cyan-400"
    >
      {/* Ícone */}
      <div className="flex items-start">{icon}</div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold leading-4 text-zinc-800 group-hover:text-white dark:text-white sm:text-base">
            {titleMain}
          </h3>
          <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 group-hover:bg-white dark:bg-white" />
        </div>
        <p className="h-24 text-sm font-medium text-zinc-500 group-hover:text-zinc-100 dark:text-white">
          {descriptionTitle}
        </p>
      </div>

      {/* Ícone da seta */}
      <div className="flex justify-end">
        <CircleArrowRight
          width={24}
          strokeWidth={1.8}
          className="text-blue-700 group-hover:text-white dark:text-cyan-400"
        />
      </div>
    </a>
  );
}
