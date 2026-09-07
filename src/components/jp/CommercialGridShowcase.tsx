import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import slide3Img from "@/assets/slide-3.jpg";
import catCommercial from "@/assets/cat-commercial.jpg";
import promotionalItems from "@/assets/promotional-items.png";

const productItems = [
  {
    num: "1.",
    name: "Flyers & Leaflets",
    desc: "Vibrant single & multi-fold promotional flyers",
    img: "/showcase_flyers.png",
  },
  {
    num: "2.",
    name: "Tri-Fold Brochures",
    desc: "Corporate 3-panel folded presentation brochures",
    img: catCommercial,
  },
  {
    num: "3.",
    name: "Roll-up Banners",
    desc: "Portable erect display standees & vinyl banners",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "4.",
    name: "Letterheads & Stationery",
    desc: "Official corporate letterheads & matching envelopes",
    img: "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "5.",
    name: "Luxury Business Cards",
    desc: "350gsm+ cardstock with gold foil & matte finish",
    img: "/showcase_bizcards.png",
  },
  {
    num: "6.",
    name: "Custom Stickers & Labels",
    desc: "Waterproof contour die-cut vinyl stickers & sheets",
    img: slide3Img,
  },
  {
    num: "7.",
    name: "Invoice Books & NCR",
    desc: "Custom carbonless duplicate & triplicate books",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "8.",
    name: "Promotional Items",
    desc: "Custom printed mugs, pens, umbrellas & gifts",
    img: promotionalItems,
  },
];

export function CommercialGridShowcase() {
  return (
    <section className="px-5 py-20 lg:px-8 bg-surface/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Individual Product Showcase
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Commercial Printing <span className="text-gradient-brand">Products Gallery</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Explore our range of high-precision offset and digital print products, crafted with premium materials and finishes.
            </p>
          </div>
        </Reveal>

        {/* 8 Product Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productItems.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 70}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom vignette for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge Number */}
                  <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-0.5 font-mono text-xs font-bold text-[#F5B027] backdrop-blur-sm border border-white/15 shadow-sm">
                    {item.num}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    {item.desc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-accent font-semibold">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Premium Quality
                    </span>
                    <Link to="/graphic-designing" className="inline-flex items-center gap-1 hover:underline">
                      Design With Us <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground shadow-glow">
            <Link to="/get-quote">
              Order Custom Printing Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
