"use client";

interface TitlePagesProps {
  titleMain: string;
  descriptionTitle: string;
  align?: "left" | "center" | "right";
}

export function TitlePages({
  titleMain,
  descriptionTitle,
  align = "left",
}: TitlePagesProps) {
  const alignText =
    align === "center"
      ? "text-center items-center"
      : align === "right"
        ? "text-right items-end"
        : "text-left";

  return (
    <header className={`flex max-w-4xl flex-col gap-y-1 ${alignText}`}>
      <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
        {titleMain}
      </h2>
      <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
        {descriptionTitle}
      </p>
    </header>
  );
}
