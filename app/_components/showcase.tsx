import { CodeBlock } from "./code-block";
import { InstallCommand } from "./install-command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Showcase({
  id,
  name,
  description,
  install,
  preview,
  code,
}: {
  id: string;
  name: string;
  description: string;
  install: string;
  preview: React.ReactNode;
  code?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <header className="mb-6">
        <h2 className="text-[28px] font-semibold tracking-tight text-foreground">
          {name}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      </header>

      {code ? (
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="flex min-h-[180px] items-center justify-center bg-background px-6 py-12">
                {preview}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock label="Usage" code={code} />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Preview
            </span>
          </div>
          <div className="flex min-h-[180px] items-center justify-center bg-background px-6 py-12">
            {preview}
          </div>
        </div>
      )}

      <div className="mt-4">
        <InstallCommand command={install} />
      </div>
    </section>
  );
}
