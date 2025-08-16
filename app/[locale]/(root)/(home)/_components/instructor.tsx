"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import InstructorCard from "@/components/cards/instructor-card";
import { Button } from "@/components/ui/button";
import { instructors } from "@/constants";

function Instructor() {
  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="items-center justify-between md:flex">
        <div className="flex flex-col space-y-1">
          <h1 className="font-spaceGrotesk text-3xl font-bold">
            {t("Instructors.learnFromBest")}
          </h1>
          <p className="text-muted-foreground text-sm">
            {t("Instructors.description")}
          </p>
        </div>

        <div className="flex items-center gap-1 self-end max-md:mt-2">
          <Button variant={"secondary"}>
            <span>{t("TopCategories.viewAll")}</span>
            <MoveUpRight className="ml-2 size-5 font-bold" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {instructors.map((item) => (
          <InstructorCard key={item.name} {...item} />
        ))}
      </div>

      <div className="mt-6 text-center text-sm">
        {t("Instructors.becomeInstructor1")}{" "}
        <Link
          href={"/become-instructor"}
          className="text-primary/80 hover:text-primary hover:underline"
        >
          {t("Instructors.becomeInstructor2")}
        </Link>
      </div>
    </div>
  );
}

export default Instructor;
