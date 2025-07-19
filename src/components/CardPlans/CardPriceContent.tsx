interface CardPriceContentProps {
  text: string;
}

export function CardPriceContent({ text }: CardPriceContentProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs leading-3 text-zinc-600 font-medium">POR</span>
        <span className="text-xl leading-4 text-zinc-600 font-medium">R$</span>
      </div>
      <strong className="text-zinc-900 text-6xl leading-[45px] ml-1">
        {text}
      </strong>
      <div className="flex flex-col gap-1">
        <span className="text-2xl leading-5 text-zinc-900 font-medium">
          ,99*
        </span>
        <span className="text-sm leading-4 text-zinc-600 font-medium">
          /MÊS
        </span>
      </div>
    </div>
  );
}
