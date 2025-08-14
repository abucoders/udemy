"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

import UserBox from "@/components/shared/user-box";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AuthButton = () => {
  const { isLoaded, user } = useUser();
  const t = useTranslations();

  return (
    <div>
      {/* Agar foydalanuvchi tizimga kirgan bo‘lsa */}
      <SignedIn>
        <UserBox />
      </SignedIn>

      {/* Agar foydalanuvchi tizimga kirmagan bo‘lsa */}
      <SignedOut>
        <div className={cn(user && "hidden", "lg:hidden")}>
          <SignInButton mode="modal">
            <Button variant="ghost" size="icon">
              <LogIn />
            </Button>
          </SignInButton>
        </div>

        {isLoaded && (
          <div className="hidden gap-2 lg:flex">
            <SignInButton mode="modal">
              <Button variant="outline" size="lg" rounded="full">
                {t("logIn")}
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button size="lg" rounded="full" className="dark:text-foreground">
                {t("signUp")}
              </Button>
            </SignUpButton>
          </div>
        )}
      </SignedOut>
    </div>
  );
};

export default AuthButton;
