"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Logo from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/constants";

function Footer() {
  const t = useTranslations();

  return (
    <div className="bg-secondary mt-12 pt-12 max-md:px-4">
      <div className="container mx-auto max-w-7xl pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col space-y-3 md:col-span-2">
            <Logo />
            <p>{t("Hero.description")}</p>
          </div>

          <div className="flex flex-col space-y-3">
            <h1 className="font-spaceGrotesk text-3xl">{t("Footer.pages")}</h1>
            <div className="flex flex-col space-y-3 pt-6">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  href={`/${item.route}`}
                  className="hover:text-primary font-medium transition-all hover:underline"
                >
                  {t(`NavbarLink.${item.name}`)}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h1 className="font-spaceGrotesk text-3xl">
              {t("Footer.contacts")}
            </h1>
            <div className="flex flex-col space-y-3 pt-6">
              <div className="flex items-center space-x-3">
                <PhoneCall size={20} />
                <div className="flex flex-col space-y-1">
                  <a
                    className="hover:text-primary dark:hover:text-primary/80 text-sm hover:underline"
                    href="tel:+998934443488"
                  >
                    +998 (93) 444-34-88
                  </a>
                  <Separator className="bg-muted-foreground dark:bg-gray-500" />
                  <a
                    className="hover:text-primary dark:hover:text-primary/80 text-sm hover:underline"
                    href="tel:+998907457710"
                  >
                    +998 (90) 745-77-10
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a
                  className="hover:text-primary dark:hover:text-primary/80 text-sm hover:underline"
                  href="mailto:abdulloyev.uz@gmail.com"
                >
                  abdulloyev.uz@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span className="text-sm">Uzbekistan, Bukhara & Samarkand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <Separator className="bg-muted-foreground mb-3 dark:bg-gray-500" />
          <p>
            © {new Date().getFullYear()}. {t("Footer.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
