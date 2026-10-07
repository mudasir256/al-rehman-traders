import Image from "next/image";
import Link from "next/link";
import { customGoods, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/section-intro";

export function CustomGoods({
  intro = true,
  preview = false,
}: {
  intro?: boolean;
  preview?: boolean;
}) {
  const items = preview ? customGoods.filter((item) => item.featured) : customGoods;

  return (
    <section id="goods" className={intro ? "border-t border-ink/15 bg-paper-2 py-20 md:py-28" : "bg-paper-2 pb-20 md:pb-28"}>
      <div className="wrap">
        {intro ? (
          <SectionIntro index="04" label="Custom goods" title="Your idea, made solid.">
            A sketch, a logo, or a sentence is enough to start. A few of the
            pieces are below. The full set — mugs, signs, flags, shirts, cards,
            and the thing that does not exist yet — is on the goods page.
          </SectionIntro>
        ) : null}

        <div className={preview ? "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" : "grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4"}>
          {items.map((item) => (
            <article key={item.name} className={preview ? undefined : item.span}>
              <div className={`relative overflow-hidden rounded-lg bg-espresso ${preview ? "aspect-[4/5]" : item.ratio}`}>
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
          <div className="flex flex-wrap gap-3">
            {preview ? (
              <Button asChild>
                <Link href="/goods">All the goods</Link>
              </Button>
            ) : null}
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
      </div>
    </section>
  );
}
