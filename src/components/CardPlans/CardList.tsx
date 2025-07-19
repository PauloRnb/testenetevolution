import {
  CirclePercent,
  Headset,
  Wifi,
  CloudDownload,
  CloudUpload,
} from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardListProps extends HTMLAttributes<HTMLDivElement> {}

export function CardList({ ...rest }: CardListProps) {
  return (
    <ul className="grid grid-cols-1 gap-y-1">
      <li className="flex items-center gap-1">
        <div
          {...rest}
          className={twMerge(
            "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
            rest.className
          )}
        ></div>
        <div className="flex items-center gap-[2px]">
          <CirclePercent
            size={14}
            strokeWidth={1.8}
            className="text-zinc-600"
          />
          <span className="text-sm text-zinc-600">Instalação Grátis</span>
        </div>
      </li>
      <li className="flex items-center gap-1">
        <div
          {...rest}
          className={twMerge(
            "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
            rest.className
          )}
        ></div>
        <div className="flex items-center gap-[2px]">
          <Headset size={14} strokeWidth={1.8} className="text-zinc-600" />
          <span className="text-sm text-zinc-600">Suporte Online 24H</span>
        </div>
      </li>
      <li className="flex items-center gap-1">
        <div
          {...rest}
          className={twMerge(
            "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
            rest.className
          )}
        ></div>
        <div className="flex items-center gap-[2px]">
          <Wifi size={14} strokeWidth={1.8} className="text-zinc-600" />
          <span className="text-sm text-zinc-600">
            Wi-Fi de Alta Performance
          </span>
        </div>
      </li>
      <li className="flex items-center gap-1">
        <div
          {...rest}
          className={twMerge(
            "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
            rest.className
          )}
        ></div>
        <div className="flex items-center gap-[2px]">
          <CloudDownload
            size={14}
            strokeWidth={1.8}
            className="text-zinc-600"
          />
          <span className="text-sm text-zinc-600">Download 500Mbps</span>
        </div>
      </li>
      <li className="flex items-center gap-1">
        <div
          {...rest}
          className={twMerge(
            "w-[2px] h-[14px] bg-orange-600 rounded-full shrink-0",
            rest.className
          )}
        ></div>
        <div className="flex items-center gap-[2px]">
          <CloudUpload size={14} strokeWidth={1.8} className="text-zinc-600" />
          <span className="text-sm text-zinc-600">Upload 250Mbps</span>
        </div>
      </li>
    </ul>
  );
}
