import { useRef, useState } from "react";

// Reusable 3D tilt hook — any card/photo that should tilt toward the cursor
// can use this instead of duplicating the logic per component.
// strength: how many degrees of tilt at the edges (higher = more dramatic).
// glare: if true, also tracks pointer position for a shine overlay.
export default function useTilt(strength = 8, glare = false) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(900px) rotateX(${(-y * strength).toFixed(2)}deg) rotateY(${(
        x * strength
      ).toFixed(2)}deg) scale(1.02)`,
      transition: "transform .12s ease-out",
    });

    if (glare) {
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.10), transparent 60%)`,
      });
    }
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
    });
    if (glare) {
      setGlareStyle({ opacity: 0, transition: "opacity .4s ease" });
    }
  }

  return { ref, style, glareStyle, handleMove, handleLeave };
}