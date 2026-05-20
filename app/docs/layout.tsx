import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { SiteSidebar } from "@/app/_components/site-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <SiteSidebar />

        <main className="min-w-0 flex-1 px-6 py-10 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
