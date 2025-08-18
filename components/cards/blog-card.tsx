import { format } from "date-fns";
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn, getReadingTime } from "@/lib/utils";
import { IBlog } from "@/types/service.type";

import { Badge } from "../ui/badge";

interface Props {
  blog: IBlog;
  isVertical?: boolean;
}

const BlogCard = ({ blog, isVertical }: Props) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={cn(
        "group grid gap-4",
        isVertical ? "md:grid-cols-1" : "md:grid-cols-2",
      )}
    >
      <div className="bg-secondary relative rounded-md p-2">
        <Image
          width={650}
          height={335}
          src={blog.image.url}
          alt={blog.title}
          className="-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7"
        />
      </div>

      <div className="flex flex-col space-y-4">
        {/* Time info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-5" />
            <span>{format(blog.createdAt, "yyyy/MM/dd")}</span>
          </div>
          <Minus className="size-5" />
          <div className="flex items-center gap-2">
            <Clock className="size-5" />
            <span>{getReadingTime(blog.content.html).text}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-creteRound group-hover:text-primary text-3xl transition-colors max-md:text-2xl">
          {blog.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3">{blog.description}</p>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap items-center gap-1">
            <div className="flex items-center gap-1">
              <Image
                src={blog.author.image.url}
                alt={blog.author.name}
                width={30}
                height={30}
                className="mb-2 rounded-sm object-cover"
              />
              <span className="line-clamp-1 max-w-48">
                by {blog.author.name}
              </span>
            </div>

            <Dot className="size-5" />

            <div className="flex items-center gap-1">
              {blog.tag.map((item) => (
                <Badge
                  key={item.title}
                  variant={"secondary"}
                  className="bg-primary/20 cursor-pointer rounded-sm px-2 py-1"
                >
                  <Tag />
                  {item.title}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-1">
              {blog.categorie.map((item) => (
                <Badge
                  key={item.title}
                  variant={"outline"}
                  className="border-primary/20 cursor-pointer rounded-sm px-2 py-1"
                >
                  <Layers2 />
                  {item.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
