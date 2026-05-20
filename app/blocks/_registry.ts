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
];

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}

export function blocksByCategory(category: string) {
  return blocks.filter((b) => b.category === category && b.status === "ready");
}
