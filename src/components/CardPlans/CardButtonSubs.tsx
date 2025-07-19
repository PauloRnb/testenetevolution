import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardButtonSubsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function CardButtonSubs({ text, ...rest }: CardButtonSubsProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "flex items-center justify-center bg-orange-600 rounded h-8 text-white font-medium text-base hover:bg-orange-500 transition-colors duration-200",
        rest.className
      )}
    >
      {text}
    </button>
  );
}
