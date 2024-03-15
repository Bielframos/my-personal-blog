import { AnimatedPic } from "@/components/modules/animated-pic"
import { Card } from "@/components/ui/card"
import { SETUP_ITEMS } from "@/lib/variables/setup-items"
import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gabriel França | Setup",
  description: "Meu ambiente de trabalho e perifêricos.",
  openGraph: {
    images:
      "https://res.cloudinary.com/adstrito/image/upload/v1710518247/Site%20pessoal/zmbvnxspjv1erhpx1etd.png",
  },
}

export default function Setup() {
  return (
    <Card className="flex flex-col">
      <header className="p-6 flex flex-col">
        <div className="relative w-full aspect-video rounded-lg border">
          <AnimatedPic
            src="/my-setup.webp"
            alt="Foto do meu ambiente de trabalho, minha mesa, meus monitores e computador assim como os periféricos que eu uso no dia a dia."
            fill={true}
          />
        </div>
        <h2 className="text-2xl font-semibold mt-4">Meu setup</h2>
        <p className="text-black-10 dark:text-white-10">
          Este é meu humilde setup, onde dou vida às minhas ideias. Nesta página, vou
          compartilhar com vocês cada periférico que uso no meu dia a dia e o link de onde
          comprei cada um deles.
        </p>
      </header>

      <div className="flex w-full overflow-x-auto">
        <table className="table-fixed divide-y min-w-full">
          <caption className="caption-bottom border-t text-sm text-black-10 dark:text-white-10 p-2">
            Os links nessa tabela não estão necessariamente com os melhores preços.
          </caption>
          <thead>
            <tr>
              <th className="px-6 py-2 font-normal text-start text-black-10 dark:text-white-10">
                Produto
              </th>
              <th className="px-6 py-2 font-normal text-start text-black-10 dark:text-white-10">
                Especificações
              </th>
              <th className="px-6 py-2 font-normal text-start text-black-10 dark:text-white-10" />
            </tr>
          </thead>
          <tbody className="divide-y">
            {SETUP_ITEMS.map((item, index) => {
              return (
                <tr key={`item-${index}`} className="hover:bg-black-1 dark:hover:bg-white-1">
                  <td className="px-6 py-4 align-text-top min-w-[200px] md:min-w-[unset]">
                    {item.product}
                  </td>
                  <td className="px-6 py-4 align-text-top min-w-[200px] md:min-w-[unset]">
                    {item.specs}
                  </td>
                  <td className="px-6 py-4 align-text-top">
                    {item.purchaseLink && (
                      <Link
                        href={item.purchaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-blue-9 w-fit hover:underline"
                      >
                        Comprar <SquareArrowOutUpRight size={16} />
                      </Link>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
