import { useEffect, useState } from "react";

// Returns a scroll-linked offset — pass a different `speed` to different
// elements so they appear to move at different rates (depth illusion).
export default function useParallax(speed = 0.15) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        raf = null;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return offset;
}