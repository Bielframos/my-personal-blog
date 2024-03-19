"use server"

import { cookies } from "next/headers"

export async function setThemeCookie(theme: Theme) {
  const oneYear = 365 * 24 * 60 * 60 * 1000
  cookies().set("theme", theme, { expires: Date.now() + oneYear })
}
