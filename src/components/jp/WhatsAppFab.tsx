import { MessageCircle } from "lucide-react";
import { COMPANY } from "./data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        "Hi Januk Print! I'd like a quote for a design/printing job.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Januk Print on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-accent-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
