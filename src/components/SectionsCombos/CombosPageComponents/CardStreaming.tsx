"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CardStreamingProps {
  imageStreaming: StaticImageData | string;
  altImageStraming: string;
  titleMain: string;
  descriptionTitle: string;
  linkStreaming: string;
  linkText?: string;
  bgImageDiv?: string; // nova prop para bg da div da imagem
}

export function CardStreaming({
  imageStreaming,
  altImageStraming,
  titleMain,
  descriptionTitle,
  linkStreaming,
  linkText = "SABER MAIS",
  bgImageDiv = "bg-zinc-900 dark:bg-zinc-800", // valor padrão
}: CardStreamingProps) {
  return (
    <div className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900">
      <div
        className={`flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] ${bgImageDiv}`}
      >
        <Image
          src={imageStreaming}
          alt={altImageStraming}
          width={245}
          height={42}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {titleMain}
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          {descriptionTitle}
        </p>
      </div>
      <Link
        href={linkStreaming}
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        {linkText}
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
