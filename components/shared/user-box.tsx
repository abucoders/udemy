"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut, UserRoundCog, UserStar } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

function UserBox() {
  const { user } = useUser();
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-8 cursor-pointer md:size-9">
          <AvatarImage src={user?.imageUrl} className="object-cover" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-muted-foreground text-xs leading-none font-medium">
            {user?.emailAddresses[0].emailAddress}
          </p>

          <div className="flex items-center gap-x-2">
            <div className="bg-secondary rounded-md p-1">
              <Avatar className="size-8">
                <AvatarImage src={user?.imageUrl} className="object-cover" />
              </Avatar>
            </div>

            <div className="space-y-1">
              <p className="font-space-grotesk line-clamp-1 text-sm">
                {user?.fullName}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        <Link href={"/instructor"}>
          <DropdownMenuItem className="text-muted-foreground w-full cursor-pointer">
            <UserStar /> {t("instructor")}
          </DropdownMenuItem>
        </Link>

        <Link href={"/user-profile"}>
          <DropdownMenuItem className="text-muted-foreground w-full cursor-pointer">
            <UserRoundCog /> {t("manageAccount")}
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="text-muted-foreground w-full cursor-pointer"
          variant="destructive"
        >
          <LogOut />
          <SignOutButton>{t("logout")}</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserBox;
