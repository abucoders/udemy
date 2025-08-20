"use client";

import {
  BarChart2,
  Clock3,
  Infinity,
  Languages,
  MonitorPlay,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { GrCertificate } from "react-icons/gr";

import { Button } from "@/components/ui/button";

const Description = () => {
  const t = useTranslations();

  return (
    <div className="bg-secondary/50 font-spaceGrotesk rounded-md border p-4 shadow-lg lg:sticky lg:top-24 lg:p-6 dark:shadow-white/20">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold sm:text-2xl">$96.00</div>
        <div className="font-bold line-through max-sm:text-sm">$76.00</div>
      </div>

      <Button size={"lg"} className="mt-4 w-full font-bold">
        {t("CourseDetails.addToCart")}
      </Button>
      <Button size={"lg"} className="mt-2 w-full font-bold" variant={"outline"}>
        {t("CourseDetails.buyNow")}
      </Button>

      <p className="text-muted-foreground my-3 text-center text-xs sm:text-sm">
        {t("CourseDetails.guarantee")}
      </p>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <MonitorPlay className="size-5" />
          <span className="font-bold">{t("CourseDetails.lessons")}</span>
        </div>
        <p className="text-muted-foreground">90</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <Clock3 className="size-5" />
          <span className="font-bold">{t("CourseDetails.durations")}</span>
        </div>
        <p className="text-muted-foreground">21 {t("CourseDetails.hours")}</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <BarChart2 className="size-5" />
          <span className="font-bold">{t("CourseDetails.skillLevel")}</span>
        </div>
        <p className="text-muted-foreground">Beginner</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <Languages className="size-5" />
          <span className="font-bold">{t("CourseDetails.language")}</span>
        </div>
        <p className="text-muted-foreground">Uzbek</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <GrCertificate className="size-5" />
          <span className="font-bold">{t("CourseDetails.certificate")}</span>
        </div>
        <p className="text-muted-foreground">{t("CourseDetails.yes")}</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-b pb-2 text-sm md:text-base">
        <div className="font-spaceGrotesk flex items-center gap-2">
          <Infinity className="size-5" />
          <span className="font-bold">{t("CourseDetails.fullLifetime")}</span>
        </div>
        <p className="text-muted-foreground">{t("CourseDetails.yes")}</p>
      </div>
    </div>
  );
};

export default Description;
