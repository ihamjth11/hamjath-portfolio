import { useEffect, useState } from "react";

// PCB-themed boot sequence — shows once on load, then fades into the site.
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      onDone();
      return;
    }

    let raf;
    const start = performance.now();
    const duration = 1600;

    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHide(true);
          setTimeout(onDone, 500);
        }, 200);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const ringLength = 208;
  const offset = ringLength - (ringLength * progress) / 100;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bgDeep transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg width="72" height="72" viewBox="0 0 72 72" className="mb-6">
        <rect x="10" y="10" width="52" height="52" rx="8" fill="none" stroke="#7A5334" strokeWidth="1.5" />
        <path
          d="M10 26 H24 M10 46 H24 M48 26 H62 M48 46 H62 M26 10 V24 M46 10 V24 M26 48 V62 M46 48 V62"
          stroke="#D08A50"
          strokeWidth="1.5"
        />
        <rect
          x="10"
          y="10"
          width="52"
          height="52"
          rx="8"
          fill="none"
          stroke="#5FE0CB"
          strokeWidth="2"
          strokeDasharray={ringLength}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset .1s linear" }}
        />
        <text
          x="36"
          y="41"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="14"
          fontWeight="700"
          fill="#F2F5F0"
        >
          MH
        </text>
      </svg>
      <div className="font-plex text-[11px] tracking-[.2em] text-inkDim">
        BOOTING SYSTEM // {progress}%
      </div>
    </div>
  );
}