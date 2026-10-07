import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionIntro({
  index,
  label,
  title,
  children,
  tone = "ink",
}: {
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
  tone?: "ink" | "paper";
}) {
  return (
    <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-12">
      <p
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.2em] lg:col-span-3",
          tone === "paper" ? "text-clay" : "text-muted",
        )}
      >
        {index ? `${index} — ${label}` : label}
      </p>
      <div className="lg:col-span-8">
        <h2
          className={cn(
            "max-w-[16ch] font-sans text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.035em]",
            tone === "paper" ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
        {children ? (
          <p
            className={cn(
              "mt-5 max-w-[46ch] font-serif text-lg leading-relaxed md:text-xl",
              tone === "paper" ? "text-paper/75" : "text-ink/75",
            )}
          >
            {children}
          </p>
        ) : null}
      </div>
    </div>
  );
}
