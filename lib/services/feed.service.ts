import { client } from "@/sanity/lib/client"

interface Post {
  _id: string
  slug: { _type: string, current: string }
  title: string
  subtitle: string
  mainImage: any
  body: any
  publishedAt: string
  categories: { title: string, slug: any }[]
}

async function getPosts(
  { page }: { page: number } = { page: 1 }
) {
  const LIMIT = 24
  const offset = (page - 1) * 24

  const POST_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$offset...$limit]
   {_id, title, slug, subtitle,  mainImage, categories[]->, publishedAt}
 `
  const posts = await client.fetch<Post[]>(
    POST_QUERY,
    { limit: offset + LIMIT, offset },
    { next: { tags: ["feed"] } }
  )

  // Paginação
  const postCount = await getPostCount()
  const pageCount = Math.ceil(postCount / LIMIT)
  const currentPage = Math.floor(offset / LIMIT) + 1
  const hasMore = (offset + posts.length) < postCount

  return { posts, pagination: { total: postCount, pageCount, currentPage, hasMore } }
}

async function getPost(slug: string) {
  const POST_QUERY = `
    *[_type == "post" && defined(slug.current) && slug.current == $slug] {
      _id,
      slug,
      title,
      subtitle,
      mainImage{alt,asset->},
      categories[]->,
      author->,
      publishedAt,
      body[] {
        ...,
        asset->{
          ...,
          "_key": _id
        }
      }
    }[0]
  `

  return await client.fetch<Post>(POST_QUERY, { slug }, { next: { tags: ['feed'] } })
}

export async function getPostCount() {
  const count = await client.fetch<number>(
    `count(*[_type == "post"])`,
    {},
    { next: { tags: ["feed"] } }
  )

  return count
}

export default { getPosts, getPost, getPostCount }
