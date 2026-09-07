import { Printer } from "lucide-react";

export function GoldEmblem({
  className = "h-8 w-8",
  useGradient = true,
  stroke,
}: {
  className?: string;
  useGradient?: boolean;
  stroke?: string;
}) {
  return (
    <Printer 
      className={className} 
      stroke={stroke || (useGradient ? "url(#luxuryGoldGrad)" : "currentColor")} 
      strokeWidth={1.5}
    >
      {useGradient && (
        <defs>
          <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C175" />
            <stop offset="50%" stopColor="#BB8F3E" />
            <stop offset="100%" stopColor="#8A6421" />
          </linearGradient>
        </defs>
      )}
    </Printer>
  );
}

export function JayaminaLogo({
  variant = "gold-on-white",
  showSub = true,
}: {
  variant?: "gold-on-white" | "gold-on-black";
  showSub?: boolean;
}) {
  const isBlack = variant === "gold-on-black";

  return (
    <div
      className={`inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl transition-all ${
        isBlack ? "bg-black text-white border border-[#BB8F3E]/30" : "bg-white text-black border border-black/10"
      }`}
    >
      <GoldEmblem className="h-9 w-9 shrink-0" />
      <div className="flex flex-col">
        <span
          className="font-display font-light uppercase tracking-[0.28em] text-base leading-none text-[#BB8F3E]"
        >
          JAYAMINA PRINT
        </span>
        {showSub ? (
          <span
            className={`font-mono text-[0.62rem] uppercase tracking-[0.22em] mt-1 ${
              isBlack ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            Luxury Design &amp; Print House
          </span>
        ) : null}
      </div>
    </div>
  );
}
