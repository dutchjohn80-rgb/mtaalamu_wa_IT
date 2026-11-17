import { cookies } from "next/headers";

export type Locale = "sw" | "en";
export const LOCALE_COOKIE = "locale";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return value === "en" ? "en" : "sw";
}

export function getLocaleFromSearch(search: string | undefined): Locale {
  const value = new URLSearchParams(search ?? "").get("lang");
  return value === "en" ? "en" : "sw";
}

export function withLocale(href: string, locale: Locale) {
  const url = new URL(href, "http://localhost");
  url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}`;
}
