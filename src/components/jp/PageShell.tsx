import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-12 lg:px-8 lg:pt-40">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-brand opacity-15 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {sub ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {sub}
          </p>
        ) : null}
      </div>
    </section>
  );
}
