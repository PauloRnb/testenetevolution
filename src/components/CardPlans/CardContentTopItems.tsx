import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardContentTopItems extends HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export function CardContentTopItems({ text, ...rest }: CardContentTopItems) {
  return (
    <div className="w-[6.563rem] h-4 bg-white rounded-full flex items-center justify-center">
      <span
        {...rest}
        className={twMerge(
          "text-xs font-medium text-orange-600",
          rest.className
        )}
      >
        {text}
      </span>
    </div>
  );
}
