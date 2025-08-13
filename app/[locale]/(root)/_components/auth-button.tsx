"use client";

import UserBox from "@/components/shared/user-box";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import React from "react";

const AuthButton = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <>
      {isSignedIn && <UserBox />}

      <SignedOut>
        {!isSignedIn && isLoaded && (
          <>
            <SignInButton mode="modal">
              <Button variant={"outline"} size={"lg"} rounded={"full"}>
                Log in
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                size={"lg"}
                rounded={"full"}
                className="dark:text-foreground"
              >
                Sign up
              </Button>
            </SignUpButton>
          </>
        )}
      </SignedOut>
    </>
  );
};

export default AuthButton;
