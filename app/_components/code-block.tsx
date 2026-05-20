"use client";

import { useState } from "react";

export function CodeBlock({
  label,
  code,
  prompt,
}: {
  label: string;
  code: string;
  prompt?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (insecure context) — fail silently.
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-muted/40">
      <div className="flex items-center justify-between border-b border-border bg-background/50 px-3 py-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          aria-label={copied ? "Copied" : "Copy code"}
          className="rounded px-1.5 py-0.5 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? (
            <span className="text-system-green">Copied</span>
          ) : (
            "Copy"
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed text-foreground">
        <code>
          {prompt ? (
            <span className="select-none text-muted-foreground">{prompt} </span>
          ) : null}
          {code}
        </code>
      </pre>
    </div>
  );
}
