import Image from "next/image";

interface BannerCardProps {
  imageBanner: string;
  altImage: string;
  imageCardBanner: string;
  altImageCardBanner: string;
  descriptionTtitle: string;
}

export function CardBannersStreaming({
  imageBanner,
  altImage,
  imageCardBanner,
  altImageCardBanner,
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
          loading="lazy"
        />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_20%,rgba(0,0,0,0.7)_60%,transparent_100%)]"></div>

        {/* Textos */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-12 text-white">
          <Image
            src={imageCardBanner}
            alt={altImageCardBanner}
            width={150}
            height={67}
            className="select-none"
            loading="lazy"
          />
          <p className="mt-2 h-[3rem] text-base font-medium md:h-[6.25rem] 32md:h-[4.688rem] xl:h-[3.75rem]">
            {descriptionTtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
