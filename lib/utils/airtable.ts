"use server"

const API_KEY = process.env.AIRTABLE_API_KEY
const API_URL =
  "https://api.airtable.com/v0/appYDe7xI4LmVnNc0/zerei?view=zerados&fields%5B%5D=name&fields%5B%5D=name&fields%5B%5D=launchYear&fields%5B%5D=rating&fields%5B%5D=platform&fields%5B%5D=finishedAt&fields%5B%5D=yearRank"

export async function getGames() {
  const games: { [key: string]: Game[] } = {}

  async function fetchGames(offset?: string) {
    const offsetValue = offset ? offset : ""
    const response = await fetch(API_URL + "&offset=" + offsetValue, {
      headers: { Authorization: "Bearer " + API_KEY },
      next: { tags: ["games"] },
    })

    const data = await response.json()

    if ("error" in data) {
      return await fetchGames()
    }

    data.records.forEach((record: { id: string; createdTime: string; fields: Game }) => {
      const game = record.fields
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

    if (data.offset) {
      await fetchGames(data.offset)
    }
  }

  await fetchGames()

  return games
}
