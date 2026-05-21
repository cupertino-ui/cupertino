export type DocsGroupTitle = "Getting Started" | "Components";

export type DocsEntry = {
  slug: string;
  label: string;
  group: DocsGroupTitle;
  badge?: string;
};

export const DOCS_ENTRIES: DocsEntry[] = [
  { slug: "introduction", label: "Introduction", group: "Getting Started" },
  { slug: "installation", label: "Installation", group: "Getting Started" },
  { slug: "philosophy", label: "Philosophy", group: "Getting Started" },

  { slug: "accordion", label: "Accordion", group: "Components" },
  { slug: "alert", label: "Alert", group: "Components" },
  { slug: "alert-dialog", label: "Alert Dialog", group: "Components" },
  { slug: "aspect-ratio", label: "Aspect Ratio", group: "Components" },
  { slug: "avatar", label: "Avatar", group: "Components" },
  { slug: "badge", label: "Badge", group: "Components" },
  { slug: "breadcrumb", label: "Breadcrumb", group: "Components" },
  { slug: "button", label: "Button", group: "Components" },
  { slug: "button-group", label: "Button Group", group: "Components" },
  { slug: "calendar", label: "Calendar", group: "Components" },
  { slug: "card", label: "Card", group: "Components" },
  { slug: "carousel", label: "Carousel", group: "Components" },
  { slug: "chart", label: "Chart", group: "Components" },
  { slug: "checkbox", label: "Checkbox", group: "Components" },
  { slug: "collapsible", label: "Collapsible", group: "Components" },
  { slug: "combobox", label: "Combobox", group: "Components" },
  { slug: "command", label: "Command", group: "Components" },
  { slug: "context-menu", label: "Context Menu", group: "Components" },
  { slug: "data-table", label: "Data Table", group: "Components" },
  { slug: "date-picker", label: "Date Picker", group: "Components" },
  { slug: "dialog", label: "Dialog", group: "Components" },
  { slug: "direction", label: "Direction", group: "Components" },
  { slug: "drawer", label: "Drawer", group: "Components" },
  { slug: "dropdown-menu", label: "Dropdown Menu", group: "Components" },
  { slug: "empty", label: "Empty", group: "Components" },
  { slug: "field", label: "Field", group: "Components" },
  { slug: "hover-card", label: "Hover Card", group: "Components" },
  { slug: "input", label: "Input", group: "Components" },
  { slug: "input-group", label: "Input Group", group: "Components" },
  { slug: "input-otp", label: "Input OTP", group: "Components" },
  { slug: "item", label: "Item", group: "Components" },
  { slug: "kbd", label: "Kbd", group: "Components" },
  { slug: "label", label: "Label", group: "Components" },
  { slug: "menubar", label: "Menubar", group: "Components" },
  { slug: "native-select", label: "Native Select", group: "Components" },
  { slug: "navigation-menu", label: "Navigation Menu", group: "Components" },
  { slug: "pagination", label: "Pagination", group: "Components" },
  { slug: "popover", label: "Popover", group: "Components" },
  { slug: "progress", label: "Progress", group: "Components" },
  { slug: "radio-group", label: "Radio Group", group: "Components" },
  { slug: "resizable", label: "Resizable", group: "Components" },
  { slug: "scroll-area", label: "Scroll Area", group: "Components" },
  { slug: "select", label: "Select", group: "Components" },
  { slug: "separator", label: "Separator", group: "Components" },
  { slug: "sheet", label: "Sheet", group: "Components" },
  { slug: "sidebar", label: "Sidebar", group: "Components" },
  { slug: "skeleton", label: "Skeleton", group: "Components" },
  { slug: "slider", label: "Slider", group: "Components" },
  { slug: "sonner", label: "Sonner", group: "Components" },
  { slug: "spinner", label: "Spinner", group: "Components" },
  { slug: "switch", label: "Switch", group: "Components" },
  { slug: "table", label: "Table", group: "Components" },
  { slug: "tabs", label: "Tabs", group: "Components" },
  { slug: "textarea", label: "Textarea", group: "Components" },
  { slug: "toast", label: "Toast", group: "Components" },
  { slug: "toggle", label: "Toggle", group: "Components" },
  { slug: "toggle-group", label: "Toggle Group", group: "Components" },
  { slug: "tooltip", label: "Tooltip", group: "Components" },
  { slug: "typography", label: "Typography", group: "Components" },
];

export type DocNavItem = { label: string; href: string; badge?: string };
export type DocNavGroup = { title: DocsGroupTitle; items: DocNavItem[] };

export const DOC_NAV_GROUPS: DocNavGroup[] = (() => {
  const groups = new Map<DocsGroupTitle, DocNavGroup>();
  for (const entry of DOCS_ENTRIES) {
    if (!groups.has(entry.group)) {
      groups.set(entry.group, { title: entry.group, items: [] });
    }
    groups.get(entry.group)!.items.push({
      label: entry.label,
      href: `#${entry.slug}`,
      ...(entry.badge ? { badge: entry.badge } : {}),
    });
  }
  return Array.from(groups.values());
})();

export const COMPONENT_SLUGS: string[] = DOCS_ENTRIES.filter(
  (e) => e.group === "Components"
).map((e) => e.slug);
