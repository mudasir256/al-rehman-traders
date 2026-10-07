"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import type Lenis from "lenis";
import { usePathname } from "next/navigation";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let alive = true;
    let instance: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;
    let gsapRef: { ticker: { remove: (fn: (time: number) => void) => void } } | null =
      null;

    (async () => {
      const [{ default: LenisCtor }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!alive) return;

      const gsap = gsapMod.default;
      gsap.registerPlugin(stMod.ScrollTrigger);

      instance = new LenisCtor({
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.88,
        anchors: true,
        autoRaf: false,
        stopInertiaOnNavigate: true,
      });

      instance.on("scroll", stMod.ScrollTrigger.update);

      tick = (time: number) => {
        instance?.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      gsapRef = gsap;

      if (!alive) {
        gsap.ticker.remove(tick);
        instance.destroy();
        return;
      }

      setLenis(instance);

      if (window.location.hash) {
        instance.scrollTo(window.location.hash, { offset: 0 });
      }
    })();

    return () => {
      alive = false;
      if (tick && gsapRef) gsapRef.ticker.remove(tick);
      instance?.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (window.location.hash) {
      lenis.scrollTo(window.location.hash, { offset: 0 });
    }
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}
