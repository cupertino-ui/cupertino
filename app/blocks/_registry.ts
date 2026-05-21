export type Block = {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: "login" | "signup" | "sidebar" | "featured";
  installCommand: string;
  status: "ready" | "planned";
};

export const CATEGORIES: { slug: string; label: string }[] = [
  { slug: "featured", label: "Featured" },
  { slug: "sidebar", label: "Sidebar" },
  { slug: "login", label: "Login" },
  { slug: "signup", label: "Signup" },
];

export const blocks: Block[] = [
  // Login
  {
    slug: "login-01",
    name: "Login 01",
    title: "A simple login form",
    description:
      "Centered card with email, password, and a secondary OAuth action.",
    category: "login",
    installCommand: "npx shadcn add login-01",
    status: "ready",
  },
  {
    slug: "login-02",
    name: "Login 02",
    title: "Login with image",
    description:
      "Split-screen layout with a login form on the left and a decorative image panel on the right.",
    category: "login",
    installCommand: "npx shadcn add login-02",
    status: "ready",
  },
  {
    slug: "login-03",
    name: "Login 03",
    title: "Login with logo header",
    description:
      "Centered muted-background layout with a branded logo header above the login form.",
    category: "login",
    installCommand: "npx shadcn add login-03",
    status: "ready",
  },
  {
    slug: "login-04",
    name: "Login 04",
    title: "Wide login form",
    description:
      "Muted background with a responsive-width form that expands to three columns on desktop.",
    category: "login",
    installCommand: "npx shadcn add login-04",
    status: "ready",
  },
  {
    slug: "login-05",
    name: "Login 05",
    title: "Minimal login",
    description:
      "Clean, minimal centered form on the default background with no card chrome.",
    category: "login",
    installCommand: "npx shadcn add login-05",
    status: "ready",
  },
  // Signup
  {
    slug: "signup-01",
    name: "Signup 01",
    title: "Sign up form",
    description:
      "Card with a two-column layout showing a signup form alongside a welcome image.",
    category: "signup",
    installCommand: "npx shadcn add signup-01",
    status: "ready",
  },
  // Sidebar
  {
    slug: "sidebar-01",
    name: "Sidebar 01",
    title: "Basic app sidebar",
    description:
      "Standard collapsible sidebar with nav groups, projects, and user avatar.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-01",
    status: "ready",
  },
  {
    slug: "sidebar-02",
    name: "Sidebar 02",
    title: "Scrollable sidebar",
    description:
      "Sidebar with a sticky header and a scrollable list of content rows.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-02",
    status: "ready",
  },
  {
    slug: "sidebar-03",
    name: "Sidebar 03",
    title: "Sidebar with projects",
    description:
      "Collapsible sidebar featuring nav groups, project links, and user footer.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-03",
    status: "ready",
  },
  {
    slug: "sidebar-04",
    name: "Sidebar 04",
    title: "Wide sidebar",
    description: "Standard sidebar with an expanded custom width of 19rem.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-04",
    status: "ready",
  },
  {
    slug: "sidebar-05",
    name: "Sidebar 05",
    title: "Inset sidebar",
    description: "Inset-style sidebar that floats inside the content area.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-05",
    status: "ready",
  },
  {
    slug: "sidebar-06",
    name: "Sidebar 06",
    title: "Sidebar with icons",
    description: "Compact sidebar variant with icon-only navigation items.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-06",
    status: "ready",
  },
  {
    slug: "sidebar-07",
    name: "Sidebar 07",
    title: "Collapsible sidebar",
    description:
      "Sidebar with an animated header height transition when collapsed to icon mode.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-07",
    status: "ready",
  },
  {
    slug: "sidebar-08",
    name: "Sidebar 08",
    title: "Borderless header sidebar",
    description:
      "Sidebar with a header that has no bottom border for a seamless look.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-08",
    status: "ready",
  },
  {
    slug: "sidebar-09",
    name: "Sidebar 09",
    title: "Inbox sidebar",
    description:
      "Wide sidebar (350px) with inbox-style navigation and a scrollable message list.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-09",
    status: "ready",
  },
  {
    slug: "sidebar-10",
    name: "Sidebar 10",
    title: "Sidebar with actions",
    description:
      "Sidebar layout with an action toolbar in the header alongside the breadcrumb.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-10",
    status: "ready",
  },
  {
    slug: "sidebar-11",
    name: "Sidebar 11",
    title: "File tree sidebar",
    description:
      "Sidebar with a three-level file path breadcrumb, suited for file-explorer UIs.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-11",
    status: "ready",
  },
  {
    slug: "sidebar-12",
    name: "Sidebar 12",
    title: "Calendar sidebar",
    description:
      "Sidebar with a five-column calendar grid as the main content area.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-12",
    status: "ready",
  },
  {
    slug: "sidebar-13",
    name: "Sidebar 13",
    title: "Settings dialog",
    description:
      "Fullscreen-centered settings dialog — a sidebar-driven modal pattern.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-13",
    status: "ready",
  },
  {
    slug: "sidebar-14",
    name: "Sidebar 14",
    title: "Right sidebar",
    description:
      "Sidebar anchored to the right edge with a flipped trigger button.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-14",
    status: "ready",
  },
  {
    slug: "sidebar-15",
    name: "Sidebar 15",
    title: "Dual sidebar",
    description:
      "Layout with both a left and a right sidebar for complex navigation.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-15",
    status: "ready",
  },
  {
    slug: "sidebar-16",
    name: "Sidebar 16",
    title: "Sidebar with top header",
    description:
      "Sticky top header bar stacked above the sidebar and content layout.",
    category: "sidebar",
    installCommand: "npx shadcn add sidebar-16",
    status: "ready",
  },
];

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}

export function blocksByCategory(category: string) {
  return blocks.filter((b) => b.category === category && b.status === "ready");
}
