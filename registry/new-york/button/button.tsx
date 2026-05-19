import * as React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    primary:     "rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] active:scale-95",
    secondary:   "rounded-full bg-transparent border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary-subtle)] active:scale-95",
    destructive: "rounded-full bg-[var(--color-error)] text-white hover:opacity-90 active:scale-95",
    ghost:       "rounded-lg bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-muted)] active:scale-95",
  },
  size: {
    sm: "h-8 px-4 text-sm",
    md: "h-11 px-6 text-base",   // 44px — HIG minimum
    lg: "h-14 px-8 text-lg",
  },
}

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
}

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <ShadcnButton
      {...props}
      variant="ghost"              // reset shadcn styling
      className={cn(
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        "transition-all duration-200 ease-out focus-visible:ring-[var(--brand-primary)]",
        className
      )}
    />
  )
}