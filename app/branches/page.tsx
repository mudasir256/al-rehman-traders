import type { Metadata } from "next";
import Link from "next/link";
import { Branches } from "@/components/branches";
import { Button } from "@/components/ui/button";
import { phones, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Al-Rehman Traders workshops in Lahore: Royl Park, Lakshmi Chowk, and Hafiz Plaza, Scheme Mor. Call before you visit.",
};

export default function BranchesPage() {
  return (
    <main>
      <header className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Branches · Lahore
        </p>
        <h1 className="mt-4 max-w-[12ch] font-sans text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          Find the desk.
        </h1>
        <p className="mt-6 max-w-[42ch] font-serif text-xl leading-relaxed text-ink/75">
          Two addresses in Lahore. Call {phones.desk.display} before you come,
          so the person with your file is the one at the counter.
        </p>
      </header>
      <Branches sequenced={false} intro={false} />
      <section className="border-t border-ink/15 bg-espresso text-paper">
        <div className="wrap flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay">
              Next
            </p>
            <h2 className="mt-3 max-w-[16ch] font-sans text-4xl tracking-tight md:text-5xl">
              Call, or send the job on WhatsApp.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="clay">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp the desk
              </a>
            </Button>
            <Button asChild variant="paper">
              <Link href="/contact">Contact page</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
