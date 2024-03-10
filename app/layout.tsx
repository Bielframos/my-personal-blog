import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import cn from "@/utils/cn"
import "./globals.css"
import { Navbar } from "@/components/modules/navbar"

const geist = GeistSans.className
const geistMono = GeistMono.variable

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Blog pessoal do desenvolverdor Gabriel França.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className="bg-white-12 text-black-12 dark:bg-black-12 dark:text-white-12 [&_*]:border-black-2 dark:[&_*]:border-white-3 h-full [&_body]:h-full"
    >
      <body className={cn(geist, geistMono)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

