import { enUS, ruRU, trTR } from "@clerk/localizations";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { uzUZ } from "./uzUZ";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localization = (lng: string) => {
  if (lng === "en") return enUS;
  if (lng === "ru") return ruRU;
  if (lng === "tr") return trTR;
  if (lng === "uz") return uzUZ;
};
