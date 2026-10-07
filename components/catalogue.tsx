import Image from "next/image";
import { catalogue } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/section-intro";

export function Catalogue() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="catalogue-title">
      <div className="wrap">
        <div id="catalogue-title">
          <SectionIntro index="03" label="The work" title="Where it ends up.">
            The same workshop, different streets. A fascia, a campaign week, a
            uniform, a box of diaries.
          </SectionIntro>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          {catalogue.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "overflow-hidden rounded-lg bg-paper-2",
                index === 0 && "md:col-span-7",
                index === 1 && "md:col-span-5",
                index === 2 && "md:col-span-5",
                index === 3 && "md:col-span-7",
              )}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={index % 2 === 0 ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-clay-deep">
                  {item.kicker}
                </p>
                <h3 className="mt-3 font-sans text-3xl tracking-tight md:text-4xl">{item.title}</h3>
                <p className="mt-3 max-w-[40ch] font-serif text-lg leading-relaxed text-ink/80">
                  {item.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
