import { clients } from "./data";
import { Reveal } from "./Reveal";

export function TrustedBy() {
  return (
    <section className="px-5 py-14 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Trusted by brands across 12+ industries
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((c) => (
            <li
              key={c}
              className="font-display text-xl font-bold text-muted-foreground/50 grayscale transition-all duration-300 hover:text-gradient-brand hover:grayscale-0 sm:text-2xl"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
