import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY, navLinks } from "./data";
import logoWhite from "@/assets/januk-logo-horizontal-white.png";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const serviceLinks = [
  { label: "Books & Magazines", to: "/printing-products" },
  { label: "Flyers & Leaflets", to: "/printing-products" },
  { label: "Business Cards", to: "/printing-products" },
  { label: "Cartons & Packaging", to: "/printing-products" },
  { label: "Stickers & Labels", to: "/printing-products" },
];

const legalLinks = [
  { label: "Terms of Service", to: "/contact" },
  { label: "Awards & Recognition", to: "/about" },
  { label: "Privacy Policy", to: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing to Januk Print newsletter!");
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-neutral-950 text-neutral-300">
      {/* Newsletter Subscription Banner */}
      <div className="border-b border-neutral-800 bg-neutral-900/60 py-10 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Subscribe to our newsletter</h3>
            <p className="text-xs text-neutral-400 mt-1">Get the latest printing offers, material samples, and design tips directly to your inbox.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-[#BB8F3E]"
            />
            <Button type="submit" className="bg-gradient-brand text-accent-foreground font-display font-semibold shrink-0">
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <img
                src={logoWhite}
                alt="Januk Print"
                className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-neutral-400">
              Pioneer offset and digital printer of books, magazines, cartons, flyers, leaflets, posters &amp; commercial packaging.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-colors hover:border-[#BB8F3E] hover:text-[#BB8F3E]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    className="text-xs text-neutral-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products / Services */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]">Commercial Products</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-xs text-neutral-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]">Contact &amp; Hours</h3>
            <ul className="mt-4 space-y-3 text-xs text-neutral-400">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" />
                <span>947, Peradeniya Road, Kandy / Colombo, Sri Lanka 20000.</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" />
                <div>
                  <p className="font-semibold text-neutral-300">Working Hours:</p>
                  <p>Mon - Fri: 08:30 AM - 05:30 PM</p>
                  <p>Saturday: 08:30 AM - 01:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-12 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Januk Print. All rights reserved. | Managed and Created by{" "}
            <a
              href="https://www.univerzlk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BB8F3E] hover:underline font-medium"
            >
              UniverzLK
            </a>
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((ll) => (
              <Link key={ll.label} to={ll.to} className="hover:text-neutral-300 transition-colors">
                {ll.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

