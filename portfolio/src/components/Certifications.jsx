import { certifications } from "../data";
import { SectionHeader } from "./Shared";
import useTilt from "../useTilt";

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4" />
      <path d="M12 2l2.5 1.5L17 3l1 2.5 2.5 1-.5 2.7 1.7 2.1-1.7 2.1.5 2.7-2.5 1-1 2.5-2.5-.5L12 22l-2.5-1.5L7 21l-1-2.5-2.5-1 .5-2.7L2.3 12.7l1.7-2.1-.5-2.7 2.5-1L7 3l2.5.5z" />
    </svg>
  );
}

function CertCard({ c }) {
  const tilt = useTilt(3, true);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      className="reveal relative flex justify-between items-center gap-4 px-5 py-4.5 border border-copper/20 rounded-xl bg-panel/25 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-signal"
    >
      <div className="absolute inset-0 pointer-events-none z-20" style={tilt.glareStyle} />
      <div className="relative flex items-center gap-3.5">
        <span className="text-signal">
          <VerifiedBadge />
        </span>
        <div>
          <div className="text-[15px] font-medium">{c.name}</div>
          <div className="text-[12.5px] text-inkDim mt-0.5">{c.issuer}</div>
        </div>
      </div>
      <div className="relative font-plex text-xs text-gold flex-shrink-0">{c.year}</div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader eyebrow="U8 // CERTIFICATIONS" title="Verified Modules" />

        <div className="flex flex-col gap-4">
          {certifications.map((c) => {
            return <CertCard key={c.name} c={c} />;
          })}
        </div>
      </div>
    </section>
  );
}