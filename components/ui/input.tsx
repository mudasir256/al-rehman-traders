import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full border-b border-ink/25 bg-transparent font-serif text-lg text-ink outline-none transition-colors placeholder:text-muted/80 focus:border-espresso",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
