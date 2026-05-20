import { Showcase } from "@/app/_components/showcase";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";

export function TypographyDoc() {
  return (
    <Showcase
      id="typography"
      name="Typography"
      description="Apple HIG type scale — SF Pro-style sizing (40/28/22/17/15/13pt), tight tracking on display sizes, semibold for headings."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/typography.json"
      code={`import { TypographyH1, TypographyH2, TypographyP, TypographyLead, TypographyMuted, TypographyInlineCode } from "@/components/ui/typography"

<TypographyH1>The quick brown fox</TypographyH1>
<TypographyLead>Jumps over the lazy dog.</TypographyLead>
<TypographyP>Paragraph at 15pt with relaxed leading.</TypographyP>
<TypographyMuted>Secondary 13pt muted text.</TypographyMuted>`}
      preview={
        <div className="mx-auto w-full max-w-xl space-y-5">
          <TypographyH1>The quick brown fox</TypographyH1>
          <TypographyH2>Jumps over the lazy dog</TypographyH2>
          <TypographyH3>Section heading</TypographyH3>
          <TypographyH4>Subsection</TypographyH4>
          <TypographyLead>
            A lead paragraph introduces a section with lighter weight and
            tighter tracking.
          </TypographyLead>
          <TypographyP>
            Body copy renders at 15pt with relaxed line height for readable
            paragraphs. Inline code looks like{" "}
            <TypographyInlineCode>npm install</TypographyInlineCode>.
          </TypographyP>
          <TypographyLarge>Large accent text</TypographyLarge>
          <TypographySmall>Small caption text</TypographySmall>
          <TypographyMuted>
            Muted secondary text for hints and descriptions.
          </TypographyMuted>
          <TypographyBlockquote>
            &ldquo;Design is not just what it looks like and feels like. Design
            is how it works.&rdquo; — Steve Jobs
          </TypographyBlockquote>
          <TypographyList>
            <li>First list item with proper marker</li>
            <li>Second list item with relaxed leading</li>
            <li>Third list item</li>
          </TypographyList>
        </div>
      }
    />
  );
}
