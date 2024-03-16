import Airtable from "airtable"
import { unstable_cache } from "next/cache"

const API_KEY = process.env.AIRTABLE_API_KEY

export const db = new Airtable({
  apiKey: API_KEY,
}).base("appYDe7xI4LmVnNc0")

export const getGames = unstable_cache(
  async function () {
    return new Promise<{ [key: string]: Game[] }>((resolve, reject) => {
      const games: { [key: string]: Game[] } = {}

      db("zerei")
        .select({
          view: "zerados",
          fields: ["name", "launchYear", "rating", "platform", "finishedAt", "yearRank"],
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const game = record.fields as Game
              if (game.finishedAt) {
                const year = new Date(game.finishedAt).getFullYear().toString()
                if (!(year in games)) {
                  games[year] = []
                }
                games[year].push(game)
              } else {
                if (!("rest" in games)) {
                  games["rest"] = []
                }
                games["rest"].push(game)
              }
            })
            fetchNextPage()
          },
          (err) => {
            if (err) {
              console.error(err)
              reject(err)
            } else {
              resolve(games)
            }
          }
        )
    })
  },
  ["airtable-games"],
  { tags: ["games"] }
)
