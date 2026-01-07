import cn from "@/lib/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const style = cva(
  "flex rounded-lg justify-center items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 ring-black-2 dark:ring-white-6 transition-colors px-3 py-1 w-fit disabled:bg-black-1 dark:disabled:bg-white-1 disabled:text-black-12 dark:disabled:text-white-12 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-black-12 dark:bg-white-12 text-white-12 dark:text-black-12 hover:bg-black-1 dark:hover:bg-white-1 hover:text-black-12 dark:hover:text-white-12",
        secondary: "bg-black-2 dark:bg-white-2 hover:bg-black-3 dark:hover:bg-white-3",
      },
      size: {
        icon: "h-10 w-10 p-0",
        default: "text-base",
        small: "text-sm",
        large: "text-lg",
      },
      iconPos: {
        before: "pl-2 pr-3",
        after: "pl-3 pr-2",
      },
    },
  }
)

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof style> {
  children: React.ReactNode
}

const Button = ({
  children,
  variant = "default",
  size = "default",
  iconPos = undefined,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        style({
          variant: variant,
          size: size,
          iconPos: iconPos,
          className: className,
        })
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

