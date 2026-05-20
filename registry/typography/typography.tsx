import * as React from "react"

import { cn } from "@/lib/utils"

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="typography-h1"
      className={cn(
        "text-[40px] leading-[1.05] font-semibold tracking-[-0.022em]",
        className
      )}
      {...props}
    />
  )
}

function TypographyH2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="typography-h2"
      className={cn(
        "text-[28px] leading-[1.1] font-semibold tracking-[-0.018em]",
        className
      )}
      {...props}
    />
  )
}

function TypographyH3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="typography-h3"
      className={cn(
        "text-[22px] leading-[1.15] font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function TypographyH4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="typography-h4"
      className={cn(
        "text-[17px] leading-snug font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function TypographyP({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-p"
      className={cn(
        "text-[15px] leading-relaxed text-foreground/90",
        className
      )}
      {...props}
    />
  )
}

function TypographyLead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-lead"
      className={cn(
        "text-[20px] leading-relaxed font-light tracking-tight text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function TypographyLarge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="typography-large"
      className={cn(
        "text-[17px] font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      data-slot="typography-small"
      className={cn(
        "text-[13px] font-medium tracking-tight leading-none",
        className
      )}
      {...props}
    />
  )
}

function TypographyMuted({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-muted"
      className={cn("text-[13px] text-muted-foreground", className)}
      {...props}
    />
  )
}

function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      data-slot="typography-blockquote"
      className={cn(
        "border-l-2 border-border pl-4 text-[15px] italic text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      data-slot="typography-inline-code"
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TypographyList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="typography-list"
      className={cn(
        "ml-6 list-disc space-y-1.5 text-[15px] leading-relaxed text-foreground/90 marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyList,
}
