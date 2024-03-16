declare type PostFrontmatter = {
  slug: string
  title: string
  description: string
  publishedAt: string
  keywords: string[]
}

declare type Game = {
  name: string
  rating: string
  platform: string
  launchYear?: number
  finishedAt?: string
  yearRank?: number
}
