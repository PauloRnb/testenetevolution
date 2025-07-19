import { HTMLAttributes } from "react";
import { Separator } from "../ui/separator";
import { twMerge } from "tailwind-merge";

interface CardContentItemsTopProps
  extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export function CardContentItemsTop({
  text,
  ...rest
}: CardContentItemsTopProps) {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex flex-col">
        <p
          {...rest}
          className={twMerge(
            "text-3xl leading-[28px] text-white font-bold tracking-tight",
            rest.className
          )}
        >
          {text}
        </p>
        <p
          {...rest}
          className={twMerge(
            "text-xs leading-[14px] text-white font-medium mb-1",
            rest.className
          )}
        >
          100% FIBRA ÓPTICA
        </p>
      </div>
      <Separator className="w-10 h-[2px] bg-white rounded-full" />
    </div>
  );
}
