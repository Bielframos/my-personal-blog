import { style as buttonStyle } from "@/lib/components/ui/button"
import feed from "@/lib/services/feed.service"
import { cn, formatDate } from "@/lib/utils"
import { OG_IMAGES } from "@/lib/utils/variables"
import { urlFor } from "@/sanity/lib/image"
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
  const currentPage = Number.parseInt((await searchParams).page as string) || 1
  const { posts, pagination } = await feed.getPosts({ page: currentPage })

  return (
    <div className="w-full max-w-2xl mx-auto max-md:pl-8 max-md:pt-10">
      <div className="[&_p]:text-black-10 [&_p]:dark:text-white-9">
        <header className="mb-4">
          <h2 className="mb-2">Bem-vindo ao meu feed!</h2>
          <p>Aqui compartilho um pouco sobre tudo que me interessa.</p>
        </header>

        <ul className="divide-y border-t">
          {posts.map((post) => {
            const date = formatDate(post.publishedAt)
            const postImageUrl = post.mainImage
              ? urlFor(post.mainImage)?.width(96).quality(80).url()
              : null

            return (
              <li className="py-4 hover:bg-black-1 dark:hover:bg-white-1 px-4" key={post._id}>
                <Link href={`/feed/${post.slug.current}`} className="flex gap-4 items-center">
                  {postImageUrl && (
                    <div className="border rounded-xl overflow-hidden relative">
                      <img
                        src={postImageUrl}
                        alt={post.title}
                        className="aspect-square object-cover"
                        width={96}
                        height={96}
                      />
                    </div>
                  )}

                  <div>
                    <div className="flex gap-2 flex-wrap mb-2">
                      <div className="uppercase text-xs rounded-full px-2 py-0.5 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono border border-transparent">
                        {date}
                      </div>

                      {post.categories.map((category) => (
                        <span
                          key={category.slug.current}
                          className="uppercase text-xs rounded-full px-2 py-0.5 border h-fit w-fit font-mono text-black-0 dark:text-white-9"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.subtitle}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        <footer className="px-6 py-4 flex justify-between items-center border-t">
          <p>
            {pagination.total} {pagination.total > 1 ? "posts" : "post"}
          </p>
          <div className="flex gap-2">
            <Link
              href={`?page=${currentPage - 1}`}
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
                currentPage === pagination.pageCount && "pointer-events-none opacity-50"
              )}
            >
              <ChevronRight />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

