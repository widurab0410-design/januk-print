import { icons } from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Icon({ name, className }: { name: string; className?: string }) {
  const LucideIcon = (icons as Record<string, typeof Check>)[name] ?? Check;
  return <LucideIcon className={className} aria-hidden />;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-lift h-full rounded-2xl border border-border bg-card p-6">
      <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft text-accent">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  icon = "Check",
}: {
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="card-lift flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="mt-0.5 inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-soft text-accent">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <span className="font-mono text-3xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-accent)]">
        {step}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function IndustryTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {label}
    </span>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
      <span>{children}</span>
    </li>
  );
}
