import { SheetClose } from "@/components/ui/sheet";

type Item = { label: string; href: string; badge?: string };
type Group = { title: string; items: Item[] };

export const DOC_NAV_GROUPS: Group[] = [
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
      { label: "Accordion", href: "#accordion" },
      { label: "Alert", href: "#alert" },
      { label: "Alert Dialog", href: "#alert-dialog" },
      { label: "Aspect Ratio", href: "#aspect-ratio" },
      { label: "Avatar", href: "#avatar" },
      { label: "Badge", href: "#badge" },
      { label: "Breadcrumb", href: "#breadcrumb" },
      { label: "Button", href: "#button" },
      { label: "Button Group", href: "#button-group" },
      { label: "Calendar", href: "#calendar" },
      { label: "Card", href: "#card" },
      { label: "Carousel", href: "#carousel" },
      { label: "Chart", href: "#chart" },
      { label: "Checkbox", href: "#checkbox" },
      { label: "Collapsible", href: "#collapsible" },
      { label: "Combobox", href: "#combobox" },
      { label: "Command", href: "#command" },
      { label: "Context Menu", href: "#context-menu" },
      { label: "Data Table", href: "#data-table" },
      { label: "Date Picker", href: "#date-picker" },
      { label: "Dialog", href: "#dialog" },
      { label: "Direction", href: "#direction" },
      { label: "Drawer", href: "#drawer" },
      { label: "Dropdown Menu", href: "#dropdown-menu" },
      { label: "Empty", href: "#empty" },
      { label: "Field", href: "#field" },
      { label: "Hover Card", href: "#hover-card" },
      { label: "Input", href: "#input" },
      { label: "Input Group", href: "#input-group" },
      { label: "Input OTP", href: "#input-otp" },
      { label: "Item", href: "#item" },
      { label: "Kbd", href: "#kbd" },
      { label: "Label", href: "#label" },
      { label: "Menubar", href: "#menubar" },
      { label: "Native Select", href: "#native-select" },
      { label: "Navigation Menu", href: "#navigation-menu" },
      { label: "Pagination", href: "#pagination" },
      { label: "Popover", href: "#popover" },
      { label: "Progress", href: "#progress" },
      { label: "Radio Group", href: "#radio-group" },
      { label: "Resizable", href: "#resizable" },
      { label: "Scroll Area", href: "#scroll-area" },
      { label: "Select", href: "#select" },
      { label: "Separator", href: "#separator" },
      { label: "Sheet", href: "#sheet" },
      { label: "Sidebar", href: "#sidebar" },
      { label: "Skeleton", href: "#skeleton" },
      { label: "Slider", href: "#slider" },
      { label: "Sonner", href: "#sonner" },
      { label: "Spinner", href: "#spinner" },
      { label: "Switch", href: "#switch" },
      { label: "Table", href: "#table" },
      { label: "Tabs", href: "#tabs" },
      { label: "Textarea", href: "#textarea" },
      { label: "Toast", href: "#toast" },
      { label: "Toggle", href: "#toggle" },
      { label: "Toggle Group", href: "#toggle-group" },
      { label: "Tooltip", href: "#tooltip" },
      { label: "Typography", href: "#typography" },
    ],
  },
];

export function SiteSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border bg-background py-8 pr-4 pl-6 lg:block">
      <DocsNavList />
    </aside>
  );
}

export function DocsNavList({
  closeOnSelect = false,
}: {
  closeOnSelect?: boolean;
}) {
  return (
    <nav className="space-y-7">
      {DOC_NAV_GROUPS.map((group) => (
        <div key={group.title}>
          <div className="mb-2 px-3 text-[12px] font-semibold text-foreground">
            {group.title}
          </div>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const Link = (
                <a
                  href={item.href}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-[13.5px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-muted px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground ring-1 ring-border">
                      {item.badge}
                    </span>
                  ) : null}
                </a>
              );

              return (
                <li key={item.href}>
                  {closeOnSelect ? <SheetClose asChild>{Link}</SheetClose> : Link}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
