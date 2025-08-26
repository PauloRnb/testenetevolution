"use client";

interface CardContentInforPrivacyProps {
  textId: string;
  textMainCard: string;
  textDescriptionCard: string;
  emailText?: string;
  emailAdress?: string;
  emailLink?: string;
  whatsAppText?: string;
  whatsAppLink?: string;
  whatsAppNumber?: string;
}

export function CardContentInforPrivacy({
  textId,
  textMainCard,
  textDescriptionCard,
  emailText,
  emailAdress,
  emailLink,
  whatsAppText,
  whatsAppLink,
  whatsAppNumber,
}: CardContentInforPrivacyProps) {
  return (
    <>
      <article
        id={textId}
        className="w-full scroll-mt-24 rounded-lg border border-blue-700 bg-white p-12 dark:border-white dark:bg-zinc-800"
      >
        <h3 className="text-2xl font-medium dark:text-white md:mb-8">
          {textMainCard}
        </h3>
        <div className="mt-6">
          <div>
            <p className="text-base text-zinc-600 dark:text-white">
              {textDescriptionCard}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <span className="font-medium text-zinc-600 dark:text-white">
                {emailText}
                <a
                  className="font-medium text-zinc-900 dark:text-cyan-400"
                  href={emailLink}
                >
                  {emailAdress}
                </a>
              </span>
              <span className="font-medium text-zinc-600 dark:text-white">
                {whatsAppText}
                <a
                  className="font-medium text-zinc-900 dark:text-cyan-400"
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsAppNumber}
                </a>
              </span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
