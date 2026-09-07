import { Printer, Sparkles, Award } from "lucide-react";
import { Reveal } from "./Reveal";

export function StoryCard() {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card">
      {/* Decorative Printing Accent Top Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-90" />
      
      {/* Background Subtle Pattern */}
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-accent-foreground shadow-sm">
              <Printer className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold">Our Story</h3>
              <p className="text-xs text-muted-foreground font-medium">Established in 2013 · Craft &amp; Quality</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <Award className="h-3.5 w-3.5" />
            10+ Years of Craft
          </span>
        </div>

        <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p className="text-foreground font-medium">
            Januk Print was established in <span className="text-accent font-semibold">2013</span> with a simple belief: every business — no matter its size — deserves design and print work it can be genuinely proud of.
          </p>
          <p>
            What began as a small design desk grew, project by project, into a full creative studio and printing partner. Over more than a decade we've produced logos, brand identities, packaging, signage, apparel and everything in between for hundreds of clients across retail, hospitality, education, real estate and beyond.
          </p>
          <p>
            Along the way we invested in better equipment, better materials and — most importantly — better people. Today Januk Print serves clients locally and online worldwide, combining boutique studio attention with dependable production capacity.
          </p>
          <div className="pt-2 flex items-center gap-2 font-display font-semibold text-accent text-lg">
            <Sparkles className="h-5 w-5 shrink-0" />
            <span>Your brand deserves both craft and quality.</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
