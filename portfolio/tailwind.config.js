/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#081713",
        bgDeep: "#04100C",
        panel: "#0F2A1E",
        copper: "#D08A50",
        copperDim: "#7A5334",
        gold: "#E8C179",
        ink: "#F2F5F0",
        inkDim: "#9CB0A3",
        signal: "#5FE0CB",
        signalDim: "#2F5850",
        danger: "#E0654F",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        plex: ["'IBM Plex Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatIn: {
          "0%": { opacity: 0, transform: "translateY(-24px) scale(.92)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        flow: {
          to: { strokeDashoffset: -40 },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 0.7, transform: "scale(1.08)" },
        },
        blobDrift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.08)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: 0 },
          "10%": { opacity: 0.6 },
          "90%": { opacity: 0.6 },
          "100%": { transform: "translateY(-140px) translateX(10px)", opacity: 0 },
        },
      },
      animation: {
        fadeUp: "fadeUp .8s ease both",
        floatIn: "floatIn 1s cubic-bezier(.2,.8,.2,1) both",
        blink: "blink 2.4s ease-in-out infinite",
        bob: "bob 2.4s ease-in-out infinite",
        flow: "flow 3.2s linear infinite",
        "spin-slow": "spinSlow 6s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        blobDrift: "blobDrift 14s ease-in-out infinite",
        particleFloat: "particleFloat 8s linear infinite",
      },
    },
  },
  plugins: [],
}