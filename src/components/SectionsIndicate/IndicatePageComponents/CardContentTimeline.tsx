interface CardContentTimelineProps {
  titleMain: string;
  subTitle: string;
  descriptionTitle: string;
}

export function CardContentTimeline({
  titleMain,
  subTitle,
  descriptionTitle,
}: CardContentTimelineProps) {
  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute -left-3.5 top-5 h-6 w-6">
        {/* Pulse atrás */}
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-50 dark:bg-cyan-400"></div>
        {/* Dot frente */}
        <div className="absolute inset-0 rounded-full border-4 border-zinc-100 bg-blue-700 dark:border-zinc-800 dark:bg-cyan-400"></div>
      </div>

      <div className="pl-10">
        {/* Timeline-Date */}
        <span className="text-xs font-bold tracking-widest text-zinc-600 dark:text-zinc-200">
          {subTitle}
        </span>
        <h3 className="text-xl font-semibold text-blue-700 dark:text-cyan-400">
          {titleMain}
        </h3>
        <p className="mt-3 font-medium text-zinc-600 dark:text-zinc-200">
          {descriptionTitle}
        </p>
      </div>
    </div>
  );
}
