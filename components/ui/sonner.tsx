"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-green-500" />,
        info: <InfoIcon className="size-4 text-blue-500" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-500" />,
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-muted-foreground" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "16px",
          "--toast-shadow": "0 8px 32px -4px rgb(0 0 0 / 0.12), 0 2px 8px -2px rgb(0 0 0 / 0.08)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "group/toast !rounded-2xl !border !border-border/60 !bg-popover/95 !text-[14px] !font-medium !text-popover-foreground supports-backdrop-filter:!backdrop-blur-xl",
          title: "!text-[14px] !font-semibold !tracking-tight",
          description: "!text-[13px] !text-muted-foreground",
          actionButton:
            "!rounded-full !bg-primary !px-4 !text-[13px] !font-medium !text-primary-foreground",
          cancelButton:
            "!rounded-full !bg-muted !px-4 !text-[13px] !font-medium !text-muted-foreground",
          closeButton:
            "!rounded-full !border-border/60 !bg-popover hover:!bg-muted",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
