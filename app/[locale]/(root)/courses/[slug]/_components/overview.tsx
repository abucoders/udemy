"use client";

import {
  BadgeCheck,
  CalendarRange,
  Dot,
  ListOrdered,
  MonitorPlay,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

import ReviewCard from "@/components/cards/review-card";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Overview = () => {
  const t = useTranslations();

  return (
    <>
      <div className="from-background to-secondary mt-6 rounded-md bg-gradient-to-t p-4 lg:p-6">
        <h2 className="font-spaceGrotesk text-2xl font-bold sm:text-3xl">
          {t("CourseDetails.whatYouWillLearn")}
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {learn.split(", ").map((item) => (
            <div
              className="flex items-center gap-2 text-sm sm:text-base"
              key={item}
            >
              <BadgeCheck className="text-primary size-4 sm:size-5" />
              <p className="flex-1">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="from-background to-secondary mt-8 rounded-md bg-gradient-to-b p-4 lg:p-6">
        <h2 className="font-spaceGrotesk text-2xl font-bold sm:text-3xl">
          {t("CourseDetails.courseContent")}
        </h2>

        <div className="mt-2 flex flex-row flex-wrap gap-8">
          <div className="flex flex-col">
            <ListOrdered className="size-10" />
            <p className="font-spaceGrotesk text-base font-bold md:text-xl">
              {t("CourseDetails.numberOfModules")}
            </p>
            <div className="text-xl font-medium sm:text-2xl">4</div>
          </div>

          <div className="flex flex-col">
            <MonitorPlay className="size-10" />
            <p className="font-spaceGrotesk text-base font-bold md:text-xl">
              {t("CourseDetails.numberOfLessons")}
            </p>
            <div className="text-xl font-medium sm:text-2xl">90</div>
          </div>

          <div className="flex flex-col">
            <CalendarRange className="size-10" />
            <p className="font-spaceGrotesk text-base font-bold md:text-xl">
              {t("CourseDetails.courseDuration")}
            </p>
            <div className="text-xl font-medium sm:text-2xl">
              20 {t("CourseDetails.hours")} 40 {t("CourseDetails.minutes")}
            </div>
          </div>
        </div>

        <Separator className="my-3" />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-primary rounded-md p-2 py-3 text-sm">
              1-Modul
            </AccordionTrigger>
            <AccordionContent className="bg-primary-foreground rounded-md p-2 text-xs">
              Hali modul yoq.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-secondary mt-8 rounded-md p-4 lg:p-6">
        <h2 className="font-spaceGrotesk text-2xl font-bold md:text-3xl">
          {t("CourseDetails.courseForWhom")}
        </h2>

        <div className="mt-2">
          {forWhom.split(", ").map((item) => (
            <div
              className="mt-1 flex items-center text-sm sm:text-base"
              key={item}
            >
              <Dot />
              <p className="flex-1 text-slate-400">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8 pb-20">
        <div className="font-spaceGrotesk mt-6 flex items-center gap-1 sm:text-xl">
          <Star className="fill-[#DD6B20] text-[#DD6B20]" />
          <div className="font-medium">
            {t("CourseDetails.reviewCourse")}:{" "}
            <span className="font-bold">4.5</span>
          </div>

          <Dot />

          <div className="font-medium">
            <span className="font-bold">20</span> {t("CourseDetails.review")}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <Button
          size={"lg"}
          rounded={"full"}
          className="text-foreground mx-auto mt-6 flex justify-center"
        >
          {t("TopCategories.viewAll")}
        </Button>
      </div>
    </>
  );
};

export default Overview;

const learn = "JavaScript, AJAX, Algoritm, Promise, Git va Github, JSON-Server";
const forWhom =
  "Dasturlashga qiziqish borlar, JavaScript dasturlash tilini o'rganish istagi, Amaliy loyihalar qilish";
