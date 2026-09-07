import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ShoppingBag, 
  Utensils, 
  Hotel, 
  GraduationCap, 
  HeartPulse, 
  Building2, 
  HardHat, 
  Calendar, 
  Shirt, 
  Rocket, 
  Heart, 
  ShoppingCart,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/jp/PageShell";
import { Reveal } from "@/components/jp/Reveal";
import { SectionHeading } from "@/components/jp/ui-blocks";
import { CTASection } from "@/components/jp/CTASection";

const title = "Industries We Serve — Januk Print";
const description =
  "From retail and e-commerce to restaurants, education, and real estate. Discover custom design and printing solutions tailored to your industry.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industryDetails = [
  {
    name: "Retail & Shops",
    description: "Custom carrier bags, product labels, product packaging, and point-of-sale display materials that capture attention.",
    icon: ShoppingBag,
  },
  {
    name: "Restaurants & Cafés",
    description: "Elegant menus, table talkers, custom food packaging, takeaway boxes, and branded staff aprons.",
    icon: Utensils,
  },
  {
    name: "Hotels & Hospitality",
    description: "Guest directories, keycard holders, door hangers, branded stationery, brochures, and wayfinding signage.",
    icon: Hotel,
  },
  {
    name: "Education & Institutes",
    description: "School magazines, custom certificates, prospectus booklets, student handbooks, notebooks, and event banners.",
    icon: GraduationCap,
  },
  {
    name: "Healthcare & Pharmacy",
    description: "Medicine cartons, instruction leaflets, barcode labels, clinic forms, prescription pads, and informational posters.",
    icon: HeartPulse,
  },
  {
    name: "Real Estate",
    description: "High-end property brochures, listing flyers, site banners, folders, and premium business cards for agents.",
    icon: Building2,
  },
  {
    name: "Construction & Engineering",
    description: "Site signs, site blueprints, safety booklets, vehicle decals, and durable high-visibility apparel.",
    icon: HardHat,
  },
  {
    name: "Events & Weddings",
    description: "Wedding cards, save-the-date invites, event tickets, roll-up banners, large backdrops, and photobooks.",
    icon: Calendar,
  },
  {
    name: "Fashion & Apparel",
    description: "Premium hang tags, woven clothing labels, custom tissue paper, packaging boxes, and lookbook catalogs.",
    icon: Shirt,
  },
  {
    name: "Startups & SMEs",
    description: "Kickstart packs containing business cards, letterheads, invoice books, and marketing flyers to launch your brand.",
    icon: Rocket,
  },
  {
    name: "NGOs & Charities",
    description: "Annual reports, fundraising brochures, donation cards, event booklets, and promotional banners.",
    icon: Heart,
  },
  {
    name: "E-commerce Brands",
    description: "Branded shipping boxes, mailer bags, customized packaging tape, thank-you notes, and label rolls.",
    icon: ShoppingCart,
  },
];

function IndustriesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-brand opacity-15 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Help
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Industries We <span className="text-gradient-brand">Serve</span>
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Every sector has unique needs. We combine premium materials and custom finishing to craft tailored solutions for businesses of all shapes and sizes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((ind, i) => {
              const IconComponent = ind.icon;
              return (
                <Reveal key={ind.name} delay={i * 50}>
                  <div className="group relative rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-gradient-brand group-hover:text-accent-foreground">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                      {ind.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {ind.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border/60 bg-surface/30 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">Why Work With Januk Print</span>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Bespoke printing and design, tailored for your brand
              </h2>
              <p className="text-base text-muted-foreground">
                We don't offer cookie-cutter templates. We work closely with you to choose the exact papers, boards, coatings, and custom shapes that make sense for your specific industry.
              </p>
              <div className="grid gap-3 pt-4 sm:grid-cols-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Custom material sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Expert design consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Color consistency guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Tracked global shipping</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center items-center rounded-3xl border border-border bg-surface/50 p-8 sm:p-10 text-center">
              <h3 className="font-display text-xl font-bold">Ready to get started?</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                Request a custom estimate or contact our design desk to chat about your next project's specs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground">
                  <Link to="/graphic-designing">Design With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
