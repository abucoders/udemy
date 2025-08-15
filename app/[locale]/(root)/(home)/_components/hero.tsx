"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { companies } from "@/constants";

const Hero = () => {
  const t = useTranslations();
  const them = useTheme();

  return (
    <>
      <div className="container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 px-3 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-spaceGrotesk text-3xl font-bold sm:text-5xl">
            {t("Hero.title")}{" "}
            <span className="text-primary">{t("Hero.titleSpan")}</span>
          </h1>

          <p className="text-muted-foreground max-md:text-sm">
            {t("Hero.description")}
          </p>
          <div className="flex gap-4">
            <Link href={"/blos"}>
              <Button size={"lg"} rounded={"full"} className="text-white">
                {t("Blog.title")}
              </Button>
            </Link>

            <Link href={"/courses"}>
              <Button variant={"outline"} size={"lg"} rounded={"full"}>
                {t("Hero.findCourses")}
              </Button>
            </Link>
          </div>
        </div>

        {them.theme === "light" ? (
          <Image
            src={"/assets/hero.svg"}
            alt="Hero imgs"
            width={520}
            height={520}
            className="h-auto w-full self-end object-cover md:self-center"
          />
        ) : (
          <Image
            src={"/assets/hero.png"}
            alt="hero"
            width={520}
            height={520}
            sizes="(max-width: 520px) 100vw, (max-width: 520px) 50vw, 33vw"
            className="h-auto w-full self-end object-cover md:self-center"
          />
        )}
      </div>

      <div className="bg-secondary w-full">
        <Carousel
          className="container mx-auto max-w-6xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent className="">
            {companies.map((Icons, idx) => (
              <CarouselItem
                key={idx}
                className="flex basis-1/3 justify-center md:basis-1/4 lg:basis-1/6"
              >
                <Icons className="text-muted-foreground size-20 w-full md:size-24" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
