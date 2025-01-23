import { Card } from "@/lib/components/ui"
import { style as buttonStyle } from "@/lib/components/ui/button"
import feed from "@/lib/services/feed-services"
import { cn, formatDate } from "@/lib/utils"
import { OG_IMAGES } from "@/lib/utils/variables"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gabriel França | Feed",
  description:
    "Um pouco sobre tudo o que gosto, tecnologia, esporte, vídeo games e troca de conhecimento.",
  openGraph: {
    images: OG_IMAGES.feed,
  },
}

export default async function Feed({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { documents, total, pagesCount } = await feed.getFeed()
  const currentPage = Number.parseInt((await searchParams).pagina as string) || 1
  return (
    <Card>
      <div className="text-black-11 dark:text-white-11">
        <header className="border-b">
          <div className="p-6">
            <h2 className="font-semibold text-2xl text-black-12 dark:text-white-12">
              Bem-vindo ao meu feed!
            </h2>
            <p className="text-black-10 dark:text-white-10">
              Aqui compartilho um pouco sobre tudo que me interessa.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 auto-rows-min p-6 pb-10 pr-10 gap-10">
          {documents.map((document) => {
            const date = formatDate(document.$createdAt)

            return (
              <Link key={document.$id} href={`/feed/${document.slug}`} className="h-full">
                <Card
                  className="p-6 grid gap-4 auto-rows-min place-content-center text-center justify-items-center"
                  height="fill"
                >
                  <div className="flex gap-2">
                    <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono border border-transparent">
                      {date}
                    </div>

                    <div className="uppercase text-sm rounded-full px-4 py-1 h-fit w-fit font-mono dark:bg-texture-white bg-texture-black border border-dashed">
                      {document.category}
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl">{document.title}</h3>
                  <p className="text-black-10 dark:text-white-10">{document.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>

        <footer className="px-6 py-4 flex justify-between items-center border-t">
          <p>
            {total} {total > 1 ? "posts" : "post"}
          </p>
          <div className="flex gap-2">
            <Link
              href={`?pagina=${currentPage - 1}`}
              className={cn(
                buttonStyle({ variant: "secondary", size: "icon" }),
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            >
              <ChevronLeft />
            </Link>

            <Link
              href={`?page=${currentPage + 1}`}
              className={cn(
                buttonStyle({ variant: "secondary", size: "icon" }),
                currentPage === pagesCount && "pointer-events-none opacity-50"
              )}
            >
              <ChevronRight />
            </Link>
          </div>
        </footer>
      </div>
    </Card>
  )
}

