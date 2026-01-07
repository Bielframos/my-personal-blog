import { AnimatedPic } from "@/lib/components/modules"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { Card } from "@/lib/components/ui"
import cn from "@/lib/utils/cn"
import { Instagram, Mail, MessagesSquare } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto [&_p]:text-black-10 dark:[&_p]:text-white-9">
      <article>
        <h2 className="mb-4">Hey there! 👋</h2>

        <p>
          Esse é o meu espaço reservado na internet onde compartilho um pouco sobre mim, meus
          projetos e também escrevo alguns artigos sobre desenvolvimento web, design e outros
          assuntos que me interessam.
        </p>
      </article>

      <hr className="my-10" />

      <article className="space-y-4">
        <h2 className="mb-4">Quem sou eu?</h2>
        <p>
          Eu sou Gabriel França, tenho 26 anos e atualmente moro em Olinda - PE. Sou Design
          Gráfico por formação e ao longo dos últimos 5 anos venho atuando como Desenvolvedor
          Web Front-end.
        </p>

        <p>
          Sou uma pessoa criativa e curiosa então adoro aprender coisas novas e explorar novas
          tecnologias. Gosto muito de desafios e acredito que sempre há algo novo para aprender.
        </p>

        <p>
          Como hobby eu amo programar (Embora também seja minha profissão), também sou
          apaixonado por jogar Video Games, acompanhar esportes como MMA, Futebol ou qualquer
          outro esporte que tenha um Brasileiro competindo, entre outras coisas.
        </p>

        <div className="grid auto-rows-min md:grid-cols-2 gap-2 mt-6">
          <AnimatedPic
            src="/kamala.webp"
            alt="Foto da minha filha (Kamala, uma cadela da raça dachshund)"
          />

          <AnimatedPic src="/my-marriage.webp" alt="Eu e minha esposa no nosso casamento" />

          <AnimatedPic src="/me-and-my-wife.webp" alt="Eu e minha esposa" />

          <AnimatedPic src="/me-with-a-snake.webp" alt="Eu e minha esposa no nosso casamento" />
        </div>
      </article>

      <hr className="my-10" />

      <article className="space-y-4">
        <h2 className="mb-4">
          Juntos, podemos transformar problemas reais em soluções estratégicas.
        </h2>
        <p>
          Se você busca unir estratégia, criatividade e tecnologia para gerar resultados
          concretos no seu negócio, entre em contato comigo através da minha agência criativa, a
          Adstrito.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="https://wa.me/+5581993621938"
            target="_blank"
            className={cn(buttonStyle({ variant: "default", iconPos: "before" }))}
          >
            <MessagesSquare /> Envie uma mensagem
          </Link>
          <Link
            href="https://www.instagram.com/adstrito.ag/"
            target="_blank"
            className={cn(buttonStyle({ variant: "default", iconPos: "before" }))}
          >
            <Instagram /> Adstrito.ag
          </Link>
        </div>
      </article>
    </div>
  )
}

