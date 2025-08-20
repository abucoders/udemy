"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
  label: string;
  description?: string;
  extra?: string;
}

const TopBar = ({ label, extra, description }: Props) => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{t("NavbarLink.navLink1")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {!extra ? (
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t(label)}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem className="cursor-pointer">
                <BreadcrumbLink>{t(label)}</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="cursor-pointer capitalize">
                  {extra}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      {description && (
        <div className="container mx-auto my-12 max-w-6xl px-4">
          <h1 className="font-spaceGrotesk text-4xl font-bold max-sm:text-3xl">
            {t(label)}
          </h1>

          <p className="text-muted-foreground mt-2 max-w-md max-sm:text-sm">
            {t(description as string)}
          </p>
        </div>
      )}
    </>
  );
};

export default TopBar;
