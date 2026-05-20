import Link from "next/link";
import { notFound } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { blocks, getBlock } from "../_registry";

export function generateStaticParams() {
  return blocks.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = getBlock(slug);
  if (!block) return {};
  return {
    title: `${block.name} — Cupertino Blocks`,
    description: block.description,
  };
}

const BLOCK_RENDERERS: Record<string, () => React.ReactNode> = {
  "login-01": () => (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  ),
};

export default async function BlockPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ embed?: string }>;
}) {
  const { slug } = await params;
  const { embed } = await searchParams;
  const block = getBlock(slug);
  const render = BLOCK_RENDERERS[slug];

  if (!block || !render) notFound();

  if (embed) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-background p-6 text-foreground md:p-10">
        {render()}
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blocks">← Blocks</Link>
          </Button>
          <span className="text-muted-foreground/60">/</span>
          <span className="font-mono text-[13px] text-muted-foreground">
            {block.slug}
          </span>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center p-6 md:p-10">
        {render()}
      </main>
    </div>
  );
}
