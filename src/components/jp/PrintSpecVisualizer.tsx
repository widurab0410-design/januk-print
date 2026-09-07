import { Printer, CheckCircle2, Sparkles } from "lucide-react";

export function PrintSpecVisualizer() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-card">
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand z-10" />

      {/* Generated Commercial Print Showcase Image */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 group">
        <img
          src="/commercial_print_showcase.png"
          alt="Commercial Printing Products Showcase — Januk Print"
          className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/20 bg-black/60 px-3.5 py-2 backdrop-blur-md text-white text-xs">
          <span className="flex items-center gap-2 font-medium">
            <Printer className="h-3.5 w-3.5 text-[#BB8F3E]" />
            Commercial Product Showcase
          </span>
          <span className="inline-flex items-center gap-1 text-[0.68rem] font-mono text-[#BB8F3E]">
            <Sparkles className="h-3 w-3" />
            100% Quality Guaranteed
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-5 space-y-4">
        {/* Normal Paragraph Text */}
        <div className="space-y-2 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <p className="text-foreground font-medium">
            High-precision commercial offset &amp; digital printing for business cards, flyers, brochures, stickers, packaging, and promotional materials.
          </p>
        </div>

        {/* Specs Feature List */}
        <div className="grid grid-cols-2 gap-2 text-[0.75rem] text-foreground font-medium">
          <div className="flex items-center gap-2 p-2 rounded-lg border border-border/80 bg-surface/60">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
            <span>350gsm+ Heavyweight Stock</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-border/80 bg-surface/60">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
            <span>Gold Foil &amp; Spot UV</span>
          </div>
        </div>
      </div>
    </div>
  );
}
