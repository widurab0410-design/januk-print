import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/jp/PageShell";
import { Reveal } from "@/components/jp/Reveal";
import { SectionHeading } from "@/components/jp/ui-blocks";
import { CTASection } from "@/components/jp/CTASection";
import { process as steps } from "@/components/jp/data";

const title = "Our Process — Jayamina Print";
const description =
  "Seven clear steps from first conversation to delivered product. See how Jayamina Print handles your design and printing project from brief to delivery.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const stepDetails: Record<string, { icon: string; detail: string }> = {
  "01": {
    icon: "💬",
    detail:
      "Tell us about your project — your goals, target audience, print quantities, timeline and any brand guidelines. We'll ask the right questions to understand exactly what you need.",
  },
  "02": {
    icon: "📋",
    detail:
      "We prepare a clear, itemised quote with all material, finishing and delivery options. No hidden charges — you'll know the full cost before we begin.",
  },
  "03": {
    icon: "✏️",
    detail:
      "Our designers translate your brief into initial visual concepts. We present multiple directions so you can see the possibilities and choose the right path.",
  },
  "04": {
    icon: "🔄",
    detail:
      "We refine the chosen concept through focused revision rounds. Your feedback shapes every iteration until the design feels exactly right.",
  },
  "05": {
    icon: "✅",
    detail:
      "You review and approve the final design and a press-ready proof. Nothing goes to print without your sign-off — guaranteed.",
  },
  "06": {
    icon: "🖨️",
    detail:
      "Your job goes to press on the agreed materials. Every item goes through quality control before it leaves production.",
  },
  "07": {
    icon: "📦",
    detail:
      "Finished products are carefully packed and delivered to your door — locally or dispatched worldwide via tracked courier.",
  },
};

function ProcessPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-brand opacity-15 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              How We Work
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our <span className="text-gradient-brand">Process</span>
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Seven clear steps from first conversation to delivered product — designed to keep you informed, in control, and confident at every stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps — vertical timeline on mobile, cards on desktop */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const detail = stepDetails[step.step];
                return (
                  <Reveal key={step.step} delay={i * 80}>
                    <div className="relative flex gap-6 sm:gap-8">
                      {/* Step number circle */}
                      <div className="relative z-10 shrink-0 flex flex-col items-center">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow">
                          <span className="text-2xl">{detail?.icon ?? "⚙️"}</span>
                        </div>
                      </div>

                      {/* Content card */}
                      <div className="flex-1 rounded-2xl border border-border bg-card p-6 sm:p-8 card-lift">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <span className="font-mono text-3xl font-bold text-accent/30 leading-none">
                              {step.step}
                            </span>
                            <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-foreground">
                              {step.title}
                            </h2>
                          </div>
                          <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                            Step {step.step}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                        {detail?.detail && (
                          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                            {detail.detail}
                          </p>
                        )}

                        {/* Completion indicator */}
                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Included in every project — no exceptions</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA card */}
          <Reveal delay={100}>
            <div className="mt-12 rounded-3xl border border-accent/20 bg-gradient-soft p-8 sm:p-12 text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Ready to start your project?
              </h3>
              <p className="mt-3 text-base text-muted-foreground max-w-lg mx-auto">
                Get in touch and we'll walk you through the process for your specific job — with a free quote included.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground shadow-glow">
                  <Link to="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <Link to="/printing-products">View Our Services</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        headline="Questions about the process?"
        sub="We're happy to explain any step in detail before you commit to anything."
      />
    </PageShell>
  );
}
