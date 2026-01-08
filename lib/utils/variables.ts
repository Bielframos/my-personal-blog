import { X, Zerei } from "@/lib/components/ui/icons"
import { Cpu, Github, Home, Instagram, Network, Newspaper } from "lucide-react"

export const SUB_PAGES = [
  { icon: Home, title: "Início", href: "/", disabled: false },
  { icon: Newspaper, title: "Feed", href: "/feed", disabled: false },
  { icon: Cpu, title: "Setup", href: "/setup", disabled: false },
  { icon: Zerei, title: "Zetho", href: "https://www.zetho.app", disabled: false },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    icon: Github,
    title: "Github",
    href: "https://github.com/Bielframos",
    disabled: false,
  },
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

// --------------------------------------- //

export const FEED_CATEGORIES = ["conhecimento", "hobby"]

// --------------------------------------- //

export const NETWORK_LINKS = [
  {
    imageUrl: "/network/fluido-logo.png",
    name: "Fluido Design",
    workWith: "Dev Web, Dev Mobile e mais",
    siteUrl: "https://fluido.design/",
  },
  {
    imageUrl: "/network/ande-logo.png",
    name: "ANDE Studio",
    workWith: "Brand design, Namming",
    siteUrl: "https://andestudio.art/",
  },
]

// --------------------------------------- //

export const OG_IMAGES = {
  home: "https://res.cloudinary.com/adstrito/image/upload/v1710868804/Site%20pessoal/lfuyln8a1xbfgb9atnhx.webp",
  feed: "https://res.cloudinary.com/adstrito/image/upload/v1710868804/Site%20pessoal/stiizkxdknwuoc11ppca.webp",
  zerei:
    "https://res.cloudinary.com/adstrito/image/upload/v1710868805/Site%20pessoal/nmcyu6e1gki3gjpoqcge.webp",
  network:
    "https://res.cloudinary.com/adstrito/image/upload/v1710868804/Site%20pessoal/bydrdbpsvm5xqzywq9xv.webp",
  setup:
    "https://res.cloudinary.com/adstrito/image/upload/v1710868804/Site%20pessoal/hbzkr4vcttjhwqs7hbl4.webp",
}
