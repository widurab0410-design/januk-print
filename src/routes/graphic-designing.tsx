import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/jp/PageShell";
import { CTASection } from "@/components/jp/CTASection";
import { FAQSection } from "@/components/jp/FAQSection";
import { Reveal } from "@/components/jp/Reveal";
import { ServiceCard, SectionHeading } from "@/components/jp/ui-blocks";
import { designServices } from "@/components/jp/data";

const title = "Graphic Designing Services | Januk Print";
const description =
  "Professional graphic design services — logo design, brand identity, packaging, brochures, social media graphics and more. Crafted by Januk Print's in-house creative team.";

export const Route = createFileRoute("/graphic-designing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/graphic-designing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/graphic-designing" }],
  }),
  component: GraphicDesigning,
});

function GraphicDesigning() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Graphic Designing"
        title={
          <>
            Creative design that{" "}
            <span className="text-gradient-brand">builds brands</span>
          </>
        }
        sub="Concepts, artwork and brand systems prepared to press-ready standards by our in-house creative team."
      />

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our design services"
              title="What We Design"
              sub="From a single logo to a full brand rollout — every design is crafted to look stunning in print and on screen."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {designServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  icon="PenTool"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/40 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Our Design Process"
              sub="A simple, transparent workflow from brief to finished artwork."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Brief & Discovery",
                description:
                  "We listen to your goals, audience and preferences to build a clear creative brief.",
              },
              {
                step: "02",
                title: "Concept Design",
                description:
                  "Initial concepts that translate your brief into visual direction and mood.",
              },
              {
                step: "03",
                title: "Revisions",
                description:
                  "Focused rounds of refinement until the design feels exactly right.",
              },
              {
                step: "04",
                title: "Final Delivery",
                description:
                  "Print-ready files, web-optimised assets and brand guidelines delivered to you.",
              },
            ].map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 70}>
                <div className="card-lift h-full rounded-3xl border border-border bg-card p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-accent-foreground">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection
        headline="Need a design that stands out?"
        sub="Send us your idea — we'll craft a concept, refine it together, and deliver print-ready artwork."
      />
    </PageShell>
  );
}
