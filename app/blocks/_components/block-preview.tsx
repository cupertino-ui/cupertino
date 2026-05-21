"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
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

const DEVICE_WIDTHS: Record<Device, number> = {
  desktop: 1400,
  tablet: 768,
  mobile: 390,
};

const VISIBLE_HEIGHT = 650;

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      setScale(Math.min(1, el.offsetWidth / DEVICE_WIDTHS[device]));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [device]);

  const iframeWidth = DEVICE_WIDTHS[device];
  const iframeHeight = scale ? Math.ceil(VISIBLE_HEIGHT / scale) : VISIBLE_HEIGHT;

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
        <div className="bg-muted/30 p-4">
          <div
            ref={containerRef}
            className="overflow-hidden rounded-xl border border-border bg-background"
            style={{ height: VISIBLE_HEIGHT }}
          >
            <div
                style={{
                  width: iframeWidth,
                  height: iframeHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <iframe
                  key={`${iframeKey}-${device}`}
                  src={`/blocks/${slug}?embed=1`}
                  title={title}
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                />
            </div>
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
