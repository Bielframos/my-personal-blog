import { AnimatedPic } from "@/components/modules/animated-pic"
import { Card } from "@/components/ui/card"
import { getGames } from "@/lib/utils/airtable"
import { OG_IMAGES } from "@/lib/variables/og-images"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Gabriel França | Zerei",
  description: "Um registro memorável de todos os jogos que já zerei na vida.",
  openGraph: {
    images: OG_IMAGES.zerei,
  },
}

export default async function Zerei() {
  const games = await getGames()
  const years = Object.keys(games).sort((a, b) => parseInt(b) - parseInt(a))
  return (
    <Card>
      <header className="p-6">
        <h2 className="text-2xl font-semibold">Zerei</h2>
        <p className="text-black-10 dark:text-white-10">
          Um registro memorável de todos os jogos que já zerei na vida.
        </p>
      </header>

      <section className="p-6 border-t">
        <div className="relative w-full aspect-video rounded-lg border">
          <AnimatedPic
            src="/zerei/jedi-survivor.webp"
            alt="Wallpaper do jogo Star Wars Jedi: Survivor"
            fill
          />
          <div className="flex flex-wrap items-end px-6 py-2 border-t absolute bottom-0 w-full bg-white-9 dark:bg-black-9 backdrop-blur-lg rounded-b-lg">
            <p className="w-full font-mono text-sm text-black-10 dark:text-white-10">
              Eu estou jogando
            </p>
            <h3 className="text-2xl font-semibold mr-2">Star Wars Jedi: Survivor</h3>
            <p className="text-black-10 dark:text-white-10">PC</p>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <header className="px-6 py-2 border-b">
            <h3 className="text-black-10 dark:text-white-10">Carregando jogos ...</h3>
          </header>
        }
      >
        {years.map((period) => {
          return (
            <section key={period} className="border-t">
              <header className="px-6 py-2 border-b">
                <h3 className="text-black-10 dark:text-white-10">
                  {period != "rest" ? `Zerados em ${period}` : `Antes de 2023`}
                </h3>
              </header>
              <ul className="divide-y">
                {games[period].map((game, index) => {
                  const finishedAt = game.finishedAt
                    ? new Date(game.finishedAt).toLocaleDateString("pt-BR")
                    : null
                  return (
                    <li
                      key={`${period}-${index}`}
                      className="flex gap-4 px-6 py-4 items-center"
                    >
                      {game.yearRank && (
                        <span className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono">
                          {game.yearRank}
                        </span>
                      )}
                      <div>
                        <p>
                          {game.name}{" "}
                          {game.launchYear && (
                            <span className="font-mono">({game.launchYear})</span>
                          )}
                        </p>
                        <p className="text-sm font-mono text-black-10 dark:text-white-10">
                          {game.platform} • {game.rating} {finishedAt && `• ${finishedAt}`}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </Suspense>
    </Card>
  )
}
