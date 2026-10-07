import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap py-28 md:py-36">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 max-w-[14ch] font-sans text-5xl font-medium tracking-tight md:text-7xl">
        This page was never on the press.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-espresso"
      >
        Back to the workshop →
      </Link>
    </main>
  );
}
