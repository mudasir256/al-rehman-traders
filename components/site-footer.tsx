import Image from "next/image";
import Link from "next/link";
import { branches, phones } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-paper">
      <div className="wrap grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Image
            src="/logo.png"
            alt="Al-Rehman Traders"
            width={930}
            height={214}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-sm font-serif text-lg leading-relaxed text-ink/80">
            Printing and advertisement products. Flex, light, letters, paper, and
            the giveaways that leave with a name on them.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              The desk
            </p>
            <a href={`tel:${phones.desk.tel}`} className="mt-3 block font-sans text-2xl tracking-tight">
              {phones.desk.display}
            </a>
            <p className="mt-1 font-serif text-sm text-muted">{phones.desk.label}</p>
            <a href={`tel:${phones.ceo.tel}`} className="mt-5 block font-sans text-2xl tracking-tight">
              {phones.ceo.display}
            </a>
            <p className="mt-1 font-serif text-sm text-muted">{phones.ceo.label}</p>
          </div>
          <div className="space-y-6">
            {branches.map((branch) => (
              <div key={branch.index}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {branch.name} · {branch.area}
                </p>
                <p className="mt-2 font-serif leading-relaxed">
                  {branch.lines.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="wrap flex flex-col gap-3 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© Al-Rehman Traders · Lahore</p>
          <div className="flex gap-5">
            <Link href="/#goods" className="hover:text-ink">
              Goods
            </Link>
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <Link href="/contact" className="hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
