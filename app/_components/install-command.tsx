"use client";

import { useState } from "react";

export function InstallCommand({
  command = "npx shadcn@latest add https://cupertino-ui.vercel.app/r/button.json",
}: {
  command?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (insecure context) — fail silently.
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_-4px_rgba(0,0,0,0.08)]">
      {/* macOS title bar */}
      <div className="relative flex items-center border-b border-border bg-muted/60 px-3 py-2">
        {/* Traffic lights */}
        <div
          className="flex gap-[6px]"
          aria-hidden="true"
        >
          <span className="size-[11px] rounded-full bg-[#ff5f57] ring-1 ring-inset ring-black/10" />
          <span className="size-[11px] rounded-full bg-[#febc2e] ring-1 ring-inset ring-black/10" />
          <span className="size-[11px] rounded-full bg-[#28c840] ring-1 ring-inset ring-black/10" />
        </div>

        {/* Copy */}
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          aria-label={copied ? "Copied" : "Copy command"}
          className="ml-auto rounded px-1.5 py-0.5 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? <span className="text-system-green">Copied</span> : "Copy"}
        </button>
      </div>

      {/* Terminal content */}
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="select-none text-muted-foreground">$ </span>
          {command}
        </code>
      </pre>
    </div>
  );
}
