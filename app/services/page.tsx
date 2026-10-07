import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flex, backlight boards, 3D signage, neon, screen printing, offset, t-shirts, party flags, election publicity, and branded goods from Al-Rehman Traders in Lahore.",
};

export default function ServicesPage() {
  return (
    <main>
      <header className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Services · Lahore
        </p>
        <h1 className="mt-4 max-w-[14ch] font-sans text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          What leaves the workshop.
        </h1>
        <p className="mt-6 max-w-[42ch] font-serif text-xl leading-relaxed text-ink/75">
          The jobs we are asked for most. If yours sits between two of them,
          say so — the bench is not limited to this list.
        </p>
      </header>

      <nav
        aria-label="Service index"
        className="sticky top-16 z-30 border-y border-ink/10 bg-paper/95 md:top-[4.5rem]"
      >
        <ul className="wrap flex gap-x-5 gap-y-2 overflow-x-auto py-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          {services.map((service) => (
            <li key={service.id} className="shrink-0">
              <a href={`#${service.id}`} className="hover:text-espresso">
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service, index) => (
        <article
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "bg-paper-2" : "bg-paper"}
        >
          <div className="wrap grid items-center gap-8 border-b border-ink/10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-deep">
              {service.index} / {String(services.length).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-sans text-4xl tracking-tight md:text-5xl">{service.name}</h2>
            <p className="mt-4 max-w-[48ch] font-serif text-lg leading-relaxed text-ink/80">
              {service.summary}
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Usually for
                </p>
                <ul className="mt-3 space-y-2 font-serif text-lg">
                  {service.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  On the bench
                </p>
                <p className="mt-3 font-serif text-lg leading-relaxed">{service.materials}</p>
              </div>
            </div>
            </div>
          </div>
        </article>
      ))}

      <section className="bg-espresso text-paper">
        <div className="wrap flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay">
              Next
            </p>
            <h2 className="mt-3 max-w-[16ch] font-sans text-4xl tracking-tight md:text-5xl">
              Tell us the size and the date.
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
