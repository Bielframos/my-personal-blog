"use client"

import { setThemeCookie } from "@/lib/actions/set-theme-cookie"
import cn from "@/lib/utils/cn"
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react"
import { useState } from "react"

const themes: { icon: LucideIcon; value: Theme }[] = [
  { icon: Sun, value: "light" },
  { icon: Monitor, value: "system" },
  { icon: Moon, value: "dark" },
]

export const ThemeSwitcher = ({ userTheme = "system" }: { userTheme?: Theme }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(userTheme)

  async function switchTheme(newTheme: Theme) {
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

    setCurrentTheme(newTheme)
    setThemeCookie(newTheme)
  }

  return (
    <fieldset className="mt-auto self-center flex p-1 rounded-full border gap-1">
      {themes.map((theme) => {
        const Icon = theme.icon
        return (
          <label
            key={theme.value}
            htmlFor={theme.value}
            className={cn(
              "flex p-2 rounded-full bg-black-1 dark:bg-white-2 hover:bg-black-2 dark:hover:bg-white-3 cursor-pointer transition-colors",
              currentTheme === theme.value &&
                "bg-blue-3 dark:bg-blue-dark-3 hover:bg-blue-4 dark:hover:bg-blue-dark-4 text-blue-9"
            )}
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

