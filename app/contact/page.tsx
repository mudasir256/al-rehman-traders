import type { Metadata } from "next";
import Image from "next/image";
import { Branches } from "@/components/branches";
import { ContactForm, FaqList, PhoneStack } from "@/components/contact-block";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call 0325-3500097 or the CEO line 0300-4466125. Workshops at Lakshmi Chowk and Scheme Mor, Lahore.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="wrap pb-6 pt-14 md:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Contact · Lahore
        </p>
        <h1 className="mt-4 max-w-[12ch] font-sans text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          The desk picks up.
        </h1>
      </header>

      <div className="wrap">
        <div className="relative aspect-[16/7] overflow-hidden rounded-lg">
          <Image
            src="/photos/desk.jpg"
            alt="The workshop desk, with paper samples and a telephone"
            fill
            priority
            sizes="(min-width: 768px) 76rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="wrap grid gap-14 py-12 lg:grid-cols-2 lg:gap-20 lg:py-16">
        <PhoneStack />
        <ContactForm />
      </section>

      <section className="border-t border-ink/15">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Before you visit
            </p>
            <h2 className="mt-4 font-sans text-4xl tracking-tight">A few practical answers.</h2>
          </div>
          <div className="border-t border-ink/15 lg:col-span-8">
            <FaqList />
          </div>
        </div>
      </section>

      <Branches sequenced={false} />
    </main>
  );
}
