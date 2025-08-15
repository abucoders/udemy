import Image from "next/image";
import Link from "next/link";

import { ICourse } from "@/types";

import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const CourseCard = (course: ICourse) => {
  return (
    <Link href={"/courses/nextJs"}>
      <Card className="group w-full gap-4 py-1">
        <CardContent className="relative h-56 w-full">
          <Image
            src={course.previewImage}
            alt={course.title}
            fill
            sizes={"100%"}
            className="object-cover"
          />
        </CardContent>

        <div className="my-4 flex flex-col space-y-2 px-2">
          <h2 className="font-spaceGrotesk line-clamp-1 text-2xl font-bold">
            {course.title}
          </h2>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={course.author.image}
                alt={course.author.name}
                width={40}
                height={40}
                className="size-[40px] rounded-full object-cover"
              />

              <p className="text-muted-foreground line-clamp-1 text-sm">
                {course.author.name}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="font-spaceGrotesk text-muted-foreground text-xs line-through">
                {course.oldPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="font-spaceGrotesk text-sm font-bold">
                {course.currentPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
