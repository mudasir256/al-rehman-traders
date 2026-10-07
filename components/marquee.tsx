import { services } from "@/lib/site";

export function Marquee() {
  return (
    <div className="ticker overflow-hidden border-y border-ink/15 bg-espresso text-paper" aria-hidden>
      <div className="ticker-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0">
            {services.map((service) => (
              <li
                key={`${copy}-${service.id}`}
                className="flex items-center gap-6 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em]"
              >
                <span>{service.name}</span>
                <span className="inline-block h-1.5 w-1.5 bg-clay" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
