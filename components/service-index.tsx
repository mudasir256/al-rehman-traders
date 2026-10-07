"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/section-intro";

export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="wrap">
        <SectionIntro index="01" label="Services" title="Asked for every week.">
          Flex and panaflex, light, letters, neon, fabric, offset, flags,
          campaigns, and the mugs and diaries people keep.
        </SectionIntro>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="border-b border-ink/15 lg:col-span-7">
            {services.map((service, index) => {
              const selected = index === active;
              return (
                <div key={service.id} className="border-t border-ink/15">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={(event) => {
                      if (event.currentTarget.matches(":hover") && window.matchMedia("(hover: hover)").matches) {
                        setActive(index);
                      }
                    }}
                    onFocus={() => setActive(index)}
                    aria-pressed={selected}
                    className="grid w-full grid-cols-[2.4rem_1fr] items-baseline gap-x-4 py-4 text-left md:grid-cols-[2.6rem_1fr_auto]"
                  >
                    <span
                      className={cn(
                        "font-mono text-[11px] tracking-widest",
                        selected ? "text-clay-deep" : "text-muted",
                      )}
                    >
                      {service.index}
                    </span>
                    <span
                      className={cn(
                        "font-sans text-[1.65rem] tracking-tight transition-transform duration-200 md:text-3xl",
                        selected && "translate-x-1 text-espresso",
                      )}
                    >
                      {service.name}
                    </span>
                    <span className="hidden text-right font-serif text-base italic text-muted md:block">
                      {service.short}
                    </span>
                  </button>
                  {selected ? (
                    <div className="pb-5 pl-[3.4rem] lg:hidden">
                      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="font-serif leading-relaxed text-ink/80">{service.summary}</p>
                      <Link
                        href={`/services#${service.id}`}
                        className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-espresso"
                      >
                        Full note →
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <aside className="hidden lg:sticky lg:top-28 lg:col-span-5 lg:block lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-lg bg-paper-2"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-deep">
                  {current.index} / {String(services.length).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-sans text-4xl tracking-tight">{current.name}</h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-ink/80">
                  {current.summary}
                </p>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  On the bench
                </p>
                <p className="mt-2 font-serif leading-relaxed">{current.materials}</p>
                <Link
                  href={`/services#${current.id}`}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-espresso"
                >
                  Full note <span aria-hidden>→</span>
                </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
