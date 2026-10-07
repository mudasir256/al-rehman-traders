"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { nav, phones, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/components/smooth-scroll";

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    return () => setOpen(false);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="Al-Rehman Traders, home">
          <Image
            src="/logo.png"
            alt=""
            width={930}
            height={214}
            priority
            className="h-10 w-auto sm:h-11 md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-espresso",
                  active && "text-espresso underline decoration-clay decoration-2 underline-offset-[6px]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${phones.desk.tel}`}
            className="hidden font-mono text-[12px] tracking-wide text-ink xl:inline"
          >
            {phones.desk.display}
          </a>
          <Button asChild size="sm" variant="clay" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="flex w-[1.35rem] flex-col items-end gap-[5px]" aria-hidden>
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-3 bg-clay" />
              </span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="drawer-scrim fixed inset-0 z-50 bg-espresso/45" />
              <Dialog.Content
                data-lenis-prevent
                className="drawer-panel fixed inset-y-0 right-0 z-50 flex w-[min(20.5rem,82vw)] flex-col border-l border-clay/40 bg-paper shadow-[-28px_0_70px_rgba(42,28,22,0.22)] outline-none"
              >
                <div className="flex items-center justify-between gap-4 px-5 pt-4">
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <Image
                    src="/logo.png"
                    alt="Al-Rehman Traders"
                    width={930}
                    height={214}
                    className="h-9 w-auto"
                  />
                  <Dialog.Close
                    aria-label="Close menu"
                    className="flex h-11 w-11 items-center justify-center"
                  >
                    <span className="relative block h-4 w-4" aria-hidden>
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-ink" />
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-ink" />
                    </span>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Pages, workshops, and phone numbers for Al-Rehman Traders.
                </Dialog.Description>
                <div className="relative mx-5 mt-4 h-28 overflow-hidden rounded-lg">
                  <Image
                    src="/photos/hero.jpg"
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover object-[center_35%]"
                  />
                </div>
                <nav className="mt-6 flex-1 overflow-y-auto px-5" aria-label="Mobile">
                  <ul>
                    {nav.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 + 0.05 * index, ease }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline justify-between border-t border-ink/10 py-3.5"
                        >
                          <span className="font-sans text-[1.65rem] tracking-tight">{item.label}</span>
                          <span className="font-mono text-[11px] text-clay-deep">0{index + 1}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="space-y-4 border-t border-ink/10 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
                  <a href={`tel:${phones.desk.tel}`} className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {phones.desk.label}
                    </span>
                    <span className="mt-1 block font-sans text-xl tracking-tight">
                      {phones.desk.display}
                    </span>
                  </a>
                  <a href={`tel:${phones.ceo.tel}`} className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {phones.ceo.label}
                    </span>
                    <span className="mt-1 block font-sans text-xl tracking-tight">
                      {phones.ceo.display}
                    </span>
                  </a>
                  <Button asChild variant="clay" className="w-full">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                      WhatsApp the desk
                    </a>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
