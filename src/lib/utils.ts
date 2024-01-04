import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortString(str: string, length: number = 20) {
  return str.length > length ? str.slice(0, length) + "..." : str;
}
