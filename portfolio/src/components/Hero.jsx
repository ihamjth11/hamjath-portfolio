import useTilt from "../useTilt";
import useParallax from "../useParallax";
import useTypewriter from "../useTypewriter";

const particles = [
  { left: "8%", delay: "0s", duration: "9s", size: 3 },
  { left: "18%", delay: "1.2s", duration: "7s", size: 2 },
  { left: "27%", delay: "2.4s", duration: "10s", size: 4 },
  { left: "38%", delay: "0.6s", duration: "8s", size: 2 },
  { left: "47%", delay: "3s", duration: "9.5s", size: 3 },
  { left: "58%", delay: "1.8s", duration: "7.5s", size: 2 },
  { left: "67%", delay: "0.3s", duration: "11s", size: 3 },
  { left: "76%", delay: "2.1s", duration: "8.5s", size: 4 },
  { left: "85%", delay: "1.5s", duration: "9s", size: 2 },
  { left: "93%", delay: "0.9s", duration: "10.5s", size: 3 },
  { left: "13%", delay: "4s", duration: "8s", size: 2 },
  { left: "63%", delay: "3.6s", duration: "9s", size: 3 },
];

function HeroBackground({ speed }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[8%] left-[12%] w-[340px] h-[340px] rounded-full bg-signal/10 blur-[90px] animate-blobDrift"
        style={{ transform: `translateY(${speed}px)` }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[380px] h-[380px] rounded-full bg-copper/10 blur-[100px] animate-blobDrift"
        style={{ animationDelay: "-6s", transform: `translateY(${speed * 1.4}px)` }}
      />
      {particles.map((p, i) => {
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-signal/50 animate-particleFloat"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        );
      })}
    </div>
  );
}

const TAGLINE =
  "Full-Stack Developer (MERN) | Building Real Products | SE Undergrad | AI/ML & Cybersecurity Explorer";

export default function Hero() {
  const tilt = useTilt(12);
  const photoParallax = useParallax(-0.06);
  const bgParallax = useParallax(0.08);
  const { output, done } = useTypewriter(TAGLINE, 22, 1000);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 overflow-hidden">
      <HeroBackground speed={bgParallax} />

      <div style={{ transform: `translateY(${photoParallax}px)` }}>
        <div className="relative w-[224px] h-[224px] mb-9 mx-auto animate-floatIn">
          <div className="absolute -inset-8 rounded-full bg-signal/25 blur-2xl animate-pulseGlow pointer-events-none" />

          <div
            className="absolute -inset-2.5 rounded-full animate-spin-slow pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, #5FE0CB 15%, transparent 30%, #D08A50 55%, transparent 70%, #5FE0CB 90%, transparent 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />

          <div className="absolute -inset-4 rounded-full border border-copper/35 pointer-events-none" />

          <span className="absolute w-3 h-3 rounded-full bg-copper shadow-[0_0_10px_#D08A50] top-1/2 -left-6 -translate-y-1/2 animate-blink" />
          <span className="absolute w-3 h-3 rounded-full bg-copper shadow-[0_0_10px_#D08A50] top-1/2 -right-6 -translate-y-1/2 animate-blink [animation-delay:.6s]" />
          <span className="absolute w-3 h-3 rounded-full bg-copper shadow-[0_0_10px_#D08A50] left-1/2 -top-6 -translate-x-1/2 animate-blink [animation-delay:1.2s]" />
          <span className="absolute w-3 h-3 rounded-full bg-copper shadow-[0_0_10px_#D08A50] left-1/2 -bottom-6 -translate-x-1/2 animate-blink [animation-delay:1.8s]" />

          <div
            ref={tilt.ref}
            onMouseMove={tilt.handleMove}
            onMouseLeave={tilt.handleLeave}
            style={tilt.style}
            className="relative z-10 w-full h-full rounded-full overflow-hidden border-[3px] border-copper shadow-[0_0_0_8px_rgba(208,138,80,0.08),0_0_50px_rgba(95,224,203,0.18),0_30px_60px_-20px_rgba(0,0,0,0.7)]"
          >
            <img
              src="/profile.jpg"
              alt="Mohomad Hamjath"
              className="w-full h-full object-cover saturate-[1.05] contrast-[1.03] pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="font-plex text-[12.5px] tracking-[.14em] text-gold mb-4 opacity-0 animate-fadeUp [animation-delay:.2s]">
        U1 // MAIN CONTROLLER
      </div>

      <h1 className="font-mono font-extrabold text-[40px] sm:text-[56px] lg:text-[78px] leading-[1.02] tracking-tight opacity-0 animate-fadeUp [animation-delay:.35s]">
        MOHOMAD
        <br />
        <span className="accent-text">HAMJATH</span>
      </h1>

      <p className="mt-5 text-base sm:text-xl text-inkDim opacity-0 animate-fadeUp [animation-delay:.5s] max-w-[720px] mx-auto min-h-[3.4em] sm:min-h-[2.6em]">
        {output}
        {!done && (
          <span className="inline-block w-[2px] h-[1em] bg-signal ml-0.5 align-middle animate-blink" />
        )}
      </p>

      <div className="mt-14 flex flex-wrap justify-center gap-3.5 opacity-0 animate-fadeUp [animation-delay:.65s]">
        {[
          ["#about", "About"],
          ["#flagship", "Flagship Work"],
          ["#skills", "Skills"],
          ["#projects", "Projects"],
          ["#contact", "Contact"],
        ].map(([href, label]) => {
          return (<a
            
              key={href}
              href={href}
              className="font-plex text-xs tracking-widest uppercase px-5 py-2.5 border border-copperDim rounded-full text-inkDim transition-all hover:border-signal hover:text-signal hover:shadow-[0_0_18px_rgba(95,224,203,0.3)] hover:-translate-y-0.5"
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="mt-[76px] flex flex-wrap gap-10 justify-center font-plex text-xs text-inkDim tracking-wide opacity-0 animate-fadeUp [animation-delay:.8s]">
        <span>
          LOCATION <b className="text-ink font-medium">Anuradhapura, Sri Lanka</b>
        </span>
        <span>
          STATUS <b className="text-ink font-medium">Open to opportunities</b>
        </span>
        <span>
          REV <b className="text-ink font-medium">2026.2</b>
        </span>
      </div>

      <div className="mt-14 text-[11px] tracking-[.14em] text-inkDim opacity-0 animate-fadeUp animate-bob [animation-delay:1s]">
        SCROLL ↓
      </div>
    </section>
  );
}