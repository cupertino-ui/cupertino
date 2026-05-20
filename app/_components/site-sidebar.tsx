type Item = { label: string; href: string; badge?: string };
type Group = { title: string; items: Item[] };

const GROUPS: Group[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "#introduction" },
      { label: "Installation", href: "#installation" },
      { label: "Philosophy", href: "#philosophy" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Badge", href: "#badge" },
      { label: "Button", href: "#button" },
      { label: "Card", href: "#card" },
      { label: "Input", href: "#input" },
      { label: "Kbd", href: "#kbd" },
      { label: "Label", href: "#label" },
      { label: "Separator", href: "#separator" },
      { label: "Sheet", href: "#sheet" },
      { label: "Switch", href: "#switch" },
      { label: "Tabs", href: "#tabs" },
      { label: "Tooltip", href: "#tooltip" },
      { label: "Dialog", href: "#dialog", badge: "Soon" },
    ],
  },
];

export function SiteSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border bg-background py-8 pr-4 pl-6 lg:block">
      <nav className="space-y-7">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <div className="mb-2 px-3 text-[12px] font-semibold text-foreground">
              {group.title}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-3 py-1.5 text-[13.5px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-muted px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground ring-1 ring-border">
                        {item.badge}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
