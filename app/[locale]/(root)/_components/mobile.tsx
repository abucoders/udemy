"use client";

import { SignInButton, SignedOut } from "@clerk/nextjs";
import { AlignCenter, LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { LanguageDropdown } from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import ModeToggle from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import GlobalSearch from "./global-search";

const Mobile = () => {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button variant={"ghost"} size={"icon"}>
          <AlignCenter />
        </Button>
      </SheetTrigger>

      <SheetContent side={"top"}>
        <SheetHeader>
          {/* Logo */}
          <Logo />

          <Separator />

          <div className="mt-4 flex flex-col space-y-4">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={`/${nav.route}`}
                className="hover:text-primary/90 flex gap-3 font-medium transition-all hover:underline"
              >
                <nav.icon className="size-5" />
                {t(`NavbarLink.${nav.name}`)}
              </Link>
            ))}

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant={"secondary"} size={"lg"} rounded={"full"}>
                  <LogIn />
                  {t("logIn")}
                </Button>
              </SignInButton>
            </SignedOut>

            <LanguageDropdown isMobile />
          </div>
          <Separator />

          <div className="flex items-center justify-center">
            <GlobalSearch />
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart />
            </Button>
            <ModeToggle />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
