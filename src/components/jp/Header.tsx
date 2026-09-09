import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { COMPANY, navLinks } from "./data";
import { useScrolled } from "./useScrolled";
import { ThemeToggle } from "./ThemeToggle";
import logoDark from "@/assets/januk-logo-horizontal.png";
import logoWhite from "@/assets/januk-logo-horizontal-white.png";
import jpEmblem from "@/assets/januk-emblem.png";

const extendedNavLinks: Array<{ label: string; to: string; hash?: string }> = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Graphic Designing", to: "/graphic-designing" },
  { label: "Printing Products", to: "/printing-products" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHomePage = pathname === '/';

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          {/* Logo brand link seamlessly blended with header */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {!scrolled && isHomePage ? (
              // Over transparent hero banner (dark background): clean white transparent logo
              <img
                src={logoWhite}
                alt="Januk Print"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              />
            ) : (
              // Scrolled or inner pages: responsive to light / dark mode
              <>
                <img
                  src={logoDark}
                  alt="Januk Print"
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 dark:hidden drop-shadow-sm"
                />
                <img
                  src={logoWhite}
                  alt="Januk Print"
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 hidden dark:block drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                />
              </>
            )}
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label="Main" className="hidden items-center gap-1 xl:gap-2 md:flex">
              {extendedNavLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    {...(link.hash ? { hash: link.hash } : {})}
                    className={`relative whitespace-nowrap px-2.5 py-1.5 font-sans text-sm lg:text-[0.95rem] xl:text-base font-bold uppercase tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-primary after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[3px] after:bg-primary after:rounded-full drop-shadow-[0_2px_8px_rgba(234,88,12,0.35)]"
                        : `${(scrolled || !isHomePage) ? 'text-black drop-shadow-sm' : 'text-white drop-shadow-md'} hover:text-primary hover:scale-[1.02] transition-all duration-200`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="ml-1 hidden bg-gradient-brand text-accent-foreground shadow-glow hover:opacity-90 sm:inline-flex font-poppins font-semibold uppercase tracking-wider text-sm px-4.5 py-2"
            >
              <Link to="/graphic-designing">Design With Us</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-xs border-border bg-surface p-0">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <SheetTitle className="font-poppins text-base font-semibold text-primary">
                    JANUK PRINT
                  </SheetTitle>
                </div>
                <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                  {extendedNavLinks.map((link) => {
                    const isActive = pathname === link.to;
                    return (
                      <Link
                        key={link.label}
                        to={link.to}
                        {...(link.hash ? { hash: link.hash } : {})}
                        onClick={() => setOpen(false)}
                        className={`rounded-lg px-3.5 py-3 font-poppins text-lg font-medium uppercase tracking-wide transition-all ${
                          isActive
                            ? "bg-primary/15 text-primary border-l-4 border-primary font-semibold pl-4"
                            : "text-foreground hover:bg-secondary hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto border-t border-border p-4">
                  <Button asChild className="w-full bg-gradient-brand text-accent-foreground font-display font-bold uppercase tracking-wider text-base py-3">
                    <Link to="/graphic-designing" onClick={() => setOpen(false)}>
                      Design With Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
