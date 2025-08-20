import { getTranslations } from "next-intl/server";

import CourseCard from "@/components/cards/course-card";
import TopBar from "@/components/shared/top-bar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/constants";

import { Description, Hero, Overview } from "./_components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
  const t = await getTranslations();
  const { slug } = await params;

  return (
    <div className="container mx-auto mt-20 max-w-6xl px-0 py-12">
      <div className="px-8">
        <TopBar label="CourseList.allCourses" extra={slug} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-4 pt-12">
          <div className="col-span-2 max-lg:col-span-3">
            <Hero />
            <Overview />
          </div>

          <div className="col-span-1 max-lg:col-span-3">
            <Description />
          </div>
        </div>

        <Separator className="my-12" />

        <h1 className="font-spaceGrotesk text-2xl font-bold sm:text-3xl md:text-4xl">
          {t("CourseDetails.youMayLike")}
        </h1>

        <Carousel opts={{ align: "start" }} className="mt-6 w-full">
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
    </div>
  );
};

export default Page;
