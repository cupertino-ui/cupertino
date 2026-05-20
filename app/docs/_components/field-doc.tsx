import { Showcase } from "@/app/_components/showcase";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDoc() {
  return (
    <Showcase
      id="field"
      name="Field"
      description="Apple HIG form field wrapper — composes label, control, description, and error in a single semantic group with consistent spacing."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/field.json"
      code={`import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" placeholder="name@example.com" />
    <FieldDescription>We&#39;ll never share your email.</FieldDescription>
  </Field>
  <Field data-invalid>
    <FieldLabel htmlFor="pw">Password</FieldLabel>
    <Input id="pw" type="password" aria-invalid />
    <FieldError>Must be at least 8 characters.</FieldError>
  </Field>
</FieldGroup>`}
      preview={
        <FieldGroup className="mx-auto w-full max-w-sm">
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input
              id="field-email"
              type="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll never share your email.
            </FieldDescription>
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="field-pw">Password</FieldLabel>
            <Input id="field-pw" type="password" aria-invalid />
            <FieldError>Must be at least 8 characters.</FieldError>
          </Field>
        </FieldGroup>
      }
    />
  );
}
