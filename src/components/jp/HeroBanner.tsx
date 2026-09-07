import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import slide1HighRes from "@/assets/flyers.jpg";
import slide2HighRes from "@/assets/slide-2-highres.png";
import slide3HighRes from "@/assets/slide-3-highres.png";

const slides = [
  {
    id: "flyers",
    eyebrow: "01 — Popular Bestseller",
    title: "Flyers &\nLeaflets",
    sub: "Vibrant single & multi-fold marketing handouts engineered to capture attention and boost brand conversion rates.",
    specs: ["Bi-Fold, Tri-Fold, Z-Fold", "130–250gsm Art Paper", "Same-Day Dispatch Option"],
    image: slide1HighRes,
    cta: "/printing-products",
  },
  {
    id: "printing-services",
    eyebrow: "02 — High Quality Printing Services",
    title: "High Quality\nPrinting Services",
    sub: "Professional wide-format printing, offset & digital printing solutions designed to impress.",
    specs: ["High Resolution Printing", "Custom Sizes & Formats", "Fast Turnaround Time"],
    image: slide2HighRes,
    cta: "/printing-products",
  },
  {
    id: "stickers",
    eyebrow: "03 — Die-Cut Vinyl & Labels",
    title: "Custom Stickers\n& Labels",
    sub: "Waterproof contour die-cut vinyl stickers, product labels, roll labels and decorative brand sticker sheets.",
    specs: ["Waterproof Die-Cut Vinyl", "Roll & Sheet Product Labels", "Matte, Gloss & Clear Options"],
    image: slide3HighRes,
    cta: "/printing-products",
  },
];

export function HeroBanner() {
  const autoplay = AutoPlay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => {
    emblaApi?.scrollTo(i);
  }, [emblaApi]);

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

  return (
    <div className="relative w-full overflow-hidden">
      {/* ── Embla Viewport ── */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s) => (
            <div key={s.id} className="min-w-0 flex-[0_0_100%]">
              <div className="relative w-full min-h-[600px] h-[100vh] lg:h-[100vh]">
                {/* Ultra High-Quality & Vivid Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.88] contrast-[1.06] saturate-[1.08] transition-all duration-700 pointer-events-none"
                />
                {/* Ultra-smooth gradient overlay for 100% text legibility with maximum photo clarity */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Text & Framed Photo Content */}
                <div className="absolute inset-0 flex items-center pt-24 pb-16 sm:pt-28 lg:pt-16 sm:py-0 z-10">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">

                      {/* Left Column: Typography & CTAs */}
                      <div className="lg:col-span-7 max-w-xl lg:max-w-none">

                        {/* Headline */}
                        <h1 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-white drop-shadow-md whitespace-pre-line">
                          {s.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-neutral-200 leading-relaxed max-w-xl drop-shadow">
                          {s.sub}
                        </p>

                        {/* Specs row */}
                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1.5">
                          {s.specs.map((spec) => (
                            <span key={spec} className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs font-medium text-white/95 bg-black/40 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#BB8F3E] shrink-0" />
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-5 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                          <Button
                            asChild
                            size="sm"
                            className="sm:h-11 sm:px-8 bg-gradient-brand text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform text-xs sm:text-sm font-semibold"
                          >
                            <Link to="/graphic-designing">
                              Design With Us
                              <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="sm:h-11 sm:px-6 border-white/40 bg-black/50 text-white backdrop-blur-md hover:bg-white/20 text-xs sm:text-sm"
                          >
                            <Link to="/printing-products">View All Services</Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right Column: Glass Showcase Card (Shrunk to fit photo perfectly) */}
                      <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-[430px] group">

                          {/* Ambient Outer Gold Aura */}
                          <div className="absolute -inset-3 bg-gradient-to-r from-[#BB8F3E]/30 via-[#E2C175]/20 to-[#8A6421]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          {/* Outer Premium Light Gold Border Container (Soft metallic gold frame) */}
                          <div className="relative p-[6px] rounded-2xl bg-gradient-to-b from-[#FFEFA6] via-[#E8C86C] to-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(232,200,108,0.25)]">
                            
                            {/* Inner Glass Card */}
                            <div className="relative overflow-hidden rounded-[14px] bg-neutral-950">
                              
                              {/* Photo Display Window — Full Frame Edge-to-Edge Fill */}
                              <div className="relative overflow-hidden w-full h-[250px] sm:h-[320px] xl:h-[380px] bg-black">
                                <img
                                  src={s.image}
                                  alt={s.title}
                                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Inner thin overlay border for crisp photo separation */}
                                <div className="absolute inset-0 border border-white/10 pointer-events-none z-10" />
                                {/* Diagonal Glare Reflection Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                              </div>

                              {/* Decorative Gold Corner Brackets */}
                              <div className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" />
                              <div className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" />
                              <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" />
                              <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" />

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* ── Bottom Controls ── */}
      <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-6">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pb-3 flex items-center justify-start">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === idx
                    ? "w-8 bg-[#BB8F3E]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/10">
          <div
            className="h-full bg-[#BB8F3E] transition-all duration-500"
            style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
