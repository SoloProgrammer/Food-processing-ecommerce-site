import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobileScreen() {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 778;
  }
  return false
}
