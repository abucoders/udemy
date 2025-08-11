import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";

import "./globals.css";
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
  title: "UDEMY - Startup",
  description: "Startup Praktikum's Next.js project",
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
