import Image from "next/image";
import { branches } from "@/lib/site";
import { SectionIntro } from "@/components/section-intro";

export function Branches({
  sequenced = true,
  intro = true,
}: {
  sequenced?: boolean;
  intro?: boolean;
}) {
  return (
    <section id="branches" className={intro ? "border-t border-ink/15 py-20 md:py-28" : "pb-20 md:pb-28"}>
      <div className="wrap">
        {intro ? (
          <SectionIntro
            index={sequenced ? "05" : ""}
            label="Branches"
            title="Find the desk."
          >
            Two addresses in Lahore. Call before you come, so the person with your
            file is the one at the counter.
          </SectionIntro>
        ) : null}
        <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-lg">
          <Image
            src="/photos/flags.jpg"
            alt="Feather flags outside a small shop"
            fill
            sizes="(min-width: 768px) 76rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid overflow-hidden rounded-lg border border-ink/15 md:grid-cols-2">
          {branches.map((branch, index) => (
            <article
              key={branch.index}
              className={`p-7 md:p-10 lg:p-12 ${index === 0 ? "border-b border-ink/15 md:border-b-0 md:border-r" : ""}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-deep">
                {branch.index} — {branch.name}
              </p>
              <h3 className="mt-4 font-sans text-4xl tracking-tight md:text-5xl">{branch.area}</h3>
              <address className="mt-6 font-serif text-lg leading-relaxed not-italic text-ink/80">
                {branch.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={branch.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-espresso"
              >
                Open the map <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
