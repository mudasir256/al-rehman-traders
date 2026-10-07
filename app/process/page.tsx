import type { Metadata } from "next";
import Link from "next/link";
import { Process } from "@/components/process";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a job moves at Al-Rehman Traders: the brief, a proof, the bench, then out the door. You see the layout before the material is spent.",
};

export default function ProcessPage() {
  return (
    <main>
      <header className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Process · Lahore
        </p>
        <h1 className="mt-4 max-w-[12ch] font-sans text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          How a job moves.
        </h1>
        <p className="mt-6 max-w-[42ch] font-serif text-xl leading-relaxed text-ink/75">
          Four steps. You see a proof before we spend the material.
        </p>
      </header>
      <Process sequenced={false} intro={false} />
      <section className="bg-paper">
        <div className="wrap flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-deep">
              Next
            </p>
            <h2 className="mt-3 max-w-[16ch] font-sans text-4xl tracking-tight md:text-5xl">
              Send the size and the day.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="clay">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp the desk
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact page</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
