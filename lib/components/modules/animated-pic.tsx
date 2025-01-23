"use client"

import cn from "@/lib/utils/cn"
import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

const AnimatedPic = ({
  src,
  alt,
  fill = false,
  rounded,
  className,
}: {
  src: string
  alt: string
  fill?: boolean
  rounded?: string
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
      className={cn(
        "z-40",
        !fill && "relative w-full aspect-square border",
        rounded ? rounded : "rounded-lg",
        className
      )}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setShowMask(true)}
      onMouseLeave={() => setShowMask(false)}
    >
      <Image
        src={src}
        fill={true}
        alt={alt}
        className={cn("object-cover", rounded ? rounded : "rounded-lg")}
      />
      <div
        className={cn(
          "absolute inset-0 backdrop-grayscale backdrop-contrast-125 object-cover z-40",
          rounded ? rounded : "rounded-lg"
        )}
        style={{ maskImage: `url(#${src})` }}
      />
      <svg width="100%" height="100%" className="absolute inset-0" aria-hidden="true">
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
    </motion.div>
  )
}

export default AnimatedPic

