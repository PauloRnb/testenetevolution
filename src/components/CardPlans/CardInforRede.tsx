import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { EthernetPort } from "lucide-react";

export function CardInforRede({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col gap-[2px] mt-1">
      <div
        {...rest}
        className={twMerge(
          "w-6 h-6 bg-orange-600 rounded flex items-center justify-center",
          className
        )}
      >
        <EthernetPort size={16} className="text-white" />
      </div>
      <div>
        <h3 className="text-zinc-800 font-semibold text-base leading-4 mt-[2px] dark:text-white">
          Infraestrutura de Rede
        </h3>
        <p className="text-xs leading-[14px] mt-1 text-zinc-600 dark:text-zinc-200">
          Cabeamos todos os dispositivos que necessitam de uma conexão cabeada.
        </p>
      </div>
    </div>
  );
}
