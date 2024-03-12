import { Navbar } from "@/components/modules/navbar"
import cn from "@/utils/cn"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

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
  return (
    <html lang="pt-BR" className="light">
      <body className={cn(geist, geistMono, "md:flex")}>
        <Navbar />
        <main className="py-10 md:py-16 min-h-[100svh] flex items-center justify-center overflow-hidden flex-1">
          <section className="relative w-full mx-6 max-w-2xl border rounded-lg bg-white-12 dark:bg-black-12">
            {children}
            <div className="absolute inset-0 w-full h-full rounded-lg border border-dashed left-4 top-4 bg-texture-black dark:bg-texture-white -z-10" />
          </section>
        </main>
      </body>
    </html>
  )
}

