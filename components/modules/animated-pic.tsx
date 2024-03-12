"use client"

import cn from "@/utils/cn"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export const AnimatedPic = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  const [showMask, setShowMask] = useState(false)
  const [mousePositionOnImg, setMousePositionOnImg] = useState({
    x: 0,
    y: 0,
  })

  function updateMousePosition(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //@ts-ignore
    const { layerX, layerY } = event.nativeEvent
    setMousePositionOnImg({ x: layerX, y: layerY })
  }

  return (
    <motion.div
      className={cn("relative border z-50 rounded-lg w-full aspect-square", className)}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setShowMask(true)}
      onMouseLeave={() => setShowMask(false)}
    >
      <Image src={src} fill={true} alt={alt} className="rounded-lg object-cover" />
      <div
        className="absolute inset-0 backdrop-grayscale backdrop-contrast-125 object-cover rounded-lg z-40"
        style={{ maskImage: `url(#${src})` }}
      />
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <mask id={src}>
            <rect width="100%" height="100%" fill="#FFFFFF" />
            <motion.circle
              fill="#000"
              r="40%"
              className="blur-2xl fixed top-0 left-0"
              style={{
                x: mousePositionOnImg.x,
                y: mousePositionOnImg.y,
              }}
              initial={{ opacity: 0 }}
              animate={showMask ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </mask>
        </defs>
      </svg>

      {/* <div className="absolute bg-white-12 dark:bg-black-12 inset-0 w-full h-full rounded-lg border border-dashed left-4 top-4 bg-texture-black dark:bg-texture-white -z-10" /> */}
    </motion.div>
  )
}
