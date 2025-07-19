import {
  CirclePercent,
  Headset,
  Wifi,
  CloudDownload,
  CloudUpload,
} from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function CardList({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <ul className="grid grid-cols-1 gap-y-1">
      {[
        {
          icon: (
            <CirclePercent
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600"
            />
          ),
          label: "Instalação Grátis",
        },
        {
          icon: (
            <Headset size={14} strokeWidth={1.8} className="text-zinc-600" />
          ),
          label: "Suporte Online 24H",
        },
        {
          icon: <Wifi size={14} strokeWidth={1.8} className="text-zinc-600" />,
          label: "Wi-Fi de Alta Performance",
        },
        {
          icon: (
            <CloudDownload
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600"
            />
          ),
          label: "Download 500Mbps",
        },
        {
          icon: (
            <CloudUpload
              size={14}
              strokeWidth={1.8}
              className="text-zinc-600"
            />
          ),
          label: "Upload 250Mbps",
        },
      ].map(({ icon, label }, index) => (
        <li key={index} className="flex items-center gap-1">
          <div
            {...rest}
            className={twMerge(
              "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
              className
            )}
          ></div>
          <div className="flex items-center gap-[2px]">
            {icon}
            <span className="text-sm text-zinc-600">{label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
