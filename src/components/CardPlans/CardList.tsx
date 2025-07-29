import {
  CirclePercent,
  Headset,
  Wifi,
  CloudDownload,
  CloudUpload,
} from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  textTwo: string;
}

export function CardList({ className, text, textTwo, ...rest }: CardListProps) {
  return (
    <ul className="grid grid-cols-1 gap-y-1">
      {[
        {
          icon: (
            <CirclePercent
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600 dark:text-white"
            />
          ),
          label: "Instalação Grátis",
        },
        {
          icon: (
            <Headset
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600 dark:text-white"
            />
          ),
          label: "Suporte Online 24H",
        },
        {
          icon: (
            <Wifi
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600 dark:text-white"
            />
          ),
          label: "Wi-Fi de Alta Performance",
        },
        {
          icon: (
            <CloudDownload
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600 dark:text-white"
            />
          ),
          label: text, // Agora funciona como string vinda via props
        },
        {
          icon: (
            <CloudUpload
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600 dark:text-white"
            />
          ),
          label: textTwo, // Também via props
        },
      ].map(({ icon, label }, index) => (
        <li key={index} className="flex items-center gap-1">
          <div
            {...rest}
            className={twMerge(
              "h-[14px] w-[2px] shrink-0 rounded-full bg-orange-600",
              className,
            )}
          ></div>
          <div className="flex items-center gap-[2px]">
            {icon}
            <span className="text-sm text-zinc-600 dark:text-white">
              {label}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
