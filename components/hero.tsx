"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phones, services, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

function emptySubscribe() {
  return () => {};
}

const facts = [
  {
    k: "On the bench",
    v: String(services.length).padStart(2, "0"),
    d: "services we run every week",
  },
  {
    k: "Workshops",
    v: "02",
    d: "Lakshmi Chowk and Scheme Mor",
  },
  {
    k: "The desk",
    v: phones.desk.display,
    d: phones.desk.label,
    href: `tel:${phones.desk.tel}`,
  },
  {
    k: "CEO",
    v: phones.ceo.display,
    d: "When the job needs an owner",
    href: `tel:${phones.ceo.tel}`,
  },
];

function ticketDateSnapshot() {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());
}

function ticketDateServer() {
  return "—";
}

export function Hero() {
  const ticketDate = useSyncExternalStore(
    emptySubscribe,
    ticketDateSnapshot,
    ticketDateServer,
  );

  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-4 hidden md:block">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-ink/25" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-ink/25" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-ink/25" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-ink/25" />
      </div>

      <div className="wrap grid items-center gap-12 pb-14 pt-12 md:pb-16 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Lahore · Printing & advertisement
          </p>
          <h1 className="mt-6 max-w-[11ch] text-balance font-sans text-[clamp(3.15rem,7.3vw,6.6rem)] font-medium leading-[0.88] tracking-[-0.045em]">
            Printing and signage, cut for the <span className="mark">street</span>.
          </h1>
          <p className="mt-8 max-w-[38ch] font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
            Flex, backlight boards, neon, 3D letters, screen and offset. Mugs,
            flags, and signs made from your own idea. Two workshops in Lahore.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp the desk
              </a>
            </Button>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]"
            >
              See the bench
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="relative lg:col-span-5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[5/4] lg:aspect-[3/4]">
            <Image
              src="/photos/hero.jpg"
              alt="Checking a fresh print on the workshop table"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            className="relative z-10 mx-3 -mt-16 rounded-lg border border-ink/10 bg-[#fbf7f1] px-5 py-5 shadow-[0_18px_40px_rgba(42,33,28,0.12)] md:mx-6 md:px-6"
            aria-label="Sample job ticket"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Job ticket</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {ticketDate}
              </p>
            </div>
            <dl className="mt-1">
              {[
                ["Client", "Open — tell us the shop"],
                ["Material", "Flex, acrylic, neon, paper"],
                ["Quantity", "One fascia, or a campaign"],
                ["Workshop", "Lakshmi Chowk · Scheme Mor"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-dashed border-ink/20 py-3 sm:grid-cols-[6.5rem_1fr] sm:items-baseline sm:gap-3"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {label}
                  </dt>
                  <dd className="font-serif text-[15px] leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`tel:${phones.desk.tel}`}
              className="mt-4 flex items-baseline justify-between gap-4 bg-espresso px-4 py-3 text-paper"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay">
                Ask the desk
              </span>
              <span className="font-sans text-lg tracking-tight">{phones.desk.display}</span>
            </a>
          </div>
        </motion.aside>
      </div>

      <div className="border-t border-ink/15">
        <dl className="wrap grid grid-cols-2 md:grid-cols-4">
          {facts.map((fact, index) => {
            const body = (
              <>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {fact.k}
                </dt>
                <dd className="mt-2 font-sans text-xl tracking-tight md:text-[1.65rem]">
                  {fact.v}
                </dd>
                <dd className="mt-1 font-serif text-sm text-ink/70">{fact.d}</dd>
              </>
            );
            return (
              <div
                key={fact.k}
                className={`px-0 py-6 md:px-6 ${index % 2 === 1 ? "" : "pr-4"} ${
                  index > 0 ? "md:border-l md:border-ink/15" : ""
                } ${index >= 2 ? "border-t border-ink/15 md:border-t-0" : ""}`}
              >
                {"href" in fact && fact.href ? (
                  <a href={fact.href} className="block hover:text-espresso">
                    {body}
                  </a>
                ) : (
                  body
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
