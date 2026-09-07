import { useEffect, useRef, useState } from "react";
import { stats } from "./data";
import { useInView } from "./Reveal";

function useCount(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, run]);

  return value;
}

function Stat({ item, run }: { item: (typeof stats)[number]; run: boolean }) {
  const count = useCount(item.value, run);
  return (
    <div className="px-4 py-6 text-center">
      <p className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
        {item.display ?? `${count}${item.suffix}`}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm sm:tracking-normal sm:normal-case">
        {item.label}
      </p>
    </div>
  );
}

export function StatBar() {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid grid-cols-2 divide-border rounded-2xl border border-border bg-surface/60 backdrop-blur-sm sm:grid-cols-4 sm:divide-x">
        {stats.map((s) => (
          <Stat key={s.label} item={s} run={visible} />
        ))}
      </div>
    </div>
  );
}
