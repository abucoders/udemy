"use client";

import { Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

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
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="gap-2">
          <Languages />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {lngs.map((language) => (
            <Link key={language.route} href={`/${language.route}`}>
              <DropdownMenuItem
                className={cn(
                  "font-spaceGrotesk flex w-full gap-2 font-medium",
                  locale === language.route && "bg-secondary",
                )}
              >
                <Image
                  src={`/assets/locales/${language.route}.png`}
                  alt={language.route}
                  width={25}
                  height={20}
                />
                <span>{language.label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
