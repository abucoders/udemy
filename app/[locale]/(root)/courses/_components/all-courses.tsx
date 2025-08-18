"use client";

import { useTranslations } from "next-intl";

import CourseCard from "@/components/cards/course-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses, filterCourses, filterLevels } from "@/constants";

const AllCourses = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto mt-12 max-w-6xl px-0">
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:space-y-2">
        <h2 className="max-md:self-end">
          {t("CourseList.result1")}{" "}
          <span className="font-spaceGrotesk text-primary font-bold">250</span>{" "}
          {t("CourseList.result2")}
        </h2>

        <div className="flex items-center gap-2">
          <p>{t("CourseFilters.sortBy")}</p>

          <Select>
            <SelectTrigger className="from-secondary to-background w-[120px] bg-gradient-to-r">
              <SelectValue placeholder={t("CourseFilters.filter")} />
            </SelectTrigger>
            <SelectContent>
              {filterCourses.map((course) => (
                <SelectItem
                  key={course.name}
                  value={t(`Categorie.${course.label}`)}
                  className="max-sm:text-xs"
                >
                  {t(`Categorie.${course.label}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="from-secondary to-background w-[120px] bg-gradient-to-l">
              <SelectValue placeholder={t("CourseFilters.level")} />
            </SelectTrigger>
            <SelectContent>
              {filterLevels.map((course) => (
                <SelectItem
                  key={course.name}
                  value={t(`CourseFilters.${course.label}`)}
                  className="max-sm:text-xs"
                >
                  {t(`CourseFilters.${course.label}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, idx) => (
          <CourseCard {...course} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
