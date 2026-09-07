import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DirectorQuote() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 overflow-hidden rounded-3xl border border-border shadow-card">
          {/* Left Column: Services Overview */}
          <div className="lg:col-span-7 bg-card p-8 sm:p-12 space-y-6 flex flex-col justify-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]">
              Commercial Printing Excellence
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Professional and personalized services.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              At Januk Print, everything is done to make your life easier: our team has the expertise to carry out your projects and meet your needs. We take care of your project from production to delivery on time, respecting your requirements and according to your budget.
            </p>
            <h4 className="font-display text-lg font-semibold text-foreground">
              Whatever your project, we can help you!
            </h4>
            <div>
              <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground shadow-glow">
                <Link to="/printing-products">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: MD Quote Banner */}
          <div className="lg:col-span-5 bg-gradient-brand p-8 sm:p-12 text-accent-foreground flex flex-col justify-between relative overflow-hidden">
            <Quote className="h-24 w-24 absolute -bottom-6 -right-6 opacity-15 pointer-events-none text-white" />
            
            <div className="space-y-6 relative z-10 my-auto">
              <span className="inline-block rounded-full bg-black/20 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white">
                Leadership Commitment
              </span>

              <h3 className="font-display text-2xl font-bold italic leading-snug sm:text-3xl">
                “Our goal is to collaborate in the success of your projects. Our motivation, your satisfaction!”
              </h3>

              <div className="pt-4 border-t border-white/20">
                <p className="font-display font-bold text-base uppercase tracking-wider text-white">
                  Januk Print Team
                </p>
                <p className="text-xs text-white/80 font-mono mt-0.5">
                  Managing Director, Januk Print House Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
