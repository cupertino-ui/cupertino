"use client";

import { useState } from "react";
import {
  MonitorIcon,
  TabletIcon,
  SmartphoneIcon,
  RotateCcwIcon,
  MaximizeIcon,
  TerminalIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Device = "desktop" | "tablet" | "mobile";

const DEVICE_WIDTHS: Record<Device, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "390px",
};

export function BlockPreview({
  slug,
  title,
  installCommand,
}: {
  slug: string;
  title: string;
  installCommand: string;
}) {
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const [device, setDevice] = useState<Device>("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-3 py-2">
        <div className="flex items-center gap-1 rounded-lg bg-muted p-0.5">
          <button
            type="button"
            onClick={() => setMode("preview")}
            className={cn(
              "rounded-md px-3 py-1 text-[12.5px] font-medium transition-colors",
              mode === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setMode("code")}
            className={cn(
              "rounded-md px-3 py-1 text-[12.5px] font-medium transition-colors",
              mode === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
        </div>

        <div className="h-5 w-px bg-border" />

        <span className="text-[13px] font-medium">{title}</span>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-0.5 rounded-lg bg-muted p-0.5 sm:flex">
            <DeviceButton
              active={device === "desktop"}
              onClick={() => setDevice("desktop")}
              label="Desktop"
            >
              <MonitorIcon className="size-3.5" />
            </DeviceButton>
            <DeviceButton
              active={device === "tablet"}
              onClick={() => setDevice("tablet")}
              label="Tablet"
            >
              <TabletIcon className="size-3.5" />
            </DeviceButton>
            <DeviceButton
              active={device === "mobile"}
              onClick={() => setDevice("mobile")}
              label="Mobile"
            >
              <SmartphoneIcon className="size-3.5" />
            </DeviceButton>
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIframeKey((k) => k + 1)}
            aria-label="Reload preview"
          >
            <RotateCcwIcon className="size-3.5" />
          </Button>

          <Button variant="ghost" size="icon-sm" asChild aria-label="Open full screen">
            <a href={`/blocks/${slug}`} target="_blank" rel="noopener noreferrer">
              <MaximizeIcon className="size-3.5" />
            </a>
          </Button>

          <div className="hidden items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 font-mono text-[12px] text-muted-foreground md:flex">
            <TerminalIcon className="size-3" />
            <span>{installCommand}</span>
          </div>
        </div>
      </div>

      {mode === "preview" ? (
        <div className="flex justify-center bg-muted/30 p-4">
          <div
            className="overflow-hidden rounded-xl border border-border bg-background transition-[width] duration-300"
            style={{ width: DEVICE_WIDTHS[device], maxWidth: "100%" }}
          >
            <iframe
              key={iframeKey}
              src={`/blocks/${slug}?embed=1`}
              title={title}
              className="h-[680px] w-full"
            />
          </div>
        </div>
      ) : (
        <div className="bg-muted/30 p-6 text-[13px] text-muted-foreground">
          <p>
            Install with the command above, or open the source file at{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-[12.5px]">
              components/{slug.replace(/-\d+$/, "")}-form.tsx
            </code>
            .
          </p>
        </div>
      )}
    </div>
  );
}

function DeviceButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "rounded-md p-1.5 transition-colors",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
