"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { learningJourney } from "@/constants";

function LearningJourney() {
  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-6xl py-24">
      <h1 className="font-spaceGrotesk text-center text-2xl font-bold">
        {t("Journey.title")}
      </h1>
      <p className="text-muted-foreground mx-auto max-w-4xl text-center text-sm">
        {t("Journey.description")}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {learningJourney.map((item) => (
          <div
            key={item.title}
            className="bg-secondary flex flex-col items-center justify-center rounded-md p-6 text-center"
          >
            <Image src={item.image} alt={item.title} width={70} height={70} />
            <h2 className="font-spaceGrotesk mt-2 line-clamp-1 text-lg font-bold">
              {t(`StartLearning.${item.title}`)}
            </h2>
            <p className="line-clamp-2 text-sm text-black/70 dark:text-white/70">
              {t(`StartLearning.${item.excerpt}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningJourney;
