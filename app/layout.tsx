import { OG_IMAGES } from "@/lib/utils/variables"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { LayoutStructure } from "./layout-structure"

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Um lugar para compartilhar experiências.",
  keywords: ["blog pessoal", "Gabriel França"],
  openGraph: {
    images: OG_IMAGES.home,
    url: "https://www.gabrielfr.dev",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense>
      <LayoutStructure content={children} />
    </Suspense>
  )
}

