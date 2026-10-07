import type { Metadata } from "next";
import { CustomGoods } from "@/components/custom-goods";

export const metadata: Metadata = {
  title: "Goods",
  description:
    "Custom mugs, bottles, bags, caps, diaries, shirts, cards, keychains, neon, light boards, flags, and gift sets from Al-Rehman Traders in Lahore.",
};

export default function GoodsPage() {
  return (
    <main>
      <header className="bg-paper-2 pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="wrap">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Goods · Lahore
          </p>
          <h1 className="mt-4 max-w-[12ch] font-sans text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            Your idea, made solid.
          </h1>
          <p className="mt-6 max-w-[42ch] font-serif text-xl leading-relaxed text-ink/75">
            A sketch, a logo, or a sentence is enough to start. We make these
            kinds of pieces, and we make the one that does not exist yet — a
            mug, a sign, a flag, or a board, with your wording on it.
          </p>
        </div>
      </header>
      <CustomGoods intro={false} />
    </main>
  );
}
