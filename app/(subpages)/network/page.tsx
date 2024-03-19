import { Card } from "@/components/ui/card"
import { NETWORK_LINKS } from "@/lib/variables/network-links"
import { OG_IMAGES } from "@/lib/variables/og-images"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gabriel França | Network",
  description:
    "Um espaço para recomendar pessoas que são incríveis naquilo que elas se propõem a fazer.",
  openGraph: {
    images: OG_IMAGES.network,
  },
}

export default function Network() {
  return (
    <Card>
      <header className="p-6 border-b">
        <h2 className="text-2xl font-semibold">Network</h2>
        <p className="text-black-10 dark:text-white-10">
          Um espaço para recomendar pessoas que são incríveis naquilo que elas se propõem a
          fazer.
        </p>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4 p-6">
        {NETWORK_LINKS.map((company) => {
          return (
            <article className="flex gap-4 items-center">
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src={company.imageUrl}
                  width={80}
                  height={80}
                  alt={`Logotipo da(o) ${company.name}`}
                  className="aspect-square invert dark:invert-0"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-black-10 dark:text-white-10 truncate">{company.workWith}</p>
                <Link href={company.siteUrl} className="text-blue-9 hover:underline">
                  {company.siteUrl.replace("https://", "").replace("/", "")}
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </Card>
  )
}
