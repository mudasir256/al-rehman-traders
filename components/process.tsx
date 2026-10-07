"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/section-intro";

export function Process() {
  const pinRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const mediaRef = useRef<{ revert: () => void } | null>(null);
  const [step, setStep] = useState(0);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    const pin = pinRef.current;
    const bar = barRef.current;
    if (!pin || !bar) return;

    let alive = true;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const mm = gsap.matchMedia();
      if (!alive) {
        mm.revert();
        return;
      }
      mediaRef.current = mm;

      mm.add("(min-width: 768px)", () => {
        setEngaged(true);
        const trigger = ScrollTrigger.create({
          trigger: pin,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const next = Math.min(
              processSteps.length - 1,
              Math.floor(self.progress * processSteps.length),
            );
            if (next !== stepRef.current) {
              stepRef.current = next;
              setStep(next);
            }
            bar.style.transform = `scaleX(${Math.max(self.progress, 0.015)})`;
          },
        });
        return () => {
          trigger.kill();
          setEngaged(false);
        };
      });

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      mediaRef.current?.revert();
      mediaRef.current = null;
    };
  }, []);

  return (
    <section id="process" className="bg-espresso text-paper">
      <div className="wrap py-20 md:hidden">
        <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/photos/proof.jpg"
            alt="Hands reviewing a printed proof on the bench"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <SectionIntro index="02" label="Process" title="How a job moves." tone="paper">
          Four steps. You see a proof before we spend the material.
        </SectionIntro>
        <ol>
          {processSteps.map((item) => (
            <li key={item.index} className="border-t border-white/15 py-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-clay">{item.index}</p>
              <h3 className="mt-2 font-sans text-3xl tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-xl font-serif text-lg leading-relaxed text-paper/75">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="hidden md:block">
        <div ref={pinRef} className="relative flex h-dvh flex-col overflow-hidden">
          <Image
            src="/photos/proof.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-espresso/80" />
          <div className="relative wrap flex flex-1 flex-col justify-center py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">
                  02 — Process
                </p>
                <p className="mt-6 font-sans text-[clamp(4.5rem,8vw,7.5rem)] font-medium leading-none tracking-[-0.05em] text-clay">
                  {processSteps[step].index}
                </p>
                <p className="mt-6 max-w-[22ch] font-serif text-lg leading-relaxed text-paper/70">
                  Scroll the job. The proof comes before the material.
                </p>
              </div>
              <ol className="lg:col-span-8">
                {processSteps.map((item, index) => {
                  const on = !engaged || index === step;
                  return (
                    <li
                      key={item.index}
                      className={cn(
                        "border-t border-white/15 py-5 transition-opacity duration-300",
                        on ? "opacity-100" : "opacity-35",
                      )}
                    >
                      <div className="grid grid-cols-[3rem_1fr] gap-4">
                        <span
                          className={cn(
                            "pt-1 font-mono text-[11px]",
                            index === step ? "text-clay" : "text-paper/50",
                          )}
                        >
                          {item.index}
                        </span>
                        <div>
                          <h3 className="font-sans text-3xl tracking-tight">{item.title}</h3>
                          <p className="mt-2 max-w-xl font-serif text-lg leading-relaxed text-paper/75">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="relative z-10 wrap pb-8">
            <div className="h-px w-full bg-white/15">
              <div
                ref={barRef}
                className="h-px origin-left bg-clay"
                style={{ transform: "scaleX(0.015)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
