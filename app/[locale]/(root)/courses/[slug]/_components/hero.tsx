"use client";

import { Clock3 } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PiStudentBold } from "react-icons/pi";
import ReactStars from "react-stars";

const Hero = () => {
  const t = useTranslations();

  return (
    <>
      <h1 className="font-spaceGrotesk text-2xl font-bold sm:text-3xl md:text-4xl">
        NextJs full course
      </h1>

      <p className="text-muted-foreground mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, vitae
        doloribus incidunt omnis, sint repellat dignissimos natus tempore fugit
        ex excepturi at, labore eius molestiae?
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <Image
            alt="author"
            src={"/assets/userImage.jpg"}
            width={40}
            height={40}
            className="size-[35px] rounded-full object-cover sm:size-[40px]"
          />

          <p className="font-spaceGrotesk text-sm font-bold sm:text-base">
            Abdulloyev
          </p>
        </div>

        <div className="font-spaceGrotesk flex items-center gap-2 text-sm sm:text-base">
          <p className="font-bold text-[#E59819]">4.9</p>
          <ReactStars value={4.9} edit={false} color2="#E59819" />
          <p className="font-bold">(169)</p>
        </div>

        <div className="font-spaceGrotesk flex items-center gap-2 text-sm sm:text-base">
          <PiStudentBold className="size-6" />
          <p className="font-bold">80 {t("CourseDetails.students")}</p>
        </div>

        <div className="font-spaceGrotesk flex items-center gap-2 text-sm sm:text-base">
          <Clock3 className="size-6" />
          <p className="font-bold">{t("CourseDetails.lastUpdated")} 11/2023</p>
        </div>
      </div>

      <Image
        src={
          "http://localhost:3000/_next/image?url=https%3A%2F%2Feu-west-2.graphassets.com%2Fcme10t1e40xy507mm8d375z50%2Fcmed7olkf2bwm07mj8obal6cy&w=1200&q=75"
        }
        alt="course"
        width={1920}
        height={1080}
        className="mt-4 rounded-md object-cover"
      />
    </>
  );
};

export default Hero;
