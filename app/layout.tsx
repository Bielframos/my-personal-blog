import { GoogleAnalytics, Navbar } from "@/lib/components/modules"
import { OG_IMAGES } from "@/lib/utils/variables"
import { cn } from "@/lib/utils"
import { Geist, Space_Mono } from "next/font/google"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Um lugar para compartilhar experiências.",
  keywords: ["blog pessoal", "Gabriel França"],
  openGraph: {
    images: OG_IMAGES.home,
    url: "https://www.gabrielfr.dev",
  },
}

const geist = Geist({
  subsets: ["latin"],
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = (await cookies()).get("theme")?.value as Theme | undefined
  return (
    <html lang="pt-BR" className={cn(theme, "h-svh md:h-[unset]")}>
      <body
        className={cn(
          geist.className,
          spaceMono.className,
          "bg-white-12 dark:bg-black-12 text-black-12 dark:text-white-12 w-full h-svh md:h-[unset]"
        )}
      >
        <div className="flex h-full">
          <Navbar userTheme={theme} />
          <div className="flex flex-col flex-1 overflow-x-hidden">
            <main className="flex flex-col flex-1 px-6 py-10 md:py-16 justify-start items-start">
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
