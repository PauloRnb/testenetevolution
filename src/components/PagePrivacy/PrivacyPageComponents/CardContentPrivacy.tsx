import { Separator } from "@/components/ui/separator";

interface CardContentPrivacyProps {
  titleMain: string;
  descriptionTitle: string;
}
export function CardContentPrivacy({
  titleMain,
  descriptionTitle,
}: CardContentPrivacyProps) {
  return (
    <div className="flex w-full flex-col rounded-xl border border-blue-700 bg-white p-7 dark:border-cyan-400 dark:bg-zinc-800">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          {titleMain}
        </h2>
        <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
      </div>
      <p className="mt-3 text-lg font-medium text-zinc-600 dark:text-zinc-300">
        {descriptionTitle}
      </p>
    </div>
  );
}
