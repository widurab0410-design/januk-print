import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "./data";
import { PrintSpecVisualizer } from "./PrintSpecVisualizer";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-24">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gradient-brand opacity-20 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-64 h-72 w-72 rounded-full bg-gradient-brand opacity-15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 animate-fade-in">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-gradient-soft px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Creative Design &amp; Print House
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[0.68rem] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                CMYK Calibrated Press
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Professional Graphic Design &amp; Printing Solutions Since {COMPANY.since}
              <span className="mt-3 block text-gradient-brand">
                Transform Your Ideas into Powerful Visual Brands
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Januk Print is a full-service creative design and commercial printing partner.
              From logo design and brand identities to high-precision business cards, packaging,
              signage, and custom apparel — delivered locally &amp; worldwide.
            </p>

            {/* Print Quality Highlights */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>350gsm+ Premium Stocks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Gold Foil &amp; Spot UV</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Press-Ready Files</span>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-brand text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:opacity-95"
              >
                <Link to="/graphic-designing">
                  Design With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
                <Link to="/printing-products">Explore Printing Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column Interactive Visualizer */}
          <div className="lg:col-span-5 animate-scale-in">
            <PrintSpecVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}
