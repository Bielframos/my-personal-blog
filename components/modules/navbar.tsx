"use client"

import { Button } from "@/components/ui/button"
import { X } from "@/components/ui/icons/x"
import cn from "@/utils/cn"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ChevronLeft, Github, Home, Instagram, Menu, Newspaper } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createElement, useState } from "react"
import { Zerei } from "../ui/icons/zerei"
import { useMediaQuery } from "@/hooks/use-media-query"

const subPages = [
  { icon: Home, title: "Início", href: "/", disabled: false },
  { icon: Newspaper, title: "Feed", href: "/feed", disabled: true },
  { icon: Zerei, title: "Zerei", href: "/zerei", disabled: true },
]

const socialMedia = [
  { icon: Github, title: "Github", href: "https://github.com/Bielframos", disabled: false },
  {
    icon: X,
    title: "X (Twitter)",
    href: "https://twitter.com/GabrielFramos99",
    disabled: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://www.instagram.com/framosgabriel/",
    disabled: false,
  },
]

const ulAnimation: Variants = {
  hidden: { left: "-240px" },
  show: { left: "0px" },
}

const iconAnimation: Variants = {
  initial: { x: "-120%" },
  entrance: { x: "0%" },
  exit: { x: "120%", transition: { delay: 0.3 } },
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
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [showMenu, setShowMenu] = useState(!isMobile)

  return (
    <motion.nav
      variants={ulAnimation}
      initial={isMobile ? "hidden" : "show"}
      animate={showMenu ? "show" : "hidden"}
      className="fixed top-10 w-full max-w-60 border-y border-r rounded-r-xl bg-white-12 dark:bg-black-12 md:sticky md:top-0 md:h-[100svh] md:rounded-none md:py-16 z-[999]"
    >
      <ul className="p-6">
        {subPages.map((route) => (
          <li key={route.title}>
            <Link
              href={route.disabled ? "#" : route.href}
              className={cn(route.disabled && "pointer-events-none")}
            >
              <Button
                variant="nav"
                iconPos="before"
                className={cn(
                  path === route.href &&
                    "bg-blue-3 hover:bg-blue-4 dark:hover:bg-blue-4 text-blue-9"
                )}
                disabled={route.disabled}
              >
                {createElement(route.icon)} {route.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <ul className="p-6">
        <h6 className="text-sm text-black-10 dark:text-white-10 pl-4 pb-2">Minhas redes</h6>
        {socialMedia.map((route) => (
          <li key={route.title}>
            <Link href={route.href}>
              <Button variant="nav" iconPos="before" disabled={route.disabled}>
                {createElement(route.icon)} {route.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      {isMobile && (
        <Button
          size="icon"
          variant="secondary"
          className="absolute -right-10 border top-6 bg-white-12 dark:bg-black-12 hover:bg-white-10 dark:hover:bg-black-10 backdrop-blur-sm overflow-hidden rounded-l-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <AnimatePresence mode="wait">
            {showMenu && (
              <IconContainer key="chevron-right">
                <ChevronLeft />
              </IconContainer>
            )}
            {!showMenu && (
              <IconContainer key="menu">
                <Menu />
              </IconContainer>
            )}
          </AnimatePresence>
        </Button>
      )}
    </motion.nav>
  )
}
