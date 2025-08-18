import { format } from "date-fns";
import parse from "html-react-parser";
import { CalendarDays, Clock, Minus } from "lucide-react";
import Image from "next/image";

import { getReadingTime } from "@/lib/utils";
import { getBlog } from "@/service/blog.service";

import ShareBtns from "../_components/share-btns";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function SlugPage({ params }: Props) {
  const { slug } = await params;
  // Fetch the blog post based on the slug
  const blog = await getBlog(slug);

  return (
    <div className="mx-auto max-w-5xl px-2 pt-[15vh]">
      <h1 className="font-creteRound text-4xl md:text-5xl lg:text-6xl">
        {blog.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 max-md:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={blog.author.image.url}
            alt={blog.author.name}
            width={30}
            height={30}
            className="rounded-sm object-cover"
          />
          <p>{blog.author.name}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p>{getReadingTime(blog.content.html).text}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <p>{format(blog.createdAt, "yyyy/MM/dd")}</p>
        </div>
      </div>

      <Image
        src={blog.image.url}
        alt={blog.title}
        width={"1120"}
        height={"595"}
        className="mt-4 rounded-md"
      />

      <div className="relative mt-12 flex max-md:flex-col-reverse md:gap-12">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-muted-foreground text-lg uppercase">Share</p>
            <ShareBtns />
          </div>
        </div>
        <div className="prose-sm prose md:prose-base dark:prose-invert max-w-none flex-1">
          {parse(blog.content.html)}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6 max-md:flex-col">
        <Image
          src={blog.author.image.url}
          alt={blog.author.name}
          width="155"
          height="155"
          className="rounded-md max-md:self-start"
        />
        <div className="flex flex-1 flex-col space-y-4">
          <h2 className="font-creteRound text-3xl">{blog.author.name}</h2>
          <p className="text-muted-foreground line-clamp-2">
            {blog.author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlugPage;
