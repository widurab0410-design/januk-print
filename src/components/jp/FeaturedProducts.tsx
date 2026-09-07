import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

export const featuredProducts = [
  {
    id: "books",
    title: "Books, Booklets & Magazines",
    desc: "Saddle-stitch, perfect bound, and hardcover book publishing for authors, schools, corporate reports, and publishers.",
    badge: "Bestseller",
    icon: "📖",
    specs: ["Saddle-Stitch / Perfect Bound", "Custom Matt & Gloss Covers", "80–300gsm Paper Range", "Small & Large Print Runs"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "flyers",
    title: "Flyers & Leaflets",
    desc: "Vibrant single & multi-fold marketing handouts engineered to capture attention and boost brand conversion rates.",
    badge: "Popular",
    icon: "📄",
    specs: ["Bi-Fold, Tri-Fold, Z-Fold", "130–250gsm Art Paper", "High-Gloss & Silk Finishes", "Same-Day Dispatch Option"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-cards",
    title: "Luxury Business Cards",
    desc: "350gsm+ heavyweight stocks with precision foil stamping, soft-touch matte lamination, and spot UV accents.",
    badge: "Luxury Gold",
    icon: "💳",
    specs: ["350–400gsm Heavy Card Stock", "Metallic Gold / Silver Foil", "Soft-Touch Velvet Matte", "Rounded & Painted Edges"],
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "posters",
    title: "Posters & Large Format Art Prints",
    desc: "High-resolution wide format poster printing up to A0 size and larger with fade-resistant UV pigment inks.",
    badge: "1440 DPI",
    icon: "🖼️",
    specs: ["A4 to A0 & Custom Dimensions", "1440 DPI Photo-Realistic Quality", "Photo Gloss & Matte Canvas", "Indoor & Outdoor Durability"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "envelopes",
    title: "Printed Corporate Envelopes",
    desc: "Custom branded corporate envelopes in DL, C5, and C4 sizes with self-seal adhesive strips and window options.",
    badge: "Stationery",
    icon: "✉️",
    specs: ["DL, C5, C4 Standard Sizes", "Self-Seal Strip Closure", "Window & Non-Window Options", "Full-Color Brand Logos"],
    image: "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stickers",
    title: "Custom Stickers & Vinyl Labels",
    desc: "Waterproof contour-cut vinyl stickers and product labels for bottles, boxes, jars, and branding packages.",
    badge: "Die-Cut",
    icon: "🏷️",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    specs: ["Die-Cut & Kiss-Cut Stickers", "Waterproof & UV Resistant Vinyl", "Clear, Holographic, Matte", "Roll & Sheet Packaging"],
  },
  {
    id: "tags",
    title: "Hang Tags & Product Labels",
    desc: "Premium garment, price, and gift tags finished with metal eyelets, stringing, embossing, and custom shapes.",
    badge: "Retail",
    icon: "🏷️",
    specs: ["Custom Shapes & Die-Cutting", "Reinforced Brass Eyelets", "Cotton & Elastic Stringing", "Embossing & Foil Stamping"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "folders",
    title: "Corporate Presentation Folders",
    desc: "Professional document folders built with internal business card slots, expansion gussets, and laminated pockets.",
    badge: "Corporate",
    icon: "📁",
    specs: ["Single & Double Pocket Layouts", "Business Card Die-Cut Slots", "300gsm Heavyweight Art Card", "Gloss & Matte Lamination"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "calendars",
    title: "Desk & Wall Calendars",
    desc: "Custom annual wire-o bound calendars featuring high-gloss photo pages, custom branding, and sturdy stands.",
    badge: "Seasonal",
    icon: "📅",
    specs: ["Desk Tent & Wall Hanging", "Twin-Loop Wire-O Binding", "Custom Date Grid & Holidays", "High-Gloss 200gsm Pages"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cartons",
    title: "Cartons & Custom Box Packaging",
    desc: "Precision die-cut product packaging, rigid gift boxes, corrugated mailers, and folding display cartons.",
    badge: "Packaging",
    icon: "📦",
    specs: ["Folding Boxboard & Rigid Box", "Custom Dieline Engineering", "Gold Foil & Spot Gloss", "Food & Cosmetic Grade Stock"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
  },
];

export function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play: advance every 4 seconds, pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <section id="featured-products" className="px-5 pt-6 pb-10 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header with Title and One-by-One Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Commercial Product Range
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Featured <span className="text-gradient-brand">Print Products</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Explore our products one by one. Use the controls or swipe to switch slides.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto-play indicator */}
            <span className={`h-2 w-2 rounded-full transition-colors ${isPaused ? 'bg-muted-foreground' : 'bg-[#BB8F3E] animate-pulse'}`} title={isPaused ? 'Paused' : 'Auto-playing'} />

            {/* Slide Index Counter */}
            <span className="font-mono text-xs font-semibold text-accent tracking-widest bg-card border border-border px-3 py-1 rounded-full shadow-sm">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(featuredProducts.length).padStart(2, "0")}
            </span>

            {/* Slider Controls */}
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="h-8 w-8 rounded-full border-border bg-card shadow-sm hover:border-accent hover:text-accent"
                aria-label="Previous Product Slide"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="h-8 w-8 rounded-full border-border bg-card shadow-sm hover:border-accent hover:text-accent"
                aria-label="Next Product Slide"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div
          className="overflow-hidden rounded-xl border border-border shadow-card bg-black"
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="min-w-0 flex-[0_0_100%]"
              >
                {/* Full photo — larger fixed height */}
                <div className="relative w-full h-[280px] sm:h-[340px] bg-black">
                  {/* Full visible image */}
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                  />

                  {/* Very light vignette — keeps photo fully visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                  {/* Badge — top left */}
                  <span className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 font-mono text-[0.65rem] font-semibold text-[#BB8F3E] backdrop-blur-sm border border-[#BB8F3E]/40">
                    {prod.badge}
                  </span>

                  {/* Icon — top right */}
                  <span className="absolute top-3 right-4 text-2xl drop-shadow-lg">
                    {prod.icon}
                  </span>

                  {/* Text Content — bottom overlay */}
                  <div className="absolute bottom-0 inset-x-0 px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-snug drop-shadow-lg">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-2 max-w-lg">
                        {prod.desc}
                      </p>
                      {/* Specs row */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                        {prod.specs.slice(0, 3).map((spec) => (
                          <span key={spec} className="flex items-center gap-1 text-[0.65rem] font-medium text-white/80">
                            <CheckCircle2 className="h-2.5 w-2.5 text-[#BB8F3E] shrink-0" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild size="sm" className="h-8 px-4 text-xs bg-gradient-brand text-accent-foreground shadow-glow shrink-0">
                      <Link to="/graphic-designing">
                        Design With Us
                        <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail Strip Navigation */}
        <div className="flex items-center gap-2 pt-3 overflow-x-auto pb-1 scrollbar-none">
          {featuredProducts.map((prod, index) => (
            <button
              key={prod.id}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}: ${prod.title}`}
              className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                index === selectedIndex
                  ? "ring-2 ring-[#BB8F3E] ring-offset-2 ring-offset-background opacity-100 scale-105"
                  : "opacity-50 hover:opacity-80 scale-100"
              }`}
              style={{ width: 72, height: 48 }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="h-full w-full object-cover"
              />
              {/* Active gold overlay tint */}
              {index === selectedIndex && (
                <div className="absolute inset-0 bg-[#BB8F3E]/20" />
              )}
              {/* Title tooltip on hover */}
              <div className="absolute bottom-0 inset-x-0 bg-black/70 px-1 py-0.5">
                <p className="text-[0.5rem] text-white truncate text-center font-medium">{prod.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
