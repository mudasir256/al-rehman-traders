import Image from "next/image";
import { customGoods, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/section-intro";

export function CustomGoods() {
  return (
    <section id="goods" className="border-t border-ink/15 bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        <SectionIntro index="04" label="Custom goods" title="Your idea, made solid.">
          A sketch, a logo, or a sentence is enough to start. We make these
          kinds of pieces, and we make the one that does not exist yet — a mug,
          a sign, a flag, or a board, with your wording on it.
        </SectionIntro>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {customGoods.map((item) => (
            <article key={item.name} className={`overflow-hidden rounded-lg bg-paper ${item.frame}`}>
              <div className="relative h-full min-h-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/88 via-espresso/35 to-transparent p-4 pt-16 md:p-5 md:pt-20">
                  <h3 className="font-sans text-xl tracking-tight text-paper md:text-2xl">{item.name}</h3>
                  <p className="mt-1 max-w-[28ch] font-serif text-sm leading-snug text-paper/80 md:text-base">
                    {item.line}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 border-t border-ink/15 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[46ch] font-serif text-lg leading-relaxed text-ink/75">
            The photographs show the kinds of objects. The name, the colours,
            and the sentence are yours. Tell us the quantity and the day.
          </p>
          <Button asChild variant="clay">
            <a
              href={whatsappLink(
                "Hello, I have an idea for a custom product. I can send a sketch or a logo.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send the idea
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
