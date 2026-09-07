import { useEffect, useState, useRef, useCallback } from "react";
import { Play, RotateCcw, Volume2, VolumeX, X, CheckCircle, Sparkles, Printer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrinterIntroProps {
  onClose?: () => void;
  autoPlay?: boolean;
  isModal?: boolean;
}

export function PrinterIntro({ onClose, autoPlay = true, isModal = false }: PrinterIntroProps) {
  // Printing stages: 'idle' | 'feeding' | 'printing' | 'curing' | 'completed'
  const [stage, setStage] = useState<"idle" | "feeding" | "printing" | "curing" | "completed">("idle");
  const [printProgress, setPrintProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [cmykIndex, setCmykIndex] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Web Audio Synth for realistic mechanical printer sound chimes
  const playSoundEffect = useCallback((type: "feed" | "scan" | "done") => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "feed") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "scan") {
        osc.type = "sine";
        const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        const f = freqs[Math.floor(Math.random() * freqs.length)] ?? 523.25;
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === "done") {
        const now = ctx.currentTime;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start();
        osc.stop(now + 0.4);
      }
    } catch {
      // Audio context fallbacks handled silently
    }
  }, [soundEnabled]);

  const startPrintSequence = useCallback(() => {
    setStage("feeding");
    setPrintProgress(0);
    playSoundEffect("feed");

    // Stage 1: Feeding (0 - 600ms)
    setTimeout(() => {
      setStage("printing");
    }, 700);
  }, [playSoundEffect]);

  useEffect(() => {
    if (autoPlay && stage === "idle") {
      startPrintSequence();
    }
  }, [autoPlay, stage, startPrintSequence]);

  // Handle printing progress loop
  useEffect(() => {
    if (stage !== "printing") return;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2;
      setPrintProgress(currentProgress);
      setCmykIndex((prev) => (prev + 1) % 4);

      if (currentProgress % 10 === 0) {
        playSoundEffect("scan");
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setStage("curing");

        setTimeout(() => {
          setStage("completed");
          playSoundEffect("done");
        }, 600);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [stage, playSoundEffect]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
    if (!soundEnabled && !audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
  };

  const getStatusText = () => {
    switch (stage) {
      case "idle":
        return "PRINTER READY • STANDBY";
      case "feeding":
        return "FEEDING 350GSM PREMIUM ART BOARD...";
      case "printing":
        return `HIGH-PRECISION CMYK OFFSET PRINTING (${printProgress}%)`;
      case "curing":
        return "APPLYING FOIL STAMPING & UV FINISH...";
      case "completed":
        return "PRINT COMPLETED SUCCESSFULLY!";
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-500 ${
        isModal
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          : "rounded-3xl border border-[#BB8F3E]/30 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-10 shadow-2xl text-white my-6"
      }`}
    >
      {/* Header bar for Modal or Embedded Card */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#BB8F3E]/20 text-[#BB8F3E] ring-1 ring-[#BB8F3E]/40">
            <Printer className="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              JAYAMINA LIVE OFFSET PRINTER
              <span className="inline-flex items-center gap-1 rounded-full bg-[#BB8F3E]/15 px-2.5 py-0.5 text-[0.7rem] font-mono font-medium text-[#E2C175] border border-[#BB8F3E]/30">
                <Sparkles className="h-3 w-3" /> Live Simulator
              </span>
            </h3>
            <p className="text-xs text-neutral-400 font-mono">{getStatusText()}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute/Unmute */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSound}
            className="border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700 h-9 px-3 text-xs"
            title={soundEnabled ? "Mute Printer Audio" : "Enable Sound Effects"}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4 text-emerald-400 mr-1" /> : <VolumeX className="h-4 w-4 text-neutral-400 mr-1" />}
            {soundEnabled ? "Sound On" : "Sound Off"}
          </Button>

          {/* Replay */}
          <Button
            variant="outline"
            size="sm"
            onClick={startPrintSequence}
            disabled={stage === "feeding" || stage === "printing" || stage === "curing"}
            className="border-[#BB8F3E]/40 bg-[#BB8F3E]/10 text-[#E2C175] hover:bg-[#BB8F3E]/20 h-9 px-3 text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            Print Again
          </Button>

          {isModal && onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 h-9 w-9 rounded-xl"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Main Printer Visual Container */}
      <div className="relative mx-auto max-w-4xl flex flex-col items-center justify-center py-4">
        {/* ── PRINTER MACHINE GRAPHIC (TOP BODY) ── */}
        <div className="relative z-20 w-full max-w-2xl rounded-2xl border border-neutral-700 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-5 shadow-2xl">
          {/* Top Panel & Status Lights */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              {/* CMYK Tank Status Indicator */}
              <div className="flex items-center gap-1.5 bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-neutral-800">
                <span className="text-[0.65rem] font-mono text-neutral-400 uppercase mr-1">Ink Tanks:</span>
                <span className={`h-2.5 w-2.5 rounded-full bg-cyan-400 ${cmykIndex === 0 && stage === "printing" ? "scale-125 ring-2 ring-cyan-400/50" : "opacity-70"}`} title="Cyan" />
                <span className={`h-2.5 w-2.5 rounded-full bg-fuchsia-500 ${cmykIndex === 1 && stage === "printing" ? "scale-125 ring-2 ring-fuchsia-500/50" : "opacity-70"}`} title="Magenta" />
                <span className={`h-2.5 w-2.5 rounded-full bg-yellow-400 ${cmykIndex === 2 && stage === "printing" ? "scale-125 ring-2 ring-yellow-400/50" : "opacity-70"}`} title="Yellow" />
                <span className={`h-2.5 w-2.5 rounded-full bg-neutral-100 ${cmykIndex === 3 && stage === "printing" ? "scale-125 ring-2 ring-neutral-400/50" : "opacity-70"}`} title="Key Black" />
              </div>
            </div>

            {/* Live Progress Bar */}
            <div className="flex items-center gap-3">
              <div className="w-32 sm:w-48 h-2 rounded-full bg-neutral-950 overflow-hidden border border-neutral-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-[#BB8F3E] transition-all duration-300"
                  style={{ width: `${stage === "completed" ? 100 : printProgress}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-[#E2C175]">
                {stage === "completed" ? "100%" : `${printProgress}%`}
              </span>
            </div>
          </div>

          {/* Machine Mechanical Rollers & Slot */}
          <div className="relative flex items-center justify-between bg-neutral-950/90 rounded-xl border border-neutral-800 p-4 overflow-hidden">
            {/* Spinning Roller Left */}
            <div className="flex items-center gap-2">
              <div className={`h-7 w-7 rounded-full border-2 border-dashed border-[#BB8F3E] ${stage === "printing" || stage === "feeding" ? "animate-spin" : ""}`} />
              <div className="hidden sm:block">
                <p className="text-[0.65rem] font-mono text-neutral-400">OFFSET ROLLER A</p>
                <p className="text-[0.6rem] font-mono text-emerald-400">3,400 RPM</p>
              </div>
            </div>

            {/* Printing Slot Center */}
            <div className="relative flex-1 mx-4 h-6 rounded-lg bg-black border-2 border-neutral-800 flex items-center justify-center overflow-hidden">
              {/* Laser Scanning Head beam */}
              {(stage === "printing" || stage === "feeding") && (
                <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-[0_0_15px_#00ffff]" />
              )}
              <span className="font-mono text-[0.65rem] text-neutral-500 tracking-widest uppercase">
                ▼ FEED OUTPUT SLOT ▼
              </span>
            </div>

            {/* Spinning Roller Right */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right">
                <p className="text-[0.65rem] font-mono text-neutral-400">UV CURING UNIT</p>
                <p className="text-[0.6rem] font-mono text-[#E2C175]">ACTIVE 395NM</p>
              </div>
              <div className={`h-7 w-7 rounded-full border-2 border-dashed border-cyan-400 ${stage === "printing" || stage === "curing" ? "animate-spin" : ""}`} />
            </div>
          </div>
        </div>

        {/* ── PRINTED PAPER OUTPUT SHEET (SLIDES DOWN FROM SLOT) ── */}
        <div className="relative z-10 w-full max-w-xl -mt-2 transition-all duration-700 ease-out flex flex-col items-center">
          <div
            className={`w-full rounded-2xl border-2 border-[#BB8F3E]/40 bg-gradient-to-b from-amber-50 via-white to-amber-50 text-neutral-900 shadow-2xl transition-all duration-700 overflow-hidden ${
              stage === "idle"
                ? "translate-y-[-100px] opacity-0 max-h-0"
                : stage === "feeding"
                ? "translate-y-[-40px] opacity-70 max-h-[140px]"
                : stage === "printing"
                ? "translate-y-0 opacity-100 max-h-[600px]"
                : "translate-y-2 opacity-100 max-h-[700px] shadow-[0_20px_50px_rgba(187,143,62,0.25)]"
            }`}
          >
            {/* CMYK Laser Line overlay sweep during printing */}
            {stage === "printing" && (
              <div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 shadow-[0_0_12px_rgba(0,255,255,0.8)] z-30 transition-all duration-75"
                style={{ top: `${printProgress}%` }}
              />
            )}

            {/* Paper Details Content */}
            <div className="relative p-6 sm:p-10 font-sans">
              {/* CMYK Registration Marks at Top */}
              <div className="flex items-center justify-between border-b border-neutral-300 pb-3 mb-6 font-mono text-[0.65rem] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full border border-neutral-800" />
                  <span>TARGET: CMYK 100% PASS</span>
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-4 bg-cyan-400" />
                  <span className="h-2 w-4 bg-fuchsia-500" />
                  <span className="h-2 w-4 bg-yellow-400" />
                  <span className="h-2 w-4 bg-black" />
                </div>
                <span>JOB ID: #JP-2026-HQ</span>
              </div>

              {/* Main Printed Jayamina Logo & Crest */}
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Gold Crest */}
                <div className="relative">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#E2C175] via-[#BB8F3E] to-[#8A6421] text-white shadow-lg ring-4 ring-[#BB8F3E]/20">
                    <Printer className="h-9 w-9 text-white" />
                  </div>
                  {stage === "completed" && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs ring-2 ring-white">
                      <CheckCircle className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>

                {/* Big Printed Brand Title */}
                <div>
                  <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8A6421] via-[#BB8F3E] to-[#E2C175] drop-shadow-sm">
                    JAYAMINA PRINT
                  </h1>
                  <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-neutral-700 mt-1">
                    Quality Offset &amp; Digital Printing Since 2013
                  </p>
                </div>

                {/* Foil Line Divider */}
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BB8F3E] to-transparent rounded-full my-2" />

                {/* Product Capabilities Tags */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-2">
                  {[
                    "Books & Magazines",
                    "Luxury Business Cards",
                    "Custom Cartons & Boxes",
                    "Flyers & Envelopes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-2.5 text-center text-xs font-semibold text-neutral-800 shadow-sm"
                    >
                      <span className="block text-[0.65rem] text-[#BB8F3E] font-mono">PRINTED STOCK</span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Bottom Footer Stamp */}
                <div className="w-full pt-4 mt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
                  <span className="font-mono">📍 Colombo, Sri Lanka • High-Capacity Offset Press</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600" /> Premium Quality Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls beneath Printer */}
        {stage === "completed" && (
          <div className="relative z-30 mt-6 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {isModal ? (
              <Button
                onClick={onClose}
                size="lg"
                className="bg-gradient-to-r from-[#E2C175] via-[#BB8F3E] to-[#8A6421] text-white font-bold px-8 shadow-xl hover:brightness-110 rounded-2xl"
              >
                Explore Jayamina Print Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#E2C175] via-[#BB8F3E] to-[#8A6421] px-6 py-3 text-sm font-bold text-white shadow-xl hover:brightness-110 transition-all"
              >
                Browse Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
