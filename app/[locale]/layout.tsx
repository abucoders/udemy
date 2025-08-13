import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
// eslint-disable-next-line import/order
import { Roboto, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { routing } from "@/i18n/routing";
import { ChildProps } from "@/types";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ABUcorse - Startup",
  description: "Startup Praktikum's Next.js project",
};

interface RootLayoutProps extends ChildProps {
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ClerkProvider dynamic>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden antialiased`}
        >
          <NextIntlClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
