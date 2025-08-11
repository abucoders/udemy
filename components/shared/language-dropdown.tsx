"use client";

import { Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { lngs } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LanguageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className={"gap-2"}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {lngs.map((language) => (
            <DropdownMenuItem
              key={language.route}
              className={cn("cursor-pointer")}
            >
              <Link
                href={"/uz"}
                className="font-spaceGrotesk flex w-full gap-2 font-medium"
              >
                <Image
                  src={`/assets/locales/${language.route}.png`}
                  alt={language.route}
                  width={25}
                  height={20}
                  className="size-[20]"
                />
                <span>{language.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
