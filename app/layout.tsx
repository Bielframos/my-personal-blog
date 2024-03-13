import { Navbar } from "@/components/modules/navbar"
import { Theme } from "@/components/modules/theme-switch"
import cn from "@/lib/utils/cn"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import "./globals.css"
import { Card } from "@/components/ui/card"

const geist = GeistSans.className
const geistMono = GeistMono.variable

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Um lugar para compartilhar experiências!",
  keywords: ["blog pessoal", "Gabriel França"],
  openGraph: {
    images:
      "https://res.cloudinary.com/adstrito/image/upload/v1710168988/dfcxc4zfxvzpwnlz2md4.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = cookies().get("theme")?.value as Theme | undefined
  return (
    <html lang="pt-BR" className={theme}>
      <body
        className={cn(
          geist,
          geistMono,
          "bg-white-12 dark:bg-black-12 text-black-12 dark:text-white-12"
        )}
      >
        <div className="md:flex">
          <Navbar userTheme={theme} />
          <main className="flex flex-col px-6 py-10 md:py-16 justify-center mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

