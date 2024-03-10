"use client"

import { X } from "@/components/ui/icons/x"
import { Button } from "@/components/ui/button"
import cn from "@/utils/cn"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ChevronRight, Github, Home, Instagram, Menu, Newspaper } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createElement, useState } from "react"

const subPages = [
  { icon: Home, title: "Início", href: "/" },
  { icon: Newspaper, title: "Feed", href: "/feed" },
]

const socialMedia = [
  { icon: Github, title: "Github", href: "https://github.com/Bielframos" },
  { icon: X, title: "Twitter", href: "https://twitter.com/GabrielFramos99" },
  { icon: Instagram, title: "Instagram", href: "https://www.instagram.com/framosgabriel/" },
]

const ulAnimation: Variants = {
  hidden: { right: "-188px" },
  show: { right: "0px" },
}

const iconAnimation: Variants = {
  initial: { x: "-120%" },
  entrance: { x: "0%" },
  exit: { x: "120%" },
}

const IconContainer = ({ children }: { children: React.ReactNode; key: string }) => {
  return (
    <motion.div variants={iconAnimation} initial="initial" animate="entrance" exit="exit">
      {children}
    </motion.div>
  )
}

export const Navbar = () => {
  const path = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.ul
        variants={ulAnimation}
        initial="hidden"
        animate={showMenu ? "show" : "hidden"}
        className="absolute top-1/2 -translate-y-1/2 max-w-56 border-y border-l px-6 py-6 rounded-l-xl bg-white-12 dark:bg-black-12"
      >
        {subPages.map((route) => (
          <li key={route.title}>
            <Link href={route.href}>
              <Button
                variant="nav"
                iconPos="before"
                className={cn(
                  path === route.href &&
                    "bg-blue-3 hover:bg-blue-4 dark:hover:bg-blue-4 text-blue-9"
                )}
              >
                {createElement(route.icon)} {route.title}
              </Button>
            </Link>
          </li>
        ))}

        <hr className="relative w-[14rem] -left-6 mt-5 mb-6" />

        <h6 className="text-sm text-black-10 dark:text-white-10 mb-4 ml-3">Minhas redes</h6>

        {socialMedia.map((route) => (
          <li key={route.title}>
            <Link href={route.href}>
              <Button variant="nav" iconPos="before">
                {createElement(route.icon)} {route.title}
              </Button>
            </Link>
          </li>
        ))}

        <Button
          size="icon"
          className="absolute left-[-20px] border top-1/2 -translate-y-1/2 bg-white-12 dark:bg-black-12 backdrop-blur-xl overflow-hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <AnimatePresence mode="wait">
            {showMenu && (
              <IconContainer key="chevron-right">
                <ChevronRight />
              </IconContainer>
            )}
            {!showMenu && (
              <IconContainer key="menu">
                <Menu />
              </IconContainer>
            )}
          </AnimatePresence>
        </Button>
      </motion.ul>
    </div>
  )
}
