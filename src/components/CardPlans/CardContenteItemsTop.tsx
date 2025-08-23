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
            "text-left text-3xl font-bold leading-[28px] tracking-tight text-white",
            rest.className,
          )}
        >
          {text}
        </p>
        <p
          {...rest}
          className={twMerge(
            "mb-1 text-left text-xs font-medium leading-[14px] text-white",
            rest.className,
          )}
        >
          100% FIBRA ÓPTICA
        </p>
      </div>
      <Separator className="h-[2px] w-10 rounded-full bg-white" />
    </div>
  );
}
