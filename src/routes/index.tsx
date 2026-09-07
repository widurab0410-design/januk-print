import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Printer as PrinterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/jp/PageShell";
import { Hero } from "@/components/jp/Hero";
import { HeroBanner } from "@/components/jp/HeroBanner";
import { StatBar } from "@/components/jp/StatBar";
import { ServiceBenefits } from "@/components/jp/ServiceBenefits";
import { CommercialGridShowcase } from "@/components/jp/CommercialGridShowcase";
import { DirectorQuote } from "@/components/jp/DirectorQuote";
import { FAQSection } from "@/components/jp/FAQSection";
import { CTASection } from "@/components/jp/CTASection";
import { Reveal } from "@/components/jp/Reveal";
import { HomeLoadingScreen } from "@/components/jp/HomeLoadingScreen";
import {
  FeatureCard,
  Icon,
  SectionHeading,
} from "@/components/jp/ui-blocks";
import {
  designServices,
  printServices,
  superpowers,
  whyChooseUs,
} from "@/components/jp/data";

const title = "Januk Print — Quality Offset and Digital Printing Since 2013";
const description =
  "Pioneer offset and digital printer of books, magazines, cartons and boxes, flyers, leaflets, posters, bill books and luxury corporate stationery. Get an instant quote!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeLoadingScreen />
      <PageShell>
        <HeroBanner />
        <CommercialGridShowcase />
        <StatBar />
        <ServiceBenefits />

        <DirectorQuote />

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title={
                  <>
                    Design. Print. <span className="text-gradient-brand">Deliver.</span>
                  </>
                }
                sub="One studio, three strengths — creative design, quality printing and custom solutions built around your deadline."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {superpowers.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="card-lift h-full rounded-3xl border border-border bg-card p-8">
                    <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Everything your brand needs, in one place"
                sub="From the first sketch to the finished, packed and delivered product."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                { heading: "Graphic Design", icon: Palette, items: designServices, to: "/graphic-designing" },
                { heading: "Printing Services", icon: PrinterIcon, items: printServices, to: "/printing-products" },
              ].map((group, gi) => (
                <Reveal key={group.heading} delay={gi * 90}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft text-accent">
                        <group.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-bold">{group.heading}</h3>
                    </div>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {group.items.slice(0, 8).map((s) => (
                        <li key={s.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                          {s.title}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-7 border-border">
                      <Link to={group.to}>
                        View all {group.heading.toLowerCase()}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-surface/40 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Why us"
                title="Why Choose Januk Print?"
                sub="Ten years of consistent work, honest pricing and a team that genuinely cares how your brand looks."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 80}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />
      </PageShell>
    </>
  );
}
