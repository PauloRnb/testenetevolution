import Image from "next/image";

interface BannerCardProps {
  imageBanner: string;
  altImage: string;
  titleMain: string;
  descriptionTtitle: string;
}

export function CardBannersStreaming({
  imageBanner,
  altImage,
  titleMain,
  descriptionTtitle,
}: BannerCardProps) {
  return (
    <div className="relative flex h-[460px] w-full flex-col gap-7 overflow-hidden rounded-xl shadow-sm">
      <div className="relative h-full w-full">
        <Image
          src={imageBanner}
          alt={altImage}
          fill
          className="w-full select-none bg-center object-cover"
          priority
        />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9)_40%,transparent_100%)]"></div>

        {/* Textos */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-12 text-white">
          <h3 className="text-2xl font-semibold">{titleMain}</h3>
          <p className="mt-2 h-[3rem] text-base font-medium md:h-[6.25rem] 32md:h-[4.688rem] xl:h-[3.75rem]">
            {descriptionTtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
