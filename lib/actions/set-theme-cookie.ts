"use server"

import { cookies } from "next/headers"

export async function setThemeCookie(theme: string) {
  const thirtyDay = 30 * 24 * 60 * 60 * 1000
  cookies().set("theme", theme, { expires: Date.now() + thirtyDay })
}
