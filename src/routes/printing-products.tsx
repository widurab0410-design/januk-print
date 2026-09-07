import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/jp/PageShell";
import { CTASection } from "@/components/jp/CTASection";
import { FAQSection } from "@/components/jp/FAQSection";
import { Reveal } from "@/components/jp/Reveal";
import { ServiceCard, SectionHeading } from "@/components/jp/ui-blocks";
import { printServices } from "@/components/jp/data";

const title = "Printing Products & Services | Jayamina Print";
const description =
  "Premium printing products — digital, offset, large-format, apparel, stickers, packaging and more. Quality materials, accurate colour and reliable delivery by Jayamina Print.";

export const Route = createFileRoute("/printing-products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/printing-products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/printing-products" }],
  }),
  component: PrintingProducts,
});

function PrintingProducts() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Printing Products"
        title={
          <>
            Premium printing,{" "}
            <span className="text-gradient-brand">delivered right</span>
          </>
        }
        sub="Premium stocks, accurate colour and finishing options for every budget — from short-run digital to high-volume offset."
      />

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our printing services"
              title="What We Print"
              sub="Every product printed on carefully selected materials with rigorous quality checks before dispatch."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {printServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  icon="Printer"
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
              title="Our Printing Process"
              sub="From quotation to dispatch — a smooth, transparent production workflow."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Requirements",
                description:
                  "Tell us your quantities, materials, sizes and finishing preferences.",
              },
              {
                step: "02",
                title: "Quotation",
                description:
                  "A clear, itemised quote with material and finishing options — no surprises.",
              },
              {
                step: "03",
                title: "Production",
                description:
                  "Printing, finishing and quality control on every single piece.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Packed carefully and delivered locally or dispatched worldwide.",
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
        headline="Ready to print?"
        sub="Send us your artwork or requirements — we'll quote, print and deliver with care."
      />
    </PageShell>
  );
}
