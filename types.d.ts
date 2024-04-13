declare type PostFrontmatter = {
  id: number
  category: "personal" | "dev" | "games" | "sports" | "history"
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

declare type Theme = "system" | "light" | "dark"
