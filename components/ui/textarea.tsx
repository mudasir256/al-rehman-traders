import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full resize-y border-b border-ink/25 bg-transparent py-3 font-serif text-lg text-ink outline-none transition-colors placeholder:text-muted/80 focus:border-espresso",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
