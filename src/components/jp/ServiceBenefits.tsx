import { Award, Palette, Clock, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Quality Printing",
    description: "Bright inks. Thick Paper. Precise cuts. We believe that quality printing matters.",
  },
  {
    icon: Palette,
    title: "Quality Design",
    description: "The alternative to good design is always bad design. There is no such thing as no design.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "No printer is faster. Order today and get your production dispatched on guaranteed schedule.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Service",
    description: "To listen closely and reply well is the highest perfection we are able to attain.",
  },
];

export function ServiceBenefits() {
  return (
    <section className="px-5 py-20 lg:px-8 bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore how Our Service can <span className="text-gradient-brand">benefit your business</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Decades of commercial printing excellence, cutting-edge technology, and personal commitment to every order.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-lift rounded-3xl border border-border bg-card p-8 text-center shadow-card space-y-4 hover:border-accent/40"
            >
              <span className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground mx-auto shadow-md">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-xl font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
