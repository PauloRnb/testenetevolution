import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { EthernetPort } from "lucide-react";

export function CardInforRede({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="mt-1 flex flex-col gap-[2px]">
      <div
        {...rest}
        className={twMerge(
          "flex h-6 w-6 items-center justify-center rounded bg-orange-600",
          className,
        )}
      >
        <EthernetPort size={16} className="text-white" />
      </div>
      <div>
        <h3 className="mt-[2px] text-left text-base font-semibold leading-4 text-zinc-800 dark:text-white">
          Infraestrutura de Rede
        </h3>
        <p className="mt-1 w-[270px] text-left text-xs leading-[14px] text-zinc-600 dark:text-zinc-200">
          Cabeamos todos os dispositivos que necessitam de uma conexão cabeada.
        </p>
      </div>
    </div>
  );
}
