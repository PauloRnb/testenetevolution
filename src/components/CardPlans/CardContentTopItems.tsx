import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardContentTopItems extends HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export function CardContentTopItems({ text, ...rest }: CardContentTopItems) {
  return (
    <div className="flex h-4 w-[6.563rem] items-center justify-center rounded-full bg-white">
      <span
        {...rest}
        className={twMerge(
          "text-xs font-medium text-orange-600",
          rest.className,
        )}
      >
        {text}
      </span>
    </div>
  );
}
