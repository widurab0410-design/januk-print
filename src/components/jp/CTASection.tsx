import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "./data";
import { Reveal } from "./Reveal";

export function CTASection({
  headline = "Ready to Grow Your Brand?",
  sub = "Tell us what you need — design, print or both. You'll get a clear quote and a friendly reply within hours.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center text-accent-foreground sm:px-12 lg:py-20">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-90">{sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/graphic-designing">
              Design With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
          >
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                "Hi Jayamina Print! I'd like a quote.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp / Contact Us
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
