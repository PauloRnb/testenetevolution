import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardButtonSubsCombosProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export function CardButtonSubsCombos({
  text,
  ...rest
}: CardButtonSubsCombosProps) {
  return (
    <a
      href="https://wa.me/5585997362750?text=Olá, gostaria de saber sobre os planos com combos."
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className={twMerge(
        "flex items-center justify-center bg-orange-600 rounded h-8 text-white font-medium text-base hover:bg-orange-500 transition-colors duration-200",
        rest.className
      )}
    >
      {text}
    </a>
  );
}
