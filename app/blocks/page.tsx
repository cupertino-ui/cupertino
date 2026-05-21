import Link from "next/link";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { Button } from "@/components/ui/button";
import { BlockPreview } from "./_components/block-preview";
import { BlockTabs } from "./_components/block-tabs";
import { CATEGORIES, blocks, blocksByCategory } from "./_registry";

export const metadata = {
  title: "Blocks — Cupertino UI",
  description:
    "Apple HIG–styled blocks. Copy and paste into your apps. Works with all React frameworks.",
};

export default async function BlocksPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category && CATEGORIES.some((c) => c.slug === category)
    ? category
    : "featured";

  const list =
    active === "featured" ? blocks.filter((b) => b.status === "ready") : blocksByCategory(active);

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10">
            <p className="text-[13px] font-medium text-system-blue">Blocks</p>
            <h1 className="mt-3 max-w-3xl text-[44px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[64px]">
              Building blocks
              <br />
              for the web.
            </h1>
            <p className="mt-6 max-w-2xl text-[19px] leading-[1.5] text-muted-foreground">
              Apple-flavored compositions built from Cupertino primitives. Copy
              and paste into your apps — same shadcn API, drop-in for any React
              framework.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/blocks?category=sidebar#browse">Browse Blocks</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs#components">View Components</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="browse" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <BlockTabs categories={CATEGORIES} active={active} />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl space-y-10 px-6 py-10 lg:px-10">
            {list.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center">
                <p className="text-[15px] font-medium">Coming soon</p>
                <p className="mt-2 text-[13.5px] text-muted-foreground">
                  Blocks in this category haven&rsquo;t shipped yet.
                </p>
              </div>
            ) : (
              list.map((block) => (
                <BlockPreview
                  key={block.slug}
                  slug={block.slug}
                  title={block.title}
                  installCommand={block.installCommand}
                />
              ))
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
