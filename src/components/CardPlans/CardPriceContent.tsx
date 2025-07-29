interface CardPriceContentProps {
  text: string;
}

export function CardPriceContent({ text }: CardPriceContentProps) {
  return (
    <div className="ml-[15px] flex items-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium leading-3 text-zinc-600 dark:text-zinc-300">
          POR
        </span>
        <span className="text-xl font-medium leading-4 text-zinc-600 dark:text-zinc-300">
          R$
        </span>
      </div>
      <strong className="ml-1 text-6xl leading-[45px] text-zinc-900 dark:text-white">
        {text}
      </strong>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium leading-5 text-zinc-900 dark:text-white">
          ,99*
        </span>
        <span className="text-sm font-medium leading-4 text-zinc-600 dark:text-zinc-300">
          /MÊS
        </span>
      </div>
    </div>
  );
}
