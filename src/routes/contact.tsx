import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader, PageShell } from "@/components/jp/PageShell";
import { Reveal } from "@/components/jp/Reveal";
import { COMPANY } from "@/components/jp/data";

const title = "Contact Jayamina Print — Get a Free Quote";
const description =
  "Contact Jayamina Print for design and printing quotes. Email, phone or WhatsApp us, or send your requirements using the form and we'll reply within hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const serviceOptions = [
  "Logo & Brand Identity",
  "Business Cards & Stationery",
  "Flyers, Brochures & Catalogues",
  "Packaging & Labels",
  "Banners & Large Format",
  "Apparel & Merchandise",
  "Something else",
];

function Contact() {
  const [service, setService] = useState("");

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's talk about your <span className="text-gradient-brand">next project</span>
          </>
        }
        sub="Tell us what you need and you'll get a clear, itemised quote — usually the same working day."
      />

      <section id="quote-form" className="px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              className="rounded-3xl border border-border bg-card p-7"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thanks! We've received your request and will reply shortly.");
                (e.target as HTMLFormElement).reset();
                setService("");
              }}
            >
              <h2 className="font-display text-xl font-bold">Request a quote</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+94 ..." />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service interested in</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

              </div>
              <Button type="submit" size="lg" className="mt-6 bg-gradient-brand text-accent-foreground">
                <Send className="mr-2 h-4 w-4" />
                Send request
              </Button>
            </form>
          </Reveal>

          <Reveal delay={90} className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="font-display text-xl font-bold">Contact details</h2>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.location}
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Jayamina Print location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.86%2C79.90%2C6.94&layer=mapnik"
                loading="lazy"
                className="h-64 w-full border-0 grayscale"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
