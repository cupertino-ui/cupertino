"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="outline" onClick={() => toast("File saved successfully.")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Changes saved.", {
            description: "Your profile has been updated.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Something went wrong.", {
            description: "Please try again later.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Update available.", {
            description: "A new version is ready to install.",
          })
        }
      >
        Info
      </Button>
    </div>
  )
}
