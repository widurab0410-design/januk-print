import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { PageHeader, PageShell } from "@/components/jp/PageShell";
import { StoryCard } from "@/components/jp/StoryCard";
import { CTASection } from "@/components/jp/CTASection";
import { Reveal } from "@/components/jp/Reveal";
import { CheckItem, FeatureCard, SectionHeading } from "@/components/jp/ui-blocks";
import { coreValues, trustPoints } from "@/components/jp/data";

const title = "About Jayamina Print — Trusted Design & Print Since 2013";
const description =
  "Creative design. Quality printing. Trusted since 2013. Learn about Jayamina Print's story, mission, vision and the values behind every project we deliver.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title={
          <>
            About <span className="text-gradient-brand">Jayamina Print</span>
          </>
        }
        sub="Creative Design. Quality Printing. Trusted Since 2013."
      />

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <StoryCard />
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              heading: "Our Mission",
              body: "To help every business communicate confidently through thoughtful design and dependable, high-quality print — delivered on time, at a fair price.",
            },
            {
              icon: Compass,
              heading: "Our Vision",
              body: "To be the creative print partner brands recommend first, known for craft, honesty and a genuinely enjoyable experience from brief to delivery.",
            },
          ].map((c, i) => (
            <Reveal key={c.heading} delay={i * 90}>
              <div className="card-lift h-full rounded-3xl border border-border bg-card p-8">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold">{c.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Core values" title="What we stand for" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <FeatureCard icon={v.icon} title={v.title} description={v.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Trust"
              title="Why Businesses Trust Us"
              sub="Ten reasons clients keep coming back — and keep referring us."
            />
          </Reveal>
          <Reveal delay={90}>
            <ul className="grid gap-3.5 rounded-3xl border border-border bg-card p-7 sm:grid-cols-2">
              {trustPoints.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl leading-relaxed sm:text-2xl">
            Whether you need a single logo or a full brand rollout in print, we treat your project
            with the same care we'd give our own.{" "}
            <span className="text-gradient-brand">Let's make something worth showing off.</span>
          </p>
        </Reveal>
      </section>

      <CTASection />
    </PageShell>
  );
}
