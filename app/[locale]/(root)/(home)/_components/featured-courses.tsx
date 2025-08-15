"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import CourseCard from "@/components/cards/course-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courses, filterCourses } from "@/constants";

const FeaturedCourses = () => {
  const [filter, setFilter] = useState("all");

  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
        <div className="flex flex-col space-y-1">
          <h1 className="font-spaceGrotesk text-3xl font-bold">
            {t("ExploreCourse.title")}
          </h1>
          <p className="text-muted-foreground text-sm">
            {t("ExploreCourse.description")}
          </p>
        </div>

        <div className="max-md:bg-primary flex items-center gap-1 self-end max-md:mt-4 max-md:w-full max-md:rounded-full max-md:p-2">
          {filterCourses.map((item) => (
            <Button
              key={item.name}
              variant={filter === item.name ? "secondary" : "ghost"}
              className={`${item.name !== filter && "max-md:text-white"}`}
              onClick={() => setFilter(item.name)}
            >
              {t(`Categorie.${item.label}`)}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-4 md:hidden">
        {courses.map((item) => (
          <CourseCard key={item.title} {...item} />
        ))}
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="mt-6 hidden w-full md:flex"
      >
        <CarouselContent>
          {courses.map((item) => (
            <CarouselItem
              key={item.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <CourseCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:left-1" />
        <CarouselNext className="max-lg:right-1" />
      </Carousel>
    </div>
  );
};

export default FeaturedCourses;
