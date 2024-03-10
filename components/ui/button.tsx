import cn from "@/utils/cn"
import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"

const style = cva(
  "flex rounded-lg justify-center items-center gap-2 font-semibold focus-visible:outline-none focus-visible:ring-2 ring-black-2 dark:ring-white-6 disabled:opacity-50 disabled:pointer-events-none transition-colors px-4 py-2",
  {
    variants: {
      variant: {
        default: "hover:bg-black-2 dark:hover:bg-white-2",
        nav: "hover:bg-black-2 dark:hover:bg-white-2 w-full justify-start",
      },
      size: {
        icon: "h-10 w-10 p-0",
        default: "text-base",
        small: "text-sm",
        large: "text-lg",
      },
      iconPos: {
        before: "pl-3 pr-4 py-2",
        after: "pl-4 pr-3 py-2",
      },
    },
  }
)

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof style> {
  children: React.ReactNode
}

export const Button = ({
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
