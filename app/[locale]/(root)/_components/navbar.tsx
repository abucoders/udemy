import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { LanguageDropdown } from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import ModeToggle from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import GlobalSearch from "./global-search";

const Navbar = () => {
  return (
    <nav className="bg-background/70 fixed inset-0 z-10 h-20 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <Logo />

          <div className="flex items-center gap-3 border-l pl-2">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={`/${nav.route}`}
                className={cn(
                  "hover:text-primary font-medium transition-all hover:underline",
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 md:border-r md:pr-3">
            <div className="hidden md:flex">
              {/* Global Search */}
              <GlobalSearch />

              <LanguageDropdown />

              <Button size={"icon"} variant={"ghost"}>
                <ShoppingCart />
              </Button>

              {/* Mode Toggle */}
              <ModeToggle />
            </div>
          </div>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
