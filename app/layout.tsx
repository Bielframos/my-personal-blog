import { Navbar } from "@/components/modules/navbar"
import { Theme } from "@/components/modules/theme-switch"
import cn from "@/lib/utils/cn"
import { GoogleAnalytics } from "@/lib/utils/google-analytics"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import "./globals.css"
import Link from "next/link"

const geist = GeistSans.className
const geistMono = GeistMono.variable

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Um lugar para compartilhar experiências.",
  keywords: ["blog pessoal", "Gabriel França"],
  openGraph: {
    images:
      "https://res.cloudinary.com/adstrito/image/upload/v1710519907/Site%20pessoal/cwcc6dvwralkspe7vagy.png",
    url: "https://www.gabrielfr.dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = cookies().get("theme")?.value as Theme | undefined
  return (
    <html lang="pt-BR" className={cn(theme, "h-svh md:h-[unset]")}>
      <body
        className={cn(
          geist,
          geistMono,
          "bg-white-12 dark:bg-black-12 text-black-12 dark:text-white-12 w-full h-svh md:h-[unset]"
        )}
      >
        <div className="flex h-full">
          <Navbar userTheme={theme} />
          <div className="flex flex-col flex-1 overflow-x-hidden">
            <main className="flex flex-col flex-1 px-6 py-10 md:py-16 justify-center">
              {children}
            </main>
            <footer className="flex justify-end gap-4 border-t py-4 px-6 text-sm">
              <Link
                href="/docs/politicas-de-privacidade"
                className="text-black-10 dark:text-white-10 hover:underline"
              >
                Política de Privacidade
              </Link>
            </footer>
          </div>
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
