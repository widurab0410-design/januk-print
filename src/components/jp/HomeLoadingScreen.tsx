"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ProgressiveFluxLoader } from "@/components/ui/progressive-flux-loader";
import logoNew from "@/assets/new-logo.jpg";

/* ── constants ───────────────────────────────────────────────── */

const PHASES = [
  { at: 0, label: "loading assets" },
  { at: 30, label: "preparing layout" },
  { at: 60, label: "rendering pages" },
  { at: 85, label: "almost ready" },
  { at: 100, label: "welcome" },
];

/** Auto-dismiss threshold in ms (hard cap so the screen never sticks). */
const MAX_DURATION_MS = 4200;

/* ── component ───────────────────────────────────────────────── */

export function HomeLoadingScreen() {
  const reduced = !!useReducedMotion();
  const [visible, setVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  /* Synthetic progress: accelerates then eases into 100 */
  React.useEffect(() => {
    const start = performance.now();

    const tick = () => {
      const elapsed = performance.now() - start;
      // Ease-out cubic: fast start → slow finish
      const t = Math.min(elapsed / MAX_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleComplete = React.useCallback(() => {
    // Small pause at 100 % so "welcome" label reads
    const id = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="home-loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={
            reduced
              ? { opacity: 0, scale: 1.04, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
              : { opacity: 0, scale: 1.04, filter: "blur(6px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
          }
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EA580C] opacity-[0.07] blur-[120px]" />
            <div className="absolute left-1/3 top-2/3 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB923C] opacity-[0.05] blur-[100px]" />
          </div>

          {/* Surface grid decoration */}
          <div
            aria-hidden
            className="surface-grid pointer-events-none absolute inset-0 opacity-30"
          />

          {/* Content stack */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            {/* Logo mark */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 24, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                {/* Glow ring behind the logo */}
                {!reduced && (
                  <motion.div
                    aria-hidden
                    className="absolute -inset-6 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(251,146,60,0.3) 0%, rgba(234,88,12,0.2) 50%, transparent 75%)",
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                )}
                {/* Brand Logo Image rendered cleanly on loading background */}
                <div className="relative p-3.5 bg-white/95 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20">
                  <img
                    src={logoNew}
                    alt="Januk Print"
                    className="h-36 sm:h-44 md:h-52 w-auto object-contain rounded-2xl filter drop-shadow-sm"
                  />
                </div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-xs sm:max-w-sm"
            >
              <ProgressiveFluxLoader
                value={progress}
                phases={PHASES}
                loop={false}
                showLabel={true}
                onComplete={handleComplete}
                gradient="linear-gradient(90deg, #C2410C 0%, #EA580C 35%, #FB923C 55%, #EA580C 78%, #C2410C 100%)"
                textClassName="!text-xl !sm:text-2xl !text-muted-foreground/70"
                barClassName="!h-3"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HomeLoadingScreen;
