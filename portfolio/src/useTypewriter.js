import { useEffect, useState } from "react";

// Reveals `text` one character at a time. `done` becomes true once finished,
// so the caller can stop showing the blinking cursor.
export default function useTypewriter(text, speed = 24, startDelay = 900) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}