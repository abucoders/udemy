import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { LanguageDropdown } from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import ModeToggle from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import AuthButton from "./auth-button";
import GlobalSearch from "./global-search";
import Mobile from "./mobile";

const Navbar = async () => {
  const t = await getTranslations("NavbarLink");

  return (
    <nav className="bg-background/70 fixed inset-0 z-10 h-20 px-2.5 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <Logo />

          <div className="hidden items-center gap-3 border-l pl-2 lg:flex">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={`/${nav.route}`}
                className={cn(
                  "hover:text-primary font-medium transition-all hover:underline",
                )}
              >
                {t(nav.name)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="hidden lg:flex lg:border-r lg:pr-3">
              {/* Global Search */}
              <GlobalSearch />

              <LanguageDropdown />

              <Button size={"icon"} variant={"ghost"}>
                <ShoppingCart />
              </Button>
            </div>

            {/* Mode Toggle */}
            <ModeToggle />

            {/* Mobile */}
            <Mobile />

            {/* Auth Button */}
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
