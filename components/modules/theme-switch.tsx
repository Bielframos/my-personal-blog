"use client"

import { setThemeCookie } from "@/lib/actions/set-theme-cookie"
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react"
import { useState } from "react"

export type Theme = "system" | "light" | "dark"

const themes: { icon: LucideIcon; value: Theme }[] = [
  { icon: Sun, value: "light" },
  { icon: Monitor, value: "system" },
  { icon: Moon, value: "dark" },
]

export const ThemeSwitch = ({ userTheme = "system" }: { userTheme?: Theme }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(userTheme)

  async function switchTheme(newTheme: Theme) {
    setCurrentTheme(newTheme)

    switch (newTheme) {
      case "dark":
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        break
      case "light":
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        break
      case "system":
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.remove("light")
        break
    }

    setThemeCookie(newTheme)
  }

  return (
    <fieldset className="my-4 md:my-0 self-center flex p-1 rounded-full border gap-1">
      {themes.map((theme) => {
        const Icon = theme.icon
        return (
          <label
            key={theme.value}
            htmlFor={theme.value}
            className="flex p-2 rounded-full bg-black-1 dark:bg-white-2 hover:bg-black-2 dark:hover:bg-white-3 cursor-pointer has-[:checked]:bg-blue-3 dark:has-[:checked]:bg-blue-dark-3 has-[:checked]:text-blue-9 hover:has-[:checked]:bg-blue-4 dark:hover:has-[:checked]:bg-blue-dark-4 transition-colors"
          >
            <Icon />
            <input
              type="radio"
              id={theme.value}
              name="theme-color"
              checked={currentTheme === theme.value}
              onChange={() => switchTheme(theme.value)}
              className="hidden"
            />
          </label>
        )
      })}
    </fieldset>
  )
}
