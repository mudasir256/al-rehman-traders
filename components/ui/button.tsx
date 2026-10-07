import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "rounded-md bg-espresso text-paper hover:bg-espresso-deep",
        clay: "rounded-md bg-clay text-paper hover:bg-clay-deep",
        outline:
          "rounded-md border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
        paper: "rounded-md bg-paper text-espresso hover:bg-white",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4",
        lg: "h-14 px-7 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
