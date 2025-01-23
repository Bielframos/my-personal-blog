import matter from "gray-matter"
import { unstable_cacheTag as cacheTag } from "next/cache"
import { type Models, Query } from "node-appwrite"
import { createAdminClient } from "../server/appwrite"

type GetPostsOptions = {
  category?: string
  offset?: number
}

interface Post extends Models.Document {
  slug: string
  title: string
  description: string
  keywords: string[]
  fileId: string
}

async function getFeed(options?: GetPostsOptions) {
  "use cache"
  cacheTag("feed")

  const { databases } = await createAdminClient()

  const queries = [Query.limit(10)]
  if (options?.category) queries.push(Query.equal("category", options.category))
  if (options?.offset) queries.push(Query.offset(options.offset))

  const { documents, total } = await databases.listDocuments<Post>("GABRIELFR_DEV_DB", "POSTS")
  const pagesCount = Math.ceil(total / 10)

  return { documents, total, pagesCount }
}

async function getPost(slug: string) {
  "use cache"
  cacheTag("feed")

  const { databases, storage } = await createAdminClient()

  const listOfPostsMetadata = await databases.listDocuments<Post>("GABRIELFR_DEV_DB", "POSTS", [
    Query.equal("slug", slug),
  ])

  if (listOfPostsMetadata.total === 1) {
    const postMetadata = listOfPostsMetadata.documents[0]
    const file = await storage.getFileDownload("POSTS", postMetadata.fileId)
    const decoder = new TextDecoder("utf-8")
    const fileContent = decoder.decode(file)
    const { data, content } = matter(fileContent)

    return { metadata: postMetadata, content }
  }

  return null
}

export default { getFeed, getPost }
