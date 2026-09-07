import { Sparkles, Check, FileCheck, Layers, Eye } from "lucide-react";
import { JanukLogo } from "./GoldLogo";

const materialsList = [
  { title: "Business Cards", detail: "350–400gsm Matte Black Stock, Metallic Gold Foil Emblem, Spot UV" },
  { title: "Letterhead", detail: "120gsm Premium Uncoated Cotton White Stock, Gold Foil Stamped Logo" },
  { title: "Envelopes & Folders", detail: "Custom Die-cut 300gsm Black Card with Gold Ink & Embossed Crest" },
  { title: "Architectural Signage", detail: "Brushed Brass & Acrylic 3D Mounted Signage with LED Backlighting" },
];

export function BrandGuidelineShowcase() {
  return (
    <section id="brand-guideline" className="px-5 py-20 lg:px-8 bg-surface/60 border-y border-border">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BB8F3E]/40 bg-[#BB8F3E]/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#BB8F3E]">
            <Sparkles className="h-3.5 w-3.5" />
            Official Brand Specification
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Luxury Brand Guidelines &amp; <span className="text-gradient-brand">Print Spec</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Strict adherence to color calibration, geometry, and gold foil stamping for the Januk Print luxury brand identity.
          </p>
        </div>

        {/* 1. Logo Variants & Color Calibration Bar */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Logo Versions Card */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 border border-border space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]">
                Logo Emblem &amp; Wordmark Variants
              </span>
              <span className="font-mono text-[0.7rem] text-muted-foreground">Vector SVG Format</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center justify-center min-h-[160px] text-center shadow-sm">
                <JanukLogo variant="gold-on-white" />
                <span className="mt-3 font-mono text-[0.68rem] text-neutral-500 uppercase tracking-wider">
                  Gold on White (#FFFFFF)
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800 flex flex-col items-center justify-center min-h-[160px] text-center shadow-sm">
                <JanukLogo variant="gold-on-black" />
                <span className="mt-3 font-mono text-[0.68rem] text-neutral-400 uppercase tracking-wider">
                  Gold on Black (#000000)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <FileCheck className="h-4 w-4 text-[#BB8F3E] shrink-0" />
              <span>Geometric diamond emblem with interlocking arch lines &amp; wide tracking wordmark</span>
            </div>
          </div>

          {/* Color Calibration Swatches Card */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 border border-border space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]">
                Exact Color Calibration Specs
              </span>
              <span className="font-mono text-[0.7rem] text-[#BB8F3E] font-semibold">Physical Proof Required</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {/* Primary Gold */}
              <div className="rounded-2xl border border-border overflow-hidden bg-card">
                <div className="h-20 bg-[#BB8F3E] flex items-end p-2 justify-end">
                  <span className="font-mono text-[0.65rem] font-bold bg-black/60 text-white px-2 py-0.5 rounded">
                    #BB8F3E
                  </span>
                </div>
                <div className="p-3 text-xs space-y-1 font-mono">
                  <p className="font-bold text-foreground">Luxury Gold</p>
                  <p className="text-muted-foreground text-[0.68rem]">C:33 M:48 Y:91 K:0</p>
                  <p className="text-muted-foreground text-[0.68rem]">R:187 G:143 B:62</p>
                </div>
              </div>

              {/* Secondary Black */}
              <div className="rounded-2xl border border-border overflow-hidden bg-card">
                <div className="h-20 bg-black flex items-end p-2 justify-end">
                  <span className="font-mono text-[0.65rem] font-bold bg-white/20 text-white px-2 py-0.5 rounded">
                    #000000
                  </span>
                </div>
                <div className="p-3 text-xs space-y-1 font-mono">
                  <p className="font-bold text-foreground">Matte Black</p>
                  <p className="text-muted-foreground text-[0.68rem]">C:0 M:0 Y:0 K:100</p>
                  <p className="text-muted-foreground text-[0.68rem]">R:0 G:0 B:0</p>
                </div>
              </div>

              {/* Pure White */}
              <div className="rounded-2xl border border-border overflow-hidden bg-card">
                <div className="h-20 bg-white border-b border-neutral-200 flex items-end p-2 justify-end">
                  <span className="font-mono text-[0.65rem] font-bold bg-black/10 text-black px-2 py-0.5 rounded">
                    #FFFFFF
                  </span>
                </div>
                <div className="p-3 text-xs space-y-1 font-mono">
                  <p className="font-bold text-foreground">Pure White</p>
                  <p className="text-muted-foreground text-[0.68rem]">C:0 M:0 Y:0 K:0</p>
                  <p className="text-muted-foreground text-[0.68rem]">R:255 G:255 B:255</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              * Note: Strict color-matching to the gold swatch #BB8F3E is mandatory. Physical metallic foil swatch check required prior to high-volume production runs.
            </p>
          </div>
        </div>

        {/* 2. Typography Alphabet & Material Finish Spec Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Typography Sample Display */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-7 border border-border space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]">
                Brand Typography Specification
              </span>
              <span className="font-mono text-[0.68rem] text-muted-foreground">Uppercase Wide Tracking</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="block font-mono text-[0.68rem] text-muted-foreground uppercase mb-1">
                  Bold Weight Header Font:
                </span>
                <p className="font-display font-bold text-xl uppercase tracking-[0.25em] text-foreground break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
              </div>

              <div className="pt-2 border-t border-border/60">
                <span className="block font-mono text-[0.68rem] text-muted-foreground uppercase mb-1">
                  Light Weight Wordmark Font:
                </span>
                <p className="font-display font-light text-lg uppercase tracking-[0.28em] text-[#BB8F3E] break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
              </div>
            </div>
          </div>

          {/* Luxury Materials Checklist */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-7 border border-border space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]">
                Print Materials &amp; Finish Checklist
              </span>
              <span className="font-mono text-[0.68rem] text-muted-foreground">300–400gsm Heavyweight</span>
            </div>

            <div className="grid gap-3">
              {materialsList.map((m) => (
                <div key={m.title} className="flex items-start gap-3 p-3 rounded-xl border border-border/80 bg-surface/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#BB8F3E]/20 text-[#BB8F3E]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-sm">{m.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
